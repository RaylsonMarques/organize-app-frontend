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
exports.InputTimeComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const base_input_1 = require("../base/base-input");
const input_text_component_1 = require("../input-text/input-text.component");
let InputTimeComponent = class InputTimeComponent extends base_input_1.BaseInput {
    constructor() {
        super();
        this.value = '';
        this.label = '';
        this.disabled = false;
        //- Public
        this.content = true;
        this.other_content = false;
    }
    ngOnInit() { }
};
exports.InputTimeComponent = InputTimeComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "controlName", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", String)
], InputTimeComponent.prototype, "value", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "label", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], InputTimeComponent.prototype, "maxlength", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], InputTimeComponent.prototype, "form", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTimeComponent.prototype, "disabled", void 0);
exports.InputTimeComponent = InputTimeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-input-time',
        templateUrl: './input-time.component.html',
        styleUrls: ['./input-time.component.scss'],
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: (0, core_1.forwardRef)(() => input_text_component_1.InputTextComponent),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], InputTimeComponent);
