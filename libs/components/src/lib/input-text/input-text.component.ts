import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseInput } from '../base/base-input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'organize-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputTextComponent),
			multi: true,
		},
	],
})
export class InputTextComponent extends BaseInput implements OnInit {
	//- Inputs
	@Input() public controlName: any;
	@Input() public value: string = '';
	@Input() public label = '';
	@Input() public maxlength: number;
	@Input() public form: FormGroup;
	@Input() public disabled = false;
	@Input() public readonly = false;
	//- Public
	content = true;
	other_content = false;

	constructor() {
		super();
	}

	ngOnInit(): void {}
}
