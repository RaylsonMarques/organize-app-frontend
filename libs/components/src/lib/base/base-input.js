"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInput = void 0;
const core_1 = require("@angular/core");
const shared_1 = require("@organize/shared");
const validation_message_1 = require("./validation-message");
/**
 * Abstract class for validation treatment and use in base inputs
 */
let BaseInput = class BaseInput {
    constructor() {
        this.errors = new validation_message_1.ValidationMessageMap();
    }
    validation() {
        let message = '';
        const control = this.form.get(this.controlName);
        const errors = control.errors;
        if (errors && control.invalid && (control.touched || control.dirty)) {
            const errorsKeys = Object.keys(errors);
            if (errorsKeys.length > 0) {
                const key = errorsKeys[0];
                message = this.errors.get(key, this.label.replace(/[*:]/g, ''), errors[key]);
            }
        }
        return message;
    }
    required() {
        return (shared_1.FormHelper.hasRequired(this.form.get(this.controlName)) &&
            !this.form.get(this.controlName).disabled);
    }
};
exports.BaseInput = BaseInput;
exports.BaseInput = BaseInput = __decorate([
    (0, core_1.Injectable)()
], BaseInput);
