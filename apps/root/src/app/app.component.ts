import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEnum } from '@organize/shared';

@Component({
	selector: 'organize-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Organize App';

	constructor(private readonly router: Router) {}

	ngOnInit(): void {
		//this.router.navigate([RouterEnum.SIGN_IN], { queryParams: { lang: navigator.language } });
	}
}
