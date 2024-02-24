import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { NotificationService } from "../service/notification.service";

/**
 * Interceptor que verifica erros vindos do back-end e mostra ao usuário final uma mensagem amigável.
 */
@Injectable({
	providedIn: "root",
})
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private notificationService: NotificationService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap(
				() => {},
				e => {
					if (e instanceof HttpErrorResponse) {
						let mensagem = "";
						if(e.error instanceof Blob){
							mensagem = "Não foi possível processar sua requisição, tente mais tarde.";
						} else {
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
                  if(e.error.mensagem === "Token inválido") {
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
				}
			)
		);
	}
}
