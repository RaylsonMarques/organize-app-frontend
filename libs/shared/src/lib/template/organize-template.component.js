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
exports.OrganizeTemplateComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
/**
 * Componente de template para dashboard.
 */
let OrganizeTemplateComponent = class OrganizeTemplateComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() { }
};
exports.OrganizeTemplateComponent = OrganizeTemplateComponent;
exports.OrganizeTemplateComponent = OrganizeTemplateComponent = __decorate([
    (0, core_1.Component)({
        selector: "organize-template",
        templateUrl: "./organize-template.component.html",
        styleUrls: ["./organize-template.component.scss"],
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], OrganizeTemplateComponent);
