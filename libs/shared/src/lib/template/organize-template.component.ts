import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente de template para dashboard.
 */
@Component({
	selector: "organize-template",
	templateUrl: "./organize-template.component.html",
	styleUrls: ["./organize-template.component.scss"],
})
export class OrganizeTemplateComponent implements OnInit {

	constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

  /********** MÉTODOS PRIVADOS **********/

}
