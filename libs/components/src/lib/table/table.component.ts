import { SelectionModel } from "@angular/cdk/collections";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";

import { Page, PageRequest } from "@organize/shared";
import { SimpleDialogComponent } from "../dialog/simple-dialog.component";
import { TabelaHeader, PayloadTabela, TabelaCustomButton } from './tabela-model';

@Component({
	selector: "organize-table",
	templateUrl: "./table.component.html",
	styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnChanges {
	//- Inputs
	@Input() public title = "";
	@Input() public header: Array<TabelaHeader> = [];
	@Input() public rows: Array<any> = [];
	@Input() public paginacao: Page<any>;
	//- Outputs
	@Output() public editar = new EventEmitter<PayloadTabela>();
	@Output() public deletar = new EventEmitter<PayloadTabela>();
	@Output() public visualizar = new EventEmitter<PayloadTabela>();
	@Output() public customBtn = new EventEmitter<PayloadTabela>();
	@Output() public paginar = new EventEmitter<PageRequest>();
	//- Public
	public displayedColumns: string[];
	public dataSource: MatTableDataSource<any>;
	public selection = new SelectionModel<any>(true, []);
	public pageEvent: PageEvent;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatTable) table: MatTable<any>;

	constructor(private dialog: MatDialog) {}

	ngOnChanges(changes: SimpleChanges) {
		if (typeof this.header != "undefined") {
			this.displayedColumns = this.header.map(function (e) {
				return e.field;
			});
		}
	}

	renderContent(index: number, row: any, field: string, column: TabelaHeader) {
		if (typeof column.render == "function") {
			return column.render(index, row, field);
		} else {
			return row[field];
		}
	}

	showActionButton(button: string, column: any): boolean {
		return column.hasOwnProperty("actions") && column.actions.includes(button);
	}

	showCustomActionButton(btn: any, column: any): boolean {
		return typeof btn === "object" && !Array.isArray(btn) && btn !== null;
	}

	emitPreview(index: number, row: any, field: string, column: TabelaHeader) {
		this.visualizar.emit({
			index: index,
			entity: row,
			field: field,
			column: column,
		} as PayloadTabela);
	}

	emitEdit(index: number, row: any, field: string, column: TabelaHeader) {
		this.editar.emit({
			index: index,
			entity: row,
			field: field,
			column: column,
		} as PayloadTabela);
	}

	askDelete(index: number, row: any, field: string, column: TabelaHeader): void {
		const dialogRef = this.dialog.open(SimpleDialogComponent, {
			data: {
				title: "Deseja apagar o registro?",
				cancelButton: {
					show: true,
					label: "Não",
          value: false,
				},
				okButton: {
					show: true,
					label: "Sim",
          value: true
				},
			},
		});

		dialogRef.afterClosed().subscribe(result => {
      console.log('super-tabela', result);
			this.deletar.emit({
				confirm: result,
				index: index,
				entity: row,
				field: field,
				column: column,
			} as PayloadTabela);
		});
	}

	emitCustomBtn(index: number, row: any, btn: TabelaCustomButton) {
		this.customBtn.emit({
			index: index,
			entity: row,
			btn: btn,
		});
	}

	sortTable(event: any): void {
		//- ASC -> Crescente
		//- DESC -> Decrescente
		const coluna = event.active;

		if (event.direction) {
			if (event.direction === "asc") {
				this.rows.sort((a: any, b: any) => {
					if (a[coluna] > b[coluna]) return -1;
					if (a[coluna] < b[coluna]) return 1;
					return 0;
				});

				this.rows = JSON.parse(JSON.stringify(this.rows));
			} else if (event.direction === "desc") {
				this.rows.sort((a: any, b: any) => {
					if (a[coluna] < b[coluna]) return -1;
					if (a[coluna] > b[coluna]) return 1;
					return 0;
				});

				this.rows = JSON.parse(JSON.stringify(this.rows));
			}
		}
	}

	emitNextPage() {
		let queryAdicional: any;

		this.paginar.emit(
			new PageRequest(
				{
					pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
					pageSize: this.pageEvent ? this.pageEvent.pageSize : 10,
				},
				queryAdicional
			)
		);
	}
}
