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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableComponent = void 0;
const collections_1 = require("@angular/cdk/collections");
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const paginator_1 = require("@angular/material/paginator");
const sort_1 = require("@angular/material/sort");
const table_1 = require("@angular/material/table");
const shared_1 = require("@organize/shared");
const simple_dialog_component_1 = require("../dialog/simple-dialog.component");
let TableComponent = class TableComponent {
    constructor(dialog) {
        this.dialog = dialog;
        //- Inputs
        this.title = "";
        this.header = [];
        this.rows = [];
        //- Outputs
        this.editar = new core_1.EventEmitter();
        this.deletar = new core_1.EventEmitter();
        this.visualizar = new core_1.EventEmitter();
        this.customBtn = new core_1.EventEmitter();
        this.paginar = new core_1.EventEmitter();
        this.selection = new collections_1.SelectionModel(true, []);
    }
    ngOnChanges(changes) {
        if (typeof this.header != "undefined") {
            this.displayedColumns = this.header.map(function (e) {
                return e.field;
            });
        }
    }
    renderContent(index, row, field, column) {
        if (typeof column.render == "function") {
            return column.render(index, row, field);
        }
        else {
            return row[field];
        }
    }
    showActionButton(button, column) {
        return column.hasOwnProperty("actions") && column.actions.includes(button);
    }
    showCustomActionButton(btn, column) {
        return typeof btn === "object" && !Array.isArray(btn) && btn !== null;
    }
    emitPreview(index, row, field, column) {
        this.visualizar.emit({
            index: index,
            entity: row,
            field: field,
            column: column,
        });
    }
    emitEdit(index, row, field, column) {
        this.editar.emit({
            index: index,
            entity: row,
            field: field,
            column: column,
        });
    }
    askDelete(index, row, field, column) {
        const dialogRef = this.dialog.open(simple_dialog_component_1.SimpleDialogComponent, {
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
            });
        });
    }
    emitCustomBtn(index, row, btn) {
        this.customBtn.emit({
            index: index,
            entity: row,
            btn: btn,
        });
    }
    sortTable(event) {
        //- ASC -> Crescente
        //- DESC -> Decrescente
        const coluna = event.active;
        if (event.direction) {
            if (event.direction === "asc") {
                this.rows.sort((a, b) => {
                    if (a[coluna] > b[coluna])
                        return -1;
                    if (a[coluna] < b[coluna])
                        return 1;
                    return 0;
                });
                this.rows = JSON.parse(JSON.stringify(this.rows));
            }
            else if (event.direction === "desc") {
                this.rows.sort((a, b) => {
                    if (a[coluna] < b[coluna])
                        return -1;
                    if (a[coluna] > b[coluna])
                        return 1;
                    return 0;
                });
                this.rows = JSON.parse(JSON.stringify(this.rows));
            }
        }
    }
    emitNextPage() {
        let queryAdicional;
        this.paginar.emit(new shared_1.PageRequest({
            pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
            pageSize: this.pageEvent ? this.pageEvent.pageSize : 10,
        }, queryAdicional));
    }
};
exports.TableComponent = TableComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "title", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Array)
], TableComponent.prototype, "header", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Array)
], TableComponent.prototype, "rows", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", typeof (_a = typeof shared_1.Page !== "undefined" && shared_1.Page) === "function" ? _a : Object)
], TableComponent.prototype, "paginacao", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "editar", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "deletar", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "visualizar", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "customBtn", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", Object)
], TableComponent.prototype, "paginar", void 0);
__decorate([
    (0, core_1.ViewChild)(sort_1.MatSort),
    __metadata("design:type", sort_1.MatSort)
], TableComponent.prototype, "sort", void 0);
__decorate([
    (0, core_1.ViewChild)(paginator_1.MatPaginator),
    __metadata("design:type", paginator_1.MatPaginator)
], TableComponent.prototype, "paginator", void 0);
__decorate([
    (0, core_1.ViewChild)(table_1.MatTable),
    __metadata("design:type", table_1.MatTable)
], TableComponent.prototype, "table", void 0);
exports.TableComponent = TableComponent = __decorate([
    (0, core_1.Component)({
        selector: "organize-table",
        templateUrl: "./table.component.html",
        styleUrls: ["./table.component.scss"],
    }),
    __metadata("design:paramtypes", [dialog_1.MatDialog])
], TableComponent);
