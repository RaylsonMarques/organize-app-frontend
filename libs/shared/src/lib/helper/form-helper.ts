import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

/**
 * Classe utilitária para ações do Form e Controls.
 *
 */
export class FormHelper {

  /**
   * Verificação do abstract Control para verificação do required.
   *
   * @param control
   */
  static hasRequired(control: AbstractControl) {
    const validator = control.validator;
    if (validator) {
      const validationErrors = validator({} as AbstractControl);
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
  static getLabel(value: any, options: { value: any, label: string }[]) {
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
  static validateAllFormFields(formGroup: FormGroup) {
    formGroup.markAsTouched({onlySelf: true});
    formGroup.markAsDirty({onlySelf: true});
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        FormHelper.validateAllFormFields(control);
      }
    });
  }
}
