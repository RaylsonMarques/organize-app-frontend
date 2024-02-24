import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

/**
 * @access public
 * @description
 * Home page, for application. This is the main page and this define if is mobile or desktop.
 *
 * @author Raylson Marques
 */
@Component({
  selector: 'organize-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  /******************************** MÉTODOS PUBLICOS ********************************/

  /******************************** MÉTODOS PRIVADOS ********************************/
}
