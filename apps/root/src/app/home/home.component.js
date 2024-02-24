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
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
/**
 * @access public
 * @description
 * Home page, for application. This is the main page and this define if is mobile or desktop.
 *
 * @author Raylson Marques
 */
let HomeComponent = class HomeComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() { }
};
exports.HomeComponent = HomeComponent;
exports.HomeComponent = HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HomeComponent);
