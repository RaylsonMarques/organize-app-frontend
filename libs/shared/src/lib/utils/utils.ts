/**
 * Classe responsavel por concentrar tudo que for util (Boilterplate code)
 */
export class Utils {
	static readonly REGEX_EMAIL = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	static readonly MASK_CPF = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
	static readonly MASK_DATA = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
	static readonly MASK_TELEFONE_CELULAR = ["(", /\d/, /\d/, ")", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
	static readonly MASK_TELEFONE_FIXO = ["(", /\d/, /\d/, ")", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
	static readonly MASK_CEP = [/\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];

	static capitalizar(txt: string) {
		if (txt == null) {
			return null;
		}

		if (0 === txt.length) {
			return "";
		}

		const prep: string[] = ["por", "a", "para", "de", "em", "pelo", "ao", "pro", "do", "no", "pela", "à", "pra", "da", "na", "pelos", "aos", "pros", "dos", "nos", "pelas", "às", "pras", "das", "nas"];

		const partes = txt.split(" ");

		const res = [];

		for (const parte of partes) {
			const lowered = parte.toLocaleLowerCase();
			if (prep.includes(lowered)) {
				res.push(lowered);
			} else {
				res.push(lowered.charAt(0).toLocaleUpperCase() + lowered.slice(1));
			}
		}

		return res.join(" ");
	}

	static trim(value: string): string {
		if (value == null) {
			return null;
		}

		if (0 === value.length) {
			return "";
		}
		return value.trim();
	}

	static formataCPFSemMascara(cpf: string): string {
		if (cpf) {
			cpf = cpf.replace(".", "");
			cpf = cpf.replace(".", "");
			cpf = cpf.replace("-", "");
			return cpf;
		} else return "";
	}

	static formataCPF(cpf: string) {
		cpf = cpf.replace(/[^\d]/g, "");
		return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
	}

	static formatarCep(cep: string): string {
		cep = cep.replace(/[^\d]/g, "");
		return cep.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
	}

	static formatarData(data: Date): string {
		if (data) {
			const dataSemFormatar = data.toString();
			const dataFormatada = dataSemFormatar.split("-").reverse().join("/");
			return dataFormatada;
		} else {
			return "";
		}
	}

	/*--------------- VALIDADORES ---------------*/
	static validaCpf(cpf: string): boolean {
		let soma: number;
		let resto: number;
		soma = 0;

		const cpfsInvalidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];

		cpf = cpf.replace(/[\s.-]*/gim, "");
		const cpfInvalido = cpfsInvalidos.indexOf(cpf);

		if (!cpf || cpf.length !== 11 || cpfInvalido !== -1) return false;

		for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
		resto = (soma * 10) % 11;

		if (resto == 10 || resto == 11) resto = 0;
		if (resto != parseInt(cpf.substring(9, 10))) return false;

		soma = 0;
		for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
		resto = (soma * 10) % 11;

		if (resto == 10 || resto == 11) resto = 0;

		return resto !== parseInt(cpf.substring(10, 11)) ? false : true;
	}

	static validarRg(valor: string) {
		if (valor != null) {
			const pattern = new RegExp("^s*([0-9a-zA-Z.-]+)s*$");
			return pattern.test(valor);
		} else {
			return false;
		}
	}

  static validarCamposAlfaNumericos(valor: string) {
		if (valor != null) {
			const pattern = new RegExp("^s*([0-9a-zA-Z.-]+)s*$");
			return pattern.test(valor);
		} else {
			return false;
		}
	}

	static validarCamposNumericos(valor: string) {
		if (valor != null) {
			const pattern = new RegExp("^[0-9]*$");
			return pattern.test(valor);
		} else {
			return false;
		}
	}

	static validarCamposCaracteres(valor: string) {
		if (valor != null) {
			const pattern = new RegExp("^[A-Za-z]*$");
			return pattern.test(valor);
		} else {
			return false;
		}
	}
}
