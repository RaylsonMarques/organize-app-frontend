import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: "organize-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit, AfterViewChecked {
	@Input() totalItens: number;
	@Input() paginaAtual: number;
	@Input() primeiraPagina?: boolean;
	@Input() ultimaPagina?: boolean;

	@Output() paginaSelecionada: EventEmitter<number> = new EventEmitter();

  public quantidadePaginas: Array<number> = [];

  private paginasTotais: number = 0;
  private totalDeItensPorPagina: number = 5;
  private totalDeBotoesVisiveis: number = 5;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.trataQuantidadeDePaginas();
  }

	public selecionaPagina(pagina: number) {
		this.paginaSelecionada.emit(pagina);
	}

  public irParaPrimeiraPagina() {
    this.selecionaPagina(1);
  }

  public paginaAnterior(pagina: number): void {
    if(this.primeiraPagina) {
      return;
    }
    this.selecionaPagina(pagina);
  }

  public proximaPagina(pagina: number): void {
    if(this.ultimaPagina) {
      return;
    }

    this.selecionaPagina(pagina);
  }

  public irParaUltimaPagina() {
    this.selecionaPagina(this.paginasTotais);
  }

  private trataQuantidadeDePaginas(): void {
    this.quantidadePaginas = Array.from({ length: Math.ceil(this.totalItens / this.totalDeItensPorPagina)}).map((_, i) => (i+1));
    this.paginasTotais = this.quantidadePaginas.length;
    this.atualizar();
  }

  /********** Botões numéricos **********/
  private atualizar(): void {
    //- Precisa reiniciar o array
    this.quantidadePaginas = [];
    //- Calcula a quantidade de itens totais que ficarão à esquerda de à direita de cada página selecionada
    const { maximoEsquerda, maximoDireita } = this.calculaQuantidadeDeBotoes();

    for(let pagina = maximoEsquerda; pagina <= maximoDireita; pagina++) {
      this.quantidadePaginas.push(pagina);
    }

    this.quantidadePaginas = JSON.parse(JSON.stringify(this.quantidadePaginas));
  }

  private calculaQuantidadeDeBotoes(): any {
    let maximoEsquerda: number = this.paginaAtual - Math.floor(this.totalDeBotoesVisiveis / 2);
    let maximoDireita: number = this.paginaAtual + Math.floor(this.totalDeBotoesVisiveis / 2);

    if(maximoEsquerda < 1) {
      maximoEsquerda = 1;
      maximoDireita = this.totalDeBotoesVisiveis;
    }

    if(maximoDireita > this.paginasTotais) {
      maximoEsquerda = this.paginasTotais - (this.totalDeBotoesVisiveis -1);
      maximoDireita = this.paginasTotais;

      if(maximoEsquerda < 1) {
        maximoEsquerda = 1;
      }
    }

    return { maximoEsquerda, maximoDireita }
  }
}
