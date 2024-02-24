"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPasswordComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const base_input_1 = require("../base/base-input");
let InputPasswordComponent = class InputPasswordComponent extends base_input_1.BaseInput {
    constructor() {
        super();
        this.value = '';
        this.label = '';
        this.disabled = false;
        this.readonly = false;
        //- Utils
        this.content = true;
        this.other_content = false;
        this.hide = true;
    }
    ngOnInit() {
    }
};
exports.InputPasswordComponent = InputPasswordComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "controlName", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", String)
], InputPasswordComponent.prototype, "value", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "label", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], InputPasswordComponent.prototype, "maxlength", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], InputPasswordComponent.prototype, "form", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "disabled", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputPasswordComponent.prototype, "readonly", void 0);
exports.InputPasswordComponent = InputPasswordComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-input-password',
        templateUrl: './input-password.component.html',
        styleUrls: ['./input-password.component.scss']
    }),
    __metadata("design:paramtypes", [])
], InputPasswordComponent);
