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
exports.BaseForm = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const shared_1 = require("@organize/shared");
let BaseForm = class BaseForm {
    constructor(injector) {
        this.injector = injector;
        this.formBuilder = this.injector.get(forms_1.FormBuilder);
        this.notificationService = this.injector.get(shared_1.NotificationService);
    }
    ngOnInit() {
        window.scroll(0, 0);
        this.validations = this.validationRules();
        this.validFormSubmit = this.submeter();
        if (this.form === null) {
            this.form = this.buildForm(this.formBuilder);
        }
    }
    submit() {
        shared_1.FormHelper.validateAllFormFields(this.form);
        if (this.form.valid) {
            this.validate();
        }
        else {
            this.notificationService.error('Verifique se todos os campos foram preenchidos corretamente.');
        }
    }
    validationRules() {
        return [];
    }
    buildForm(formBuilder) {
        return formBuilder.group([]);
    }
    validate() {
        let error = this.hasValidationError();
        if (!error) {
            this.validFormSubmit.call(this);
        }
        else {
            this.notificationService.error(error);
        }
    }
    hasValidationError() {
        let erro = null;
        for (let i = 0; i < this.validations.length; i++) {
            const validation = this.validations[i];
            if (validation.validationPass.call(this) === false) {
                erro = validation.message;
                break;
            }
        }
        return erro;
    }
};
exports.BaseForm = BaseForm;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", forms_1.FormGroup)
], BaseForm.prototype, "form", void 0);
exports.BaseForm = BaseForm = __decorate([
    (0, core_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Injector])
], BaseForm);
