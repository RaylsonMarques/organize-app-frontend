import {Component, Input, OnInit} from '@angular/core';

/**
 * Fragmento do template, abstração de um card.
 */
@Component({
    selector: 'organize-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input()
    titulo: any;

    @Input()
    descricao: any;

    constructor() {
    }

    ngOnInit(): void {
    }
}
