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
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const router_1 = require("@angular/router");
const testing_2 = require("@angular/router/testing");
const shared_1 = require("@bcpa/shared");
const home_component_1 = require("../home.component");
describe('HomeComponentTest', () => {
    //- Variáveis de instanciação do componente
    let component;
    let fixture;
    /**
     * @description
     * Essa função beforeEach, pode ser declarada mais de uma vez em um mesmo teste.
     * Este esta´apenas compilando o componente, de forma assincrona
     */
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                shared_1.MATERIAL_IMPORTS,
                testing_2.RouterTestingModule
            ],
            declarations: [home_component_1.HomeComponent],
            providers: [forms_1.FormBuilder],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    /**
     * @description
     * Prepara o component, e o fixture
     *
     * @important
     * O que é FIXTURE?
     * É um encapsulador do componente de teste, é a partir do fixture, que temos uma instância do componente dentro do nosso teste.
     */
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
