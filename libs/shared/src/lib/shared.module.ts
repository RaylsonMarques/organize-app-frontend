import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { BcpaDirectiveModule } from './directive/bcpa-directive.module';
import { MATERIAL_IMPORTS } from './material-imports';
import { BcpaPipeModule } from './pipes/bcpa-pipe.module';
import { OrganizeTemplateComponent } from './template/organize-template.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [OrganizeTemplateComponent],
	exports: [OrganizeTemplateComponent, MATERIAL_IMPORTS, BcpaDirectiveModule, BcpaPipeModule, ReactiveFormsModule],
	imports: [
		CommonModule,
		MATERIAL_IMPORTS,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		TextMaskModule,
		ToastrModule.forRoot(),
	],
	providers: [],
})
export class SharedModule {}
