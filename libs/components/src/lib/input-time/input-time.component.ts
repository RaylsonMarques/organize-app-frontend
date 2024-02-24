import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base/base-input';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'organize-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
}]
})

export class InputTimeComponent extends BaseInput implements OnInit {
	//- Inputs
  @Input() public controlName: any;
  @Input() public value: string = '';
  @Input() public label = '';
  @Input() public maxlength: number;
  @Input() public form: FormGroup;
  @Input() public disabled = false;
	//- Public
  public content = true;
  public other_content = false;

  constructor() {
      super();
  }

  ngOnInit(): void {}
}
