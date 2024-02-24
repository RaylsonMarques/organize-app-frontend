import { Route } from '@angular/router';
import { OrganizeTemplateComponent, RouterEnum } from '@organize/shared';

import { ActivateComponent } from './activate/activate.component';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

/**
 * @todo Verificar como é possível utilizar um template para não ter que criar todas as funcionalidades novamente quando mudar a rota.
 */
const appRoutes: Route[] = [
	//- Apresentation
	{ path: RouterEnum.ROOT, component: ApresentationComponent },
	//- Sign up
  { path: RouterEnum.SIGN_UP, component: SignUpComponent },
  //- Sign in
  { path: RouterEnum.SIGN_IN, component: SignInComponent },
	//- Activation
	{ path: RouterEnum.USER_ACTIVATE, component: ActivateComponent },
  {
    path: RouterEnum.APP_PARENT,
    component: OrganizeTemplateComponent,
		children: [
			{
				path: RouterEnum.ROOT,
				component: HomeComponent,
			},
		]
  },
  // {
  //   path: 'proposta-cartao',
  //   loadChildren: () => import('proposta-cartao/Module').then((m) => m.RemoteEntryModule),
  // },
];

export { appRoutes };
