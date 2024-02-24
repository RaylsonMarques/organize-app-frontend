"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDateComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const core_2 = require("@angular/material/core");
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
require("moment/locale/pt-br");
const moment = __importStar(require("moment"));
const base_input_1 = require("../base/base-input");
const date_format_1 = require("./date-format");
const shared_1 = require("@organize/shared");
/**
 * Componente Date
 */
let InputDateComponent = class InputDateComponent extends base_input_1.BaseInput {
    constructor(_adapter) {
        super();
        this._adapter = _adapter;
        this.label = '';
        this.disabled = false;
        this.readonly = false;
        this.mask = shared_1.Utils.MASK_DATA;
    }
    ptBr() {
        this._adapter.setLocale('pt-br');
    }
    formatDate(event) {
        return moment(event.value).format('DD/MM/YYYY');
    }
    ngOnInit() {
    }
};
exports.InputDateComponent = InputDateComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "label", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "controlName", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], InputDateComponent.prototype, "form", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "disabled", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Date)
], InputDateComponent.prototype, "dataMaxima", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputDateComponent.prototype, "readonly", void 0);
exports.InputDateComponent = InputDateComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-input-date',
        templateUrl: './input-date.component.html',
        styleUrls: ['./input-date.component.scss'],
        providers: [
            { provide: core_2.MAT_DATE_LOCALE, useValue: 'pt-BR' },
            // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
            { provide: core_2.MAT_DATE_FORMATS, useValue: date_format_1.DATE_FORMAT }
        ]
    }),
    __metadata("design:paramtypes", [core_2.DateAdapter])
], InputDateComponent);
