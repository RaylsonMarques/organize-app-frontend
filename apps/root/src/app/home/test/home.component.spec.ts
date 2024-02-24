import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_IMPORTS } from '@bcpa/shared';

import { HomeComponent } from '../home.component';

describe('HomeComponentTest', () => {
  //- Variáveis de instanciação do componente
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  /**
   * @description
   * Essa função beforeEach, pode ser declarada mais de uma vez em um mesmo teste.
   * Este esta´apenas compilando o componente, de forma assincrona
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        MATERIAL_IMPORTS,
        RouterTestingModule
      ],
      declarations: [HomeComponent],
      providers: [ FormBuilder ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  /**
   * @description
   * Prepara o component, e o fixture
   *
   * @important
   * O que é FIXTURE?
   * É um encapsulador do componente de teste, é a partir do fixture, que temos uma instância do componente dentro do nosso teste.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
