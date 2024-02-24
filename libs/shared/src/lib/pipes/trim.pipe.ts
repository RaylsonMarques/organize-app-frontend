import {Pipe, PipeTransform} from '@angular/core';
import { Utils } from '../utils/utils';

@Pipe({
    name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, args?: unknown[]): any {
      return Utils.trim(value);
  }
}
