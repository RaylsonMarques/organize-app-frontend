import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SsoAuthorityDirective} from './sso-authority.directive';

/**
 * Module de diretivas que serão utilizadas no cubo.
 */
@NgModule({
  declarations: [
    SsoAuthorityDirective
  ],
  exports: [
    SsoAuthorityDirective
  ],
  imports: [
    CommonModule
  ]
})
export class BcpaDirectiveModule {
}
