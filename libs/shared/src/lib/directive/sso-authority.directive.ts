import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

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
@Directive({
  selector: '[ssoAuthority]'
})
export class SsoAuthorityDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set ssoAuthority(value: string | string[]) {
    const authorities = typeof value === 'string' ? [value] : value;
    this.updateView(authorities);
  }

  private updateView(authorities: string[]): void {

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
}
