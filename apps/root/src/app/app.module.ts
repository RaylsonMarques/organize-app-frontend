import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
	CardComponent,
	ComponentsModule,
	InputDateComponent,
	InputNumberComponent,
	InputPasswordComponent,
	InputTextComponent,
	InputTimeComponent,
	ListComponent,
	NavbarComponent,
	PaginationComponent,
	SidebarComponent,
	SimpleDialogComponent,
	TableComponent,
	VersionComponent,
} from '@organize/components';
import { SharedModule } from '@organize/shared';
import { BlockUIModule } from 'ng-block-ui';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { ActivateComponent } from './activate/activate.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, SignUpComponent, SignInComponent, ApresentationComponent, ActivateComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		ToastrModule.forRoot(),
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
		BlockUIModule.forRoot({ message: 'Carregando...' }),
		SharedModule,
		ComponentsModule,
	],
	exports: [],
	providers: [
		CardComponent,
		SimpleDialogComponent,
		InputDateComponent,
		InputNumberComponent,
		InputPasswordComponent,
		InputTextComponent,
		InputTimeComponent,
		ListComponent,
		NavbarComponent,
		PaginationComponent,
		SidebarComponent,
		TableComponent,
		VersionComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
