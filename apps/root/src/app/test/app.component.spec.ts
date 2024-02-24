import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';

describe('AppComponentTest', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  /**
   * @description
   * Método responsável por criar a instância do componente
   */
  it('Criar a instância do componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * @description
   * Método que testa o valor de um atributo do componente.
   */
  it(`Verifica a variável 'title' = 'BCPA 2.0 - root'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BCPA 2.0 - root');
  });
});
