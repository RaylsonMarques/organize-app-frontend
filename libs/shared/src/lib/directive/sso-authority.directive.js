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
exports.SsoAuthorityDirective = void 0;
const core_1 = require("@angular/core");
/**
 * @OqueFaz Condicional que inclui um elemento HTML se o usuário atual possui
 * qualquer roles passada na expressão
 *
 * @ComoUsar
 * ```
 *     <elemento *ssoAuthority="'ROLE_ADMIN'">...</elemento>
 *
 *     <elemento *ssoAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</elemento>
 * ```o
 */
let SsoAuthorityDirective = class SsoAuthorityDirective {
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    set ssoAuthority(value) {
        const authorities = typeof value === 'string' ? [value] : value;
        this.updateView(authorities);
    }
    updateView(authorities) {
        if (authorities == null) {
            return;
        }
        if (authorities[0] === 'PUBLIC') {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        if (!Array.isArray(authorities)) {
            console.error('É necessário passar uma string ou um Array de strings para a diretiva ssoHasAuthority');
            return;
        }
    }
};
exports.SsoAuthorityDirective = SsoAuthorityDirective;
__decorate([
    (0, core_1.Input)(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SsoAuthorityDirective.prototype, "ssoAuthority", null);
exports.SsoAuthorityDirective = SsoAuthorityDirective = __decorate([
    (0, core_1.Directive)({
        selector: '[ssoAuthority]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], SsoAuthorityDirective);
