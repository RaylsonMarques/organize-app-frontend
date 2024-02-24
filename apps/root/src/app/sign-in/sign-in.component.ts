import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SignInTranslate } from './translate/sign-in.translate';
import { IResponseHttpDTO, NotificationService, RouterEnum, RouterService } from '@organize/shared';
import { ILoginUser } from '../../core/model/interface/ILoginUser';
import { LoginUserService } from '../../core/service/LoginUserService.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleDialogComponent } from '@organize/components';
import { ISendCodeToActivateUser } from '../../core/model/interface/ISendCodeToActivateUser';
import { CreateUserService } from '../../core/service/CreateUserService.service';

@Component({
  selector: 'organize-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
	//- public
	public form: FormGroup;
	public language: string;
	//- private
	private queryParams: Params;
	private emailAccessType: boolean;

  constructor(
		//- Services
		private readonly loginUserService: LoginUserService,
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
	public get signInTranslate(): any {
		return SignInTranslate;
	}

	public get routerEnum(): typeof RouterEnum {
		return RouterEnum;
	}

	/***** PUBLIC METHODS *****/
	public submit(): void {
		const login: ILoginUser = this.treatData();

		this.loginUserService.login(login).subscribe({
			next: (response: IResponseHttpDTO) => {
				console.log(response);
				this.notificationService.success(response.message);
				this.router.navigate([this.routerEnum.APP_PARENT], { queryParams: this.queryParams });
			},
			error: ({ error }: HttpErrorResponse) => {
				console.log(error);

				if (error.payload.code === "ORG-200") {
					//- User inactive
					const activateDialogRef: MatDialogRef<SimpleDialogComponent, any> = this.dialog.open(SimpleDialogComponent, {
						data: {
							title: error.message,
							content: 'Para realizar o login o usuário deve estar ativo. Deseja ativar o usuário agora?',
							cancelButton: {
								show: true,
								label: 'Não, quero ativar depois',
								value: false
							},
							okButton: {
								show: true,
								label: 'Sim',
								value: true
							}
						}
					});

					activateDialogRef.afterClosed().subscribe((result: boolean) => {
						if (result) {
							//- User want activate now!
							const payloadToSendCode: ISendCodeToActivateUser = {
								email: this.emailAccessType ? this.form.controls.access.value : null,
								username: !this.emailAccessType ? this.form.controls.access.value : null
							};

							this.createUserService.sendCodeActivation(payloadToSendCode).subscribe({
								next: ({ message : messageSendActivation } : IResponseHttpDTO) => {
									this.notificationService.success(messageSendActivation);
									this.redirect(RouterEnum.USER_ACTIVATE);
								},
								error: ({ error }: HttpErrorResponse) => {
									console.error(error);
									this.notificationService.error(error.message);
								}
							});
						} else {
							//- User won't activate user.
							this.form.controls.access.setValue("");
							this.form.controls.password.setValue("");
							return;
						}
					});
				} else {
					this.notificationService.error(error.message);
				}
			}
		});
	}

	public buttonDisabled(): boolean {
		if (this.form.controls.access.value && this.form.controls.password.value) {
			return false;
		}

		return true;
	}

	public validateTypeAccess(event: any): void {
		const inputValue: string = event.target.value;
		if (inputValue.includes('@gmail.com') || inputValue.includes('@hotmail.com') || inputValue.includes('@yahoo')) {
			//- It's a email type
			this.emailAccessType = true;
			this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].email;
		} else {
			//- It's a name type
			this.emailAccessType = false;
			this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].access;
		}
	}

	public redirect(route: RouterEnum): void {
		this.router.navigate([route], { queryParams: this.queryParams });
	}

	public back(): void {

	}

	/***** PRIVATE METHODS *****/
	private getLanugage(): void {
		this.language = '';
		this.activatedRoute.queryParamMap.subscribe((params: Params) => {
			const language: string = params.get('lang');
			this.language = language;
		});

		this.queryParams = { ...this.queryParams, lang: this.language };
	}

	private initializeVariables(): void {
		this.emailAccessType = false;
		this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].access;
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			access: [null, Validators.required],
			password: [null, Validators.required]
		});
	}

	private treatData(): ILoginUser {
		const { access, password } = this.form.controls;

		const login: ILoginUser = {
			password: password.value,
			username: !this.emailAccessType ? access.value : null,
			email: this.emailAccessType ? access.value : null
		};
		return login;
	}
}
