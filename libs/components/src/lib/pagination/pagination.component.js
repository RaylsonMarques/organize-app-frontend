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
exports.PaginationComponent = void 0;
const core_1 = require("@angular/core");
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.paginaSelecionada = new core_1.EventEmitter();
        this.quantidadePaginas = [];
        this.paginasTotais = 0;
        this.totalDeItensPorPagina = 5;
        this.totalDeBotoesVisiveis = 5;
    }
    ngOnInit() { }
    ngAfterViewChecked() {
        this.trataQuantidadeDePaginas();
    }
    selecionaPagina(pagina) {
        this.paginaSelecionada.emit(pagina);
    }
    irParaPrimeiraPagina() {
        this.selecionaPagina(1);
    }
    paginaAnterior(pagina) {
        if (this.primeiraPagina) {
            return;
        }
        this.selecionaPagina(pagina);
    }
    proximaPagina(pagina) {
        if (this.ultimaPagina) {
            return;
        }
        this.selecionaPagina(pagina);
    }
    irParaUltimaPagina() {
        this.selecionaPagina(this.paginasTotais);
    }
    trataQuantidadeDePaginas() {
        this.quantidadePaginas = Array.from({ length: Math.ceil(this.totalItens / this.totalDeItensPorPagina) }).map((_, i) => (i + 1));
        this.paginasTotais = this.quantidadePaginas.length;
        this.atualizar();
    }
    /********** Botões numéricos **********/
    atualizar() {
        //- Precisa reiniciar o array
        this.quantidadePaginas = [];
        //- Calcula a quantidade de itens totais que ficarão à esquerda de à direita de cada página selecionada
        const { maximoEsquerda, maximoDireita } = this.calculaQuantidadeDeBotoes();
        for (let pagina = maximoEsquerda; pagina <= maximoDireita; pagina++) {
            this.quantidadePaginas.push(pagina);
        }
        this.quantidadePaginas = JSON.parse(JSON.stringify(this.quantidadePaginas));
    }
    calculaQuantidadeDeBotoes() {
        let maximoEsquerda = this.paginaAtual - Math.floor(this.totalDeBotoesVisiveis / 2);
        let maximoDireita = this.paginaAtual + Math.floor(this.totalDeBotoesVisiveis / 2);
        if (maximoEsquerda < 1) {
            maximoEsquerda = 1;
            maximoDireita = this.totalDeBotoesVisiveis;
        }
        if (maximoDireita > this.paginasTotais) {
            maximoEsquerda = this.paginasTotais - (this.totalDeBotoesVisiveis - 1);
            maximoDireita = this.paginasTotais;
            if (maximoEsquerda < 1) {
                maximoEsquerda = 1;
            }
        }
        return { maximoEsquerda, maximoDireita };
    }
};
exports.PaginationComponent = PaginationComponent;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalItens", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "paginaAtual", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean)
], PaginationComponent.prototype, "primeiraPagina", void 0);
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Boolean)
], PaginationComponent.prototype, "ultimaPagina", void 0);
__decorate([
    (0, core_1.Output)(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "paginaSelecionada", void 0);
exports.PaginationComponent = PaginationComponent = __decorate([
    (0, core_1.Component)({
        selector: "organize-pagination",
        templateUrl: "./pagination.component.html",
        styleUrls: ["./pagination.component.scss"],
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);
