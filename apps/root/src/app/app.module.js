"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const router_1 = require("@angular/router");
const components_1 = require("@organize/components");
const shared_1 = require("@organize/shared");
const ng_block_ui_1 = require("ng-block-ui");
const app_component_1 = require("./app.component");
const app_routes_1 = require("./app.routes");
const home_component_1 = require("./home/home.component");
const sign_in_component_1 = require("./sign-in/sign-in.component");
const sign_up_component_1 = require("./sign-up/sign-up.component");
const ngx_toastr_1 = require("ngx-toastr");
const apresentation_component_1 = require("./apresentation/apresentation.component");
const activate_component_1 = require("./activate/activate.component");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, sign_up_component_1.SignUpComponent, sign_in_component_1.SignInComponent, apresentation_component_1.ApresentationComponent, activate_component_1.ActivateComponent],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            ngx_toastr_1.ToastrModule.forRoot(),
            router_1.RouterModule.forRoot(app_routes_1.appRoutes, { initialNavigation: 'enabledBlocking' }),
            ng_block_ui_1.BlockUIModule.forRoot({ message: 'Carregando...' }),
            shared_1.SharedModule,
            components_1.ComponentsModule,
        ],
        exports: [],
        providers: [
            components_1.CardComponent,
            components_1.SimpleDialogComponent,
            components_1.InputDateComponent,
            components_1.InputNumberComponent,
            components_1.InputPasswordComponent,
            components_1.InputTextComponent,
            components_1.InputTimeComponent,
            components_1.ListComponent,
            components_1.NavbarComponent,
            components_1.PaginationComponent,
            components_1.SidebarComponent,
            components_1.TableComponent,
            components_1.VersionComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
