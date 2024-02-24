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
exports.HttpErrorInterceptor = void 0;
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
const core_1 = require("@angular/core");
const notification_service_1 = require("../service/notification.service");
/**
 * Interceptor que verifica erros vindos do back-end e mostra ao usuário final uma mensagem amigável.
 */
let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    intercept(req, next) {
        return next.handle(req).pipe((0, operators_1.tap)(() => { }, e => {
            if (e instanceof http_1.HttpErrorResponse) {
                let mensagem = "";
                if (e.error instanceof Blob) {
                    mensagem = "Não foi possível processar sua requisição, tente mais tarde.";
                }
                else {
                    switch (e.status) {
                        //case 0:
                        //mensagem = "Servidor indisponível no momento, tente novamente mais tarde.";
                        case 403:
                            mensagem = "Usuário sem permissão de acessar a funcionalidade.";
                            break;
                        case 400:
                            mensagem = e.error.mensagem;
                            break;
                        case 401:
                            if (e.error.mensagem === "Token inválido") {
                                window.location.href = "login";
                            }
                            mensagem = e.error.mensagem;
                            break;
                        default:
                            mensagem = "Não foi possível processar sua requisição, tente mais tarde.";
                    }
                }
                this.notificationService.error(mensagem);
            }
        }));
    }
};
exports.HttpErrorInterceptor = HttpErrorInterceptor;
exports.HttpErrorInterceptor = HttpErrorInterceptor = __decorate([
    (0, core_1.Injectable)({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], HttpErrorInterceptor);
