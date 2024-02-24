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
exports.InputNumberComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const base_input_1 = require("../base/base-input");
let InputNumberComponent = class InputNumberComponent extends base_input_1.BaseInput {
    constructor() {
        super();
        this.content = true;
        this.other_content = false;
        this.value = '';
        this.label = '';
        this.disabled = false;
    }
    ngOnInit() {
    }
};
exports.InputNumberComponent = InputNumberComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "controlName", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", String)
], InputNumberComponent.prototype, "value", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "label", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], InputNumberComponent.prototype, "maxlength", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], InputNumberComponent.prototype, "form", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputNumberComponent.prototype, "disabled", void 0);
exports.InputNumberComponent = InputNumberComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-input-number',
        templateUrl: './input-number.component.html',
        styleUrls: ['./input-number.component.scss'],
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: (0, core_1.forwardRef)(() => InputNumberComponent),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], InputNumberComponent);
