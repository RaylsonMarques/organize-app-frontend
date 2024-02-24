"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const shared_1 = require("@organize/shared");
const angular2_text_mask_1 = require("angular2-text-mask");
const card_component_1 = require("./card/card.component");
const simple_dialog_component_1 = require("./dialog/simple-dialog.component");
const input_date_component_1 = require("./input-date/input-date.component");
const input_number_component_1 = require("./input-number/input-number.component");
const input_password_component_1 = require("./input-password/input-password.component");
const input_text_component_1 = require("./input-text/input-text.component");
const input_time_component_1 = require("./input-time/input-time.component");
const list_component_1 = require("./list/list.component");
const navbar_component_1 = require("./navbar/navbar.component");
const pagination_component_1 = require("./pagination/pagination.component");
const sidebar_component_1 = require("./sidebar/sidebar.component");
const table_component_1 = require("./table/table.component");
const version_component_1 = require("./version/version.component");
const icon_component_1 = require("./icon/icon.component");
let ComponentsModule = class ComponentsModule {
};
exports.ComponentsModule = ComponentsModule;
exports.ComponentsModule = ComponentsModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            card_component_1.CardComponent,
            simple_dialog_component_1.SimpleDialogComponent,
            input_date_component_1.InputDateComponent,
            input_number_component_1.InputNumberComponent,
            input_password_component_1.InputPasswordComponent,
            input_text_component_1.InputTextComponent,
            input_time_component_1.InputTimeComponent,
            list_component_1.ListComponent,
            navbar_component_1.NavbarComponent,
            pagination_component_1.PaginationComponent,
            sidebar_component_1.SidebarComponent,
            table_component_1.TableComponent,
            version_component_1.VersionComponent,
            icon_component_1.IconComponent,
        ],
        exports: [
            card_component_1.CardComponent,
            simple_dialog_component_1.SimpleDialogComponent,
            input_date_component_1.InputDateComponent,
            input_number_component_1.InputNumberComponent,
            input_password_component_1.InputPasswordComponent,
            input_text_component_1.InputTextComponent,
            input_time_component_1.InputTimeComponent,
            list_component_1.ListComponent,
            navbar_component_1.NavbarComponent,
            pagination_component_1.PaginationComponent,
            sidebar_component_1.SidebarComponent,
            table_component_1.TableComponent,
            version_component_1.VersionComponent,
            icon_component_1.IconComponent
        ],
        imports: [common_1.CommonModule, shared_1.MATERIAL_IMPORTS, router_1.RouterModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, angular2_text_mask_1.TextMaskModule],
    })
], ComponentsModule);
