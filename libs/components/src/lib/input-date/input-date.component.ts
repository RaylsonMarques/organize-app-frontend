import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import 'moment/locale/pt-br';
import * as moment from 'moment';

import { BaseInput } from '../base/base-input';
import { DATE_FORMAT } from './date-format';
import { Utils } from '@organize/shared';

/**
 * Componente Date
 */
@Component({
    selector: 'organize-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['./input-date.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
        // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
        {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT}
    ]
})
export class InputDateComponent extends BaseInput implements OnInit {

    @Input()
    label = '';

    @Input()
    controlName: any;

    @Input()
    form: FormGroup;

    @Input()
    disabled = false;

    @Input()
    dataMaxima: Date;

    @Input()
    readonly = false;

    mask = Utils.MASK_DATA;

    constructor(private _adapter: DateAdapter<any>) {
        super();

    }

    ptBr() {
        this._adapter.setLocale('pt-br');
    }

    formatDate(event: MatDatepickerInputEvent<Date>): string {
        return moment(event.value).format('DD/MM/YYYY');
    }

    ngOnInit() {
    }
}
