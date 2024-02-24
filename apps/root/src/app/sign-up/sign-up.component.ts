import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IResponseHttpDTO, NotificationService, RouterEnum, RouterService, Utils } from '@organize/shared';

import { SignUpTranslate } from './translate/sign-up.translate';
import { CreateUserService } from '../../core/service/CreateUserService.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleDialogComponent } from '@organize/components';
import { ICreateBasicUser } from '../../core/model/interface/ICreateBasicUser';
import { ISendCodeToActivateUser } from '../../core/model/interface/ISendCodeToActivateUser';


@Component({
	selector: 'organize-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	//- public
	public form: FormGroup;
	public language: string;
	public passordValidation: {
		lettersUppercaseValid: boolean;
		lettersLowercaseValid: boolean;
		numbersCharactersValid: boolean;
		especialCharacters: boolean;
		passwordLengthValid: boolean;
		passwordMatch: boolean;
	};
	//- private
	private queryParams: Params;

	constructor(
		//- Services
		private readonly createUserService: CreateUserService,
		private readonly routerService: RouterService,
		//- Utils
		private readonly notificationService: NotificationService,
		private readonly formBuilder: FormBuilder,
		//- Router
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		//- Component
		private dialog: MatDialog
		) {}

	ngOnInit(): void {
		this.getLanugage();
		this.initializeVariables();
		this.createForm();
	}

	/***** GETTERS *****/
	public get signUpTranslate(): any {
		return SignUpTranslate;
	}

	/***** PUBLIC METHODS *****/
	public validatePassword(event: any): void {
		const lettersUppercase = /[A-Z]/;
		const lettersLowercase = /[a-z]/;
		const numbers = /[0-9]/;
		const especialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
		const password: string = event.target.value;

		if (!lettersUppercase.test(password)) this.passordValidation.lettersUppercaseValid = false;
		else this.passordValidation.lettersUppercaseValid = true;

		if (!lettersLowercase.test(password)) this.passordValidation.lettersLowercaseValid = false;
		else this.passordValidation.lettersLowercaseValid = true;

		if (!numbers.test(password)) this.passordValidation.numbersCharactersValid = false;
		else this.passordValidation.numbersCharactersValid = true;

		if (!especialCharacters.test(password)) this.passordValidation.especialCharacters = false;
		else this.passordValidation.especialCharacters = true;

		if (password.length < 6) this.passordValidation.passwordLengthValid = false;
		else this.passordValidation.passwordLengthValid = true;
	}

	public isPasswordMatch(event: any): void {
		const { password } = this.form.controls;
		const passwordConfirm: string = event.target.value;

		if (password.value !== passwordConfirm) this.passordValidation.passwordMatch = false;
		else this.passordValidation.passwordMatch = true;
	}

	public submit(): void {
		if (this.userIsValid()) {
			const userToSave: ICreateBasicUser = this.treatPayload();
			this.createUserService.create(userToSave, this.language).subscribe({
				next: (payload: IResponseHttpDTO) => {
					const { message, payload: user } = payload;

					//- Must be activate user for make login
					const activateDialogRef: MatDialogRef<SimpleDialogComponent, any> = this.dialog.open(SimpleDialogComponent, {
						data: {
							title: message,
							content: this.signUpTranslate[this.language].dialog_content_message,
							cancelButton: {
								show: true,
								label: this.signUpTranslate[this.language].dialog_button_cancel,
								value: false
							},
							okButton: {
								show: true,
								label: this.signUpTranslate[this.language].dialog_button_confirm,
								value: true
							}
						}
					});

					activateDialogRef.afterClosed().subscribe((result: boolean) => {
						if (result) {
							//- Send e-mail with code activation
							const payloadToSendCode: ISendCodeToActivateUser = { id: user.id };
							sessionStorage.setItem('user_to_activate', JSON.stringify(user));
							this.createUserService.sendCodeActivation(payloadToSendCode).subscribe({
								next: ({ message: messageSentActivation }: IResponseHttpDTO) => {
									this.notificationService.success(messageSentActivation);
									this.router.navigate([RouterEnum.USER_ACTIVATE], { queryParams: this.queryParams });
								},
								error: (error) => {
									console.error(error);
									this.notificationService.error(error.message);
								}
							});
						} else {
							//- Activate user later
							this.queryParams = {...this.queryParams, activated: false };
							this.router.navigate([RouterEnum.SIGN_IN], { queryParams: this.queryParams });
						}
					});
				},
				error: (error) => {
					console.error(error);
				}
			});
		}
	}

	public back(): void {
		//- Back to previous page
		const previousUrl: string = this.routerService.getRoute(this.routerService.previousUrl);
		this.router.navigate([ previousUrl ], { queryParams: this.queryParams });
	}

	public buttonDisabled(): boolean {
		const { name, surname, nickname, access, email, password} = this.form.controls;
		return !(name.value && surname.value && nickname.value && access.value && email.value && password.value);
	}

	/***** PRIVATE METHODS *****/
	private initializeVariables(): void {
		this.passordValidation = {
			lettersUppercaseValid: null,
			lettersLowercaseValid: null,
			numbersCharactersValid: null,
			especialCharacters: null,
			passwordLengthValid: null,
			passwordMatch: null,
		};
	}

	private getLanugage(): void {
		this.language = '';
		this.activatedRoute.queryParamMap.subscribe((params: Params) => {
			const language: string = params.get('lang');
			this.language = language;
		});

		this.queryParams = { ...this.queryParams, lang: this.language };
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			name: [null, Validators.required],
			surname: [null, Validators.required],
			nickname: [null, Validators.required],
			access: [null, Validators.required],
			email: [null, [Validators.required, Validators.pattern(Utils.REGEX_EMAIL)]],
			password: [null, Validators.required]
		});
	}

	private userIsValid(): boolean {
		const { name, surname, email } = this.form.controls;

		if (name.value.trim() === '' || name.value.length < 3) {
			//- Name is invalid
			this.notificationService.error(this.signUpTranslate[this.language].name_is_invalid);
			return false;
		}

		if (surname.value.trim() === '' || surname.value.length < 3) {
			//- Surname is invalid
			this.notificationService.error(this.signUpTranslate[this.language].surname_is_invalid);
			return false;
		}

		if (!this.emailIsValid(email.value)) {
			//- Email is invalid
			this.notificationService.error(this.signUpTranslate[this.language].email_is_invalid);
			return false;
		}

		return true;
	}

	private treatPayload(): ICreateBasicUser {
		const { name, surname, nickname, access, email, password, passwordConfirm } = this.form.controls;

		return {
			people: {
				name: name.value,
				surname: surname.value,
				nickname: nickname.value,
			},
			login: {
				access: access.value,
				email: email.value,
				password: password.value,
			},
		} as ICreateBasicUser;
	}

	private emailIsValid(email: string): boolean {
		const usuario = email.substring(0, email.indexOf('@'));
		const dominio = email.substring(email.indexOf('@') + 1, email.length);

		return (
			usuario.length >= 1 &&
			dominio.length >= 3 &&
			usuario.search('@') == -1 &&
			dominio.search('@') == -1 &&
			usuario.search(' ') == -1 &&
			dominio.search(' ') == -1 &&
			dominio.search('.') != -1 &&
			dominio.indexOf('.') >= 1 &&
			dominio.lastIndexOf('.') < dominio.length - 1
		);
	}
}
