import { AcoesTabela } from "./TableActionsEnum";

export interface TabelaHeader {
	title: string;
	field: string;
	render?: Function;
	actions?: Array<AcoesTabela>;
}

export interface PayloadTabela {
	confirm?: boolean;
	index: number;
	entity: any;
	field?: string;
	column?: TabelaHeader;
	btn?: TabelaCustomButton;
}

export interface TabelaCustomButton {
	type: string;
	icon: string;
	label: string;
	title: string;
}
