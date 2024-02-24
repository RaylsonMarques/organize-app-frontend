import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../service/notification.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private autenticado: boolean = true;
  constructor(
    protected readonly router: Router,
    protected readonly http: HttpClient,
    private readonly notificationService: NotificationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
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
}
