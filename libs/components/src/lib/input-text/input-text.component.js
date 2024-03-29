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
exports.InputTextComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const base_input_1 = require("../base/base-input");
const forms_2 = require("@angular/forms");
let InputTextComponent = class InputTextComponent extends base_input_1.BaseInput {
    constructor() {
        super();
        this.value = '';
        this.label = '';
        this.disabled = false;
        this.readonly = false;
        //- Public
        this.content = true;
        this.other_content = false;
    }
    ngOnInit() { }
};
exports.InputTextComponent = InputTextComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "controlName", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", String)
], InputTextComponent.prototype, "value", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "label", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], InputTextComponent.prototype, "maxlength", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], InputTextComponent.prototype, "form", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "disabled", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], InputTextComponent.prototype, "readonly", void 0);
exports.InputTextComponent = InputTextComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-input-text',
        templateUrl: './input-text.component.html',
        styleUrls: ['./input-text.component.scss'],
        providers: [
            {
                provide: forms_2.NG_VALUE_ACCESSOR,
                useExisting: (0, core_1.forwardRef)(() => InputTextComponent),
                multi: true,
            },
        ],
    }),
    __metadata("design:paramtypes", [])
], InputTextComponent);
