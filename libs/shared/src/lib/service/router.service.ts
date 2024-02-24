import { NavigationEnd, Router } from "@angular/router";
import { RouterEnum } from "../enums/RouterEnum";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
class RouterService {
  private _previousUrl: string = '';
  private _currentUrl: string = '';

  constructor(private router: Router) {
    let currentUrl: string = this.router.url;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const previousUrl = currentUrl;
        currentUrl = event.url;

        sessionStorage.setItem("PREVIOUS_URL", previousUrl);
        sessionStorage.setItem("CURRENT_URL", currentUrl);
      }
    });
  }

  /** GETTERS **/
  public get previousUrl(): string {
    return sessionStorage.getItem("PREVIOUS_URL");
  }

  public get currentUrl(): string {
    return sessionStorage.getItem("CURRENT_URL");
  }

  public setPreviousUrl(value: string): void {
    this._previousUrl = value;
    sessionStorage.setItem("PREVIOUS_URL", value);
  }

  public setCurrentUrl(value: string): void {
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
  public getRoute(url: string): string {
    let rota: string = null;
    for (const rotaEnum in RouterEnum) {
      if (url.includes(RouterEnum[rotaEnum])) {
        rota = rotaEnum === "ROOT" ? RouterEnum.ROOT : RouterEnum[rotaEnum];
      };
    }
    return rota;
  }
}

export { RouterService };
