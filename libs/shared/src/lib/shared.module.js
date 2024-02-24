"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const angular2_text_mask_1 = require("angular2-text-mask");
const bcpa_directive_module_1 = require("./directive/bcpa-directive.module");
const material_imports_1 = require("./material-imports");
const bcpa_pipe_module_1 = require("./pipes/bcpa-pipe.module");
const organize_template_component_1 = require("./template/organize-template.component");
const ngx_toastr_1 = require("ngx-toastr");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [organize_template_component_1.OrganizeTemplateComponent],
        exports: [organize_template_component_1.OrganizeTemplateComponent, material_imports_1.MATERIAL_IMPORTS, bcpa_directive_module_1.BcpaDirectiveModule, bcpa_pipe_module_1.BcpaPipeModule, forms_1.ReactiveFormsModule],
        imports: [
            common_1.CommonModule,
            material_imports_1.MATERIAL_IMPORTS,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            angular2_text_mask_1.TextMaskModule,
            ngx_toastr_1.ToastrModule.forRoot(),
        ],
        providers: [],
    })
], SharedModule);
