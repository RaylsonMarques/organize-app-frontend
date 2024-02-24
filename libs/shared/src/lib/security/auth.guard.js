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
exports.AuthGuard = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const notification_service_1 = require("../service/notification.service");
let AuthGuard = class AuthGuard {
    constructor(router, http, notificationService) {
        this.router = router;
        this.http = http;
        this.notificationService = notificationService;
        this.autenticado = true;
    }
    canActivate(route, state) {
        return true;
        // //- Obtem o token do usuário
        // const token = sessionStorage.getItem(CacheEnum.TOKEN);
        // const nome_aplicativo: string = route.data.nome_aplicativo;
        // const acao: string = route.data.acao;
        // //- Verifica se o token é válido e se o usuário possui permissão para acessar a funcionalidade
        // this.http.get(`http://localhost:4001/organize/consulta/permissoes/${nome_aplicativo}/${acao}`,{ headers: { Authorization: token } })
        //   .subscribe({
        //     next: async ({ code, message, payload }: ResponseHttpDTO) => {
        //       if(!payload) {
        //         this.notificationService.alert("Você não tem permissão para acessar esta funcionalidade");
        //         //- Deve limpar o cache do usuário
        //         await this.router.navigate(['/app/dashboard']);
        //       }
        //     },
        //   });
        // return this.autenticado;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.HttpClient,
        notification_service_1.NotificationService])
], AuthGuard);
