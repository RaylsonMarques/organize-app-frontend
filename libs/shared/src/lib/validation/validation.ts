/**
 * Interface para executar validações anterior a submissão do form.
 */
export interface Validation {
    message: string;
    validationPass: () => boolean;
}
