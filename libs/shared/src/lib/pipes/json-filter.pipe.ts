import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

/**
 * @Oquefaz: Pipe que faz filter e extrai uma propriedade (MAP) no pipe padrão do Angular | json
 * @ComoUsar:  {{usuario.perfis | json | jsonFilter: 'nome'}}
 */
@Pipe({
    name: 'jsonFilter'
})
export class JsonFilterPipe implements PipeTransform {

    transform(value: any, property: any): any {
        if (_.isNull(value) || _.isUndefined(value)) {
            return '-';
        }
        return JSON.parse(value).map(x => x[property]).join(', ');
    }

}
