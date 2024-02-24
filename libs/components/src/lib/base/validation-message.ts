type Erro = (label?: string, error?: any) => string;

/**
 * Interface de validação.
 */
interface IValidationMessage {
	key: string;
	mensagem: Erro;
}

/**
 * Map of validation abstract messages and validatios types to execute.
 * @todo -> Need implement translation for this messages
 */
export class ValidationMessageMap {
	static lista: IValidationMessage[] = [
		{ key: 'required', mensagem: () => `Preenchimento obrigatório` },
		{ key: 'pattern', mensagem: () => `Formato inválido` },
		{ key: 'minlength', mensagem: (label, error) => `${label} deve ter no mínimo ${error.requiredLength} caracteres` },
		{ key: 'maxlength', mensagem: (label, error) => `${label} deve ter no máximo ${error.requiredLength} caracteres` },
		{ key: 'min', mensagem: (label, error) => `${label} não pode ser menor que ${error.min}` },
		{ key: 'max', mensagem: (label, error) => `${label} não pode ser maior que ${error.max}` },
	];

	get(key: string, label: string, error: any): string {
		const mensagem = ValidationMessageMap.lista.filter((value) => value.key === key);
		if (mensagem) return mensagem[0].mensagem(label, error);
		return '';
	}
}
