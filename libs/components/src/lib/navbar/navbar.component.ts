import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Barra lateral superior, fragmento do template, guarda as informações do usuário logado.
 */
@Component({
	selector: 'organize-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}

	async ngOnInit() {}

	public logout(): void {
		// this.keycloack.logout("");
	}
}
