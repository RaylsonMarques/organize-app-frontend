import {HttpParams} from '@angular/common/http';
import * as moment from 'moment';

export class HttpHelper {

    static toParams(...values: any[]): HttpParams {
        let params = new HttpParams();
        values.forEach(value => params = this.include(value, params));
        return params;
    }

    private static include(value: any, params: HttpParams): HttpParams {
        if (typeof value === 'object') {
            Object.getOwnPropertyNames(value)
                .filter(property => value[property] !== null)
                .forEach(property => params = this.appendParam(value, property, params));
        }
        return params;
    }

    private static appendParam(obj: object, property: string, params: HttpParams): HttpParams {
        const value = obj[property] instanceof Date ? moment(obj[property]).toISOString() : obj[property];
        return params.append(property, value);
    }

}
