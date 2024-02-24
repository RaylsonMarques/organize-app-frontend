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
exports.NavbarComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
/**
 * Barra lateral superior, fragmento do template, guarda as informações do usuário logado.
 */
let NavbarComponent = class NavbarComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    logout() {
        // this.keycloack.logout("");
    }
};
exports.NavbarComponent = NavbarComponent;
exports.NavbarComponent = NavbarComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], NavbarComponent);
