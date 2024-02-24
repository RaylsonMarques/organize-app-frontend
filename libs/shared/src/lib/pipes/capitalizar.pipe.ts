import {Pipe, PipeTransform} from '@angular/core';
import { Utils } from '../utils/utils';

@Pipe({
    name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    return Utils.capitalizar(value);
  }
}
