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
exports.BlockUIInterceptor = void 0;
const core_1 = require("@angular/core");
const ng_block_ui_1 = require("ng-block-ui");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
/**
 * Interceptor responsável por bloquear a tela de requisições concomitantes.
 */
let BlockUIInterceptor = class BlockUIInterceptor {
    intercept(req, next) {
        this.blockUI.start('Carregando...');
        return next.handle(req).pipe((0, operators_1.catchError)((error) => {
            this.blockUI.stop();
            return (0, rxjs_1.throwError)(error);
        }), (0, operators_1.finalize)(() => {
            this.blockUI.stop();
        }));
    }
};
exports.BlockUIInterceptor = BlockUIInterceptor;
__decorate([
    (0, ng_block_ui_1.BlockUI)(),
    __metadata("design:type", Object)
], BlockUIInterceptor.prototype, "blockUI", void 0);
exports.BlockUIInterceptor = BlockUIInterceptor = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], BlockUIInterceptor);
