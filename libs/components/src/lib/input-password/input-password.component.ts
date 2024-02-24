import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseInput } from '../base/base-input';

@Component({
  selector: 'organize-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent extends BaseInput implements OnInit {
	//- Inputs
  @Input() public controlName: any;
  @Input() public value: string = '';
  @Input() public label = '';
  @Input() public maxlength: number;
  @Input() public form: FormGroup;
  @Input() public disabled = false;
  @Input() public readonly = false;
	//- Utils
  public content = true;
  public other_content = false;
  public hide = true;


  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
