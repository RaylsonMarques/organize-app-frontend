"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@angular/common");
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const app_component_1 = require("../app.component");
describe('AppComponentTest', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [app_component_1.AppComponent]
        }).compileComponents();
    }));
    /**
     * @description
     * Método responsável por criar a instância do componente
     */
    it('Criar a instância do componente', () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    /**
     * @description
     * Método que testa o valor de um atributo do componente.
     */
    it(`Verifica a variável 'title' = 'BCPA 2.0 - root'`, () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('BCPA 2.0 - root');
    });
});
