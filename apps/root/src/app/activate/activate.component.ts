import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IResponseHttpDTO, NotificationService, RouterEnum } from '@organize/shared';
import { CreateUserService } from '../../core/service/CreateUserService.service';
import { ActivateTranslate } from './translate/activate.translate';

@Component({
	selector: 'organize-activate',
	templateUrl: './activate.component.html',
	styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
	//- public
	public form: FormGroup;
	public language: string;
	//- private
	private queryParams: Params;

	constructor(
		private readonly createUserService: CreateUserService,
		//- Utils
		private readonly notificationService: NotificationService,
		private readonly formBuilder: FormBuilder,
		//- Router
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getLanugage();
		this.createForm();
	}

	public get activateTranslate(): any {
		return ActivateTranslate;
	}

	public submit(): void {
		const { code } = this.form.controls;
		const user = JSON.parse(sessionStorage.getItem('user_to_activate'));

		if (code.value.trim() === '' || code.value.length < 6) {
			this.notificationService.error('Codigo inválido');
			return;
		}

		this.createUserService.activate({ userId: user.id, code: code.value }).subscribe({
			next: (payload: IResponseHttpDTO) => {
				this.notificationService.success(payload.message);
				this.router.navigate([RouterEnum.SIGN_IN], { queryParams: this.queryParams });
			},
			error: (error) => {
				console.error(error);
				this.notificationService.error(error.message);
			}
		});
	}

	public textTransform(event: any) {
		this.form.controls.code.setValue(event.target.value.toUpperCase());
	}

	public back(): void {}

	private getLanugage(): void {
		this.language = '';
		this.activatedRoute.queryParamMap.subscribe((params: Params) => {
			const language: string = params.get('lang');
			this.language = language;
		});

		this.queryParams = { ...this.queryParams, lang: this.language };
	}

	private createForm(): void {
		this.form = this.formBuilder.group({ code : [ null, Validators.required ]});
	}
}
