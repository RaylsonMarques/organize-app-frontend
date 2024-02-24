import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelper } from '@organize/shared';

import { ValidationMessageMap } from './validation-message';

/**
 * Abstract class for validation treatment and use in base inputs
 */
@Injectable()
export abstract class BaseInput {
	readonly errors: ValidationMessageMap = new ValidationMessageMap();
	public controlName: string;
	public form: FormGroup;
	public label: string;

	public validation(): string {
		let message = '';
		const control = this.form.get(this.controlName);
		const errors = control.errors;
		if (errors && control.invalid && (control.touched || control.dirty)) {
			const errorsKeys = Object.keys(errors);
			if (errorsKeys.length > 0) {
				const key = errorsKeys[0];
				message = this.errors.get(
					key,
					this.label.replace(/[*:]/g, ''),
					errors[key]
				);
			}
		}
		return message;
	}

	public required(): boolean {
		return (
			FormHelper.hasRequired(this.form.get(this.controlName)) &&
			!this.form.get(this.controlName).disabled
		);
	}
}
