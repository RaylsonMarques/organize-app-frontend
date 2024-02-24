"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormHelper = void 0;
const forms_1 = require("@angular/forms");
/**
 * Classe utilitária para ações do Form e Controls.
 *
 */
class FormHelper {
    /**
     * Verificação do abstract Control para verificação do required.
     *
     * @param control
     */
    static hasRequired(control) {
        const validator = control.validator;
        if (validator) {
            const validationErrors = validator({});
            if (validationErrors && validationErrors['required']) {
                return true;
            }
        }
        return false;
    }
    /**
     * Retorna a label do select item
     *
     * @param value
     * @param options
     */
    static getLabel(value, options) {
        for (const option of options) {
            if (option.value === value) {
                return option.label;
            }
        }
        return null;
    }
    /**
     * Método para validação de todos os campos do FormGroup
     *
     * @param formGroup
     */
    static validateAllFormFields(formGroup) {
        formGroup.markAsTouched({ onlySelf: true });
        formGroup.markAsDirty({ onlySelf: true });
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                FormHelper.validateAllFormFields(control);
            }
        });
    }
}
exports.FormHelper = FormHelper;
