import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base/base-input';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'organize-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputNumberComponent),
    multi: true
}]
})

export class InputNumberComponent extends BaseInput implements OnInit {
  content = true;
  other_content = false;

  @Input()
  controlName: any;

  @Input()
  value: string = '';

  @Input()
  label = '';

  @Input()
  maxlength: number;

  @Input()
  form: FormGroup;

  @Input()
  disabled = false;

  constructor() {
      super();
  }

  ngOnInit(): void {

  }
}
