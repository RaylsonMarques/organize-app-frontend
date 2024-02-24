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
exports.RouterService = void 0;
const router_1 = require("@angular/router");
const RouterEnum_1 = require("../enums/RouterEnum");
const core_1 = require("@angular/core");
let RouterService = class RouterService {
    constructor(router) {
        this.router = router;
        this._previousUrl = '';
        this._currentUrl = '';
        let currentUrl = this.router.url;
        this.router.events.subscribe((event) => {
            if (event instanceof router_1.NavigationEnd) {
                const previousUrl = currentUrl;
                currentUrl = event.url;
                sessionStorage.setItem("PREVIOUS_URL", previousUrl);
                sessionStorage.setItem("CURRENT_URL", currentUrl);
            }
        });
    }
    /** GETTERS **/
    get previousUrl() {
        return sessionStorage.getItem("PREVIOUS_URL");
    }
    get currentUrl() {
        return sessionStorage.getItem("CURRENT_URL");
    }
    setPreviousUrl(value) {
        this._previousUrl = value;
        sessionStorage.setItem("PREVIOUS_URL", value);
    }
    setCurrentUrl(value) {
        this._currentUrl = value;
        sessionStorage.setItem("CURRENT_URL", value);
    }
    /**
     * @access public
     * @description
     * Valida a rota obtida de previousUrl para identificar no Enum de Rotas
     *
     * @return Rotas
     */
    getRoute(url) {
        let rota = null;
        for (const rotaEnum in RouterEnum_1.RouterEnum) {
            if (url.includes(RouterEnum_1.RouterEnum[rotaEnum])) {
                rota = rotaEnum === "ROOT" ? RouterEnum_1.RouterEnum.ROOT : RouterEnum_1.RouterEnum[rotaEnum];
            }
            ;
        }
        return rota;
    }
};
exports.RouterService = RouterService;
exports.RouterService = RouterService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [router_1.Router])
], RouterService);
