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
exports.ApresentationComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const shared_1 = require("@organize/shared");
const apresentation_translate_1 = require("./translate/apresentation.translate");
let ApresentationComponent = class ApresentationComponent {
    constructor(
    //- Service
    routerService, 
    //- Router
    router) {
        this.routerService = routerService;
        this.router = router;
    }
    ngOnInit() {
        console.log(navigator.language);
        this.language = navigator.language;
    }
    /***** GETTERS *****/
    get apresentationTranslate() {
        return apresentation_translate_1.ApresentationTranslate;
    }
    /***** PUBLIC METHODS *****/
    signUp() {
        this.router.navigate([shared_1.RouterEnum.SIGN_UP], { queryParams: { lang: this.language } });
    }
    signIn() {
        this.router.navigate([shared_1.RouterEnum.SIGN_IN], { queryParams: { lang: this.language } });
    }
};
exports.ApresentationComponent = ApresentationComponent;
exports.ApresentationComponent = ApresentationComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-apresentation',
        templateUrl: './apresentation.component.html',
        styleUrls: ['./apresentation.component.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof shared_1.RouterService !== "undefined" && shared_1.RouterService) === "function" ? _a : Object, router_1.Router])
], ApresentationComponent);
