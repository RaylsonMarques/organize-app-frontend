"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const shared_1 = require("@organize/shared");
const activate_component_1 = require("./activate/activate.component");
const apresentation_component_1 = require("./apresentation/apresentation.component");
const home_component_1 = require("./home/home.component");
const sign_in_component_1 = require("./sign-in/sign-in.component");
const sign_up_component_1 = require("./sign-up/sign-up.component");
/**
 * @todo Verificar como é possível utilizar um template para não ter que criar todas as funcionalidades novamente quando mudar a rota.
 */
const appRoutes = [
    //- Apresentation
    { path: shared_1.RouterEnum.ROOT, component: apresentation_component_1.ApresentationComponent },
    //- Sign up
    { path: shared_1.RouterEnum.SIGN_UP, component: sign_up_component_1.SignUpComponent },
    //- Sign in
    { path: shared_1.RouterEnum.SIGN_IN, component: sign_in_component_1.SignInComponent },
    //- Activation
    { path: shared_1.RouterEnum.USER_ACTIVATE, component: activate_component_1.ActivateComponent },
    {
        path: shared_1.RouterEnum.APP_PARENT,
        component: shared_1.OrganizeTemplateComponent,
        children: [
            {
                path: shared_1.RouterEnum.ROOT,
                component: home_component_1.HomeComponent,
            },
        ]
    },
    // {
    //   path: 'proposta-cartao',
    //   loadChildren: () => import('proposta-cartao/Module').then((m) => m.RemoteEntryModule),
    // },
];
exports.appRoutes = appRoutes;
