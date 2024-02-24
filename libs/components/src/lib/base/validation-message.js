"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMessageMap = void 0;
/**
 * Map of validation abstract messages and validatios types to execute.
 * @todo -> Need implement translation for this messages
 */
class ValidationMessageMap {
    get(key, label, error) {
        const mensagem = ValidationMessageMap.lista.filter((value) => value.key === key);
        if (mensagem)
            return mensagem[0].mensagem(label, error);
        return '';
    }
}
exports.ValidationMessageMap = ValidationMessageMap;
ValidationMessageMap.lista = [
    { key: 'required', mensagem: () => `Preenchimento obrigatório` },
    { key: 'pattern', mensagem: () => `Formato inválido` },
    { key: 'minlength', mensagem: (label, error) => `${label} deve ter no mínimo ${error.requiredLength} caracteres` },
    { key: 'maxlength', mensagem: (label, error) => `${label} deve ter no máximo ${error.requiredLength} caracteres` },
    { key: 'min', mensagem: (label, error) => `${label} não pode ser menor que ${error.min}` },
    { key: 'max', mensagem: (label, error) => `${label} não pode ser maior que ${error.max}` },
];
