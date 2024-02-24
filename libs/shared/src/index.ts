import { BcpaDirectiveModule } from './lib/directive/bcpa-directive.module';
import { SsoAuthorityDirective } from './lib/directive/sso-authority.directive';
import { FormHelper } from './lib/helper/form-helper';
import { HttpHelper } from './lib/helper/http-helper';
import { BlockUIInterceptor } from './lib/interceptor/blockui.interceptor';
import { HttpErrorInterceptor } from './lib/interceptor/http-error.interceptor';
import { MATERIAL_IMPORTS } from './lib/material-imports';
import { BcpaPipeModule } from './lib/pipes/bcpa-pipe.module';
import { CapitalizarPipe } from './lib/pipes/capitalizar.pipe';
import { JsonFilterPipe } from './lib/pipes/json-filter.pipe';
import { IconSearchPipe } from './lib/pipes/search-filter.pipe';
import { TrimPipe } from './lib/pipes/trim.pipe';
import { AuthGuard } from './lib/security/auth.guard';
import { Page, PageQuery, PageRequest, QueryBuilder } from './lib/utils/pagination';
import { Utils } from './lib/utils/utils';
import { Validation } from './lib/validation/validation';
import { OrganizeTemplateComponent } from './lib/template/organize-template.component';
import { RouterEnum } from './lib/enums/RouterEnum';
import { NotificationService } from './lib/service/notification.service';
import { RouterService } from './lib/service/router.service';
import { IResponseHttpDTO } from './lib/model/IResponseHttpDTO';

export * from './lib/shared.module';
export {
	//- Directive
  BcpaDirectiveModule,
	SsoAuthorityDirective,
	//- Enums
	RouterEnum,
	//- Helper
  FormHelper,
  HttpHelper,
	//- Interceptor
	BlockUIInterceptor,
	HttpErrorInterceptor,
	//- Model
	IResponseHttpDTO,
	//- Pipes
  BcpaPipeModule,
	CapitalizarPipe,
	JsonFilterPipe,
	IconSearchPipe,
	TrimPipe,
	//- Security
	AuthGuard,
	//- Service
	NotificationService,
	RouterService,
	//- Utils
	//-- Pagination
  PageQuery,
  QueryBuilder,
	PageRequest,
  Page,
	//- Utility
  Utils,
	//- Validation
  Validation,
  //- Material
  MATERIAL_IMPORTS,
	//- Template
	OrganizeTemplateComponent
};
