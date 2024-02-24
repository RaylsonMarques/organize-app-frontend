import { Injectable, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormHelper, NotificationService, Validation } from '@organize/shared';

@Injectable()
export abstract class BaseForm implements OnInit {
	@Input() form: FormGroup;
	validations: Validation[];
	validFormSubmit: () => void;
	notificationService: NotificationService;
	formBuilder: FormBuilder;

	protected constructor(protected injector: Injector) {
		this.formBuilder = this.injector.get(FormBuilder);
		this.notificationService = this.injector.get(NotificationService);
	}

	ngOnInit(): void {
		window.scroll(0, 0);
		this.validations = this.validationRules();
		this.validFormSubmit = this.submeter();
		if (this.form === null) {
			this.form = this.buildForm(this.formBuilder);
		}
	}

	submit() {
		FormHelper.validateAllFormFields(this.form);
		if (this.form.valid) {
			this.validate();
		} else {
			this.notificationService.error(
				'Verifique se todos os campos foram preenchidos corretamente.'
			);
		}
	}

	protected validationRules(): Validation[] {
		return [];
	}

	protected buildForm(formBuilder: FormBuilder): FormGroup {
		return formBuilder.group([]);
	}

	private validate(): void {
		let error = this.hasValidationError();
		if (!error) {
			this.validFormSubmit.call(this);
		} else {
			this.notificationService.error(error);
		}
	}

	private hasValidationError(): any {
		let erro = null;
		for (let i = 0; i < this.validations.length; i++) {
			const validation = this.validations[i];
			if (validation.validationPass.call(this) === false) {
				erro = validation.message;
				break;
			}
		}
		return erro;
	}

	protected abstract submeter(): () => void;
}
