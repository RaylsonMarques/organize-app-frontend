import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEnum, RouterService } from '@organize/shared';

import { ApresentationTranslate } from './translate/apresentation.translate';

@Component({
	selector: 'organize-apresentation',
	templateUrl: './apresentation.component.html',
	styleUrls: ['./apresentation.component.scss'],
})
export class ApresentationComponent implements OnInit {
	public language: string;

	constructor(
		//- Service
		private readonly routerService: RouterService,
		//- Router
		private readonly router: Router
	) {}

	ngOnInit(): void {
		console.log(navigator.language);
		this.language = navigator.language;
	}

	/***** GETTERS *****/
	public get apresentationTranslate(): any {
		return ApresentationTranslate;
	}

	/***** PUBLIC METHODS *****/
	public signUp(): void {
		this.router.navigate([RouterEnum.SIGN_UP], { queryParams: { lang: this.language } });
	}

	public signIn(): void {
		this.router.navigate([RouterEnum.SIGN_IN], { queryParams: { lang: this.language } });
	}
}
