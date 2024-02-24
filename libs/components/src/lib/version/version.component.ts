import {Component, OnInit} from '@angular/core';

declare var require: any;

/**
 * OBtem a versão do package.json para ser mostrado para o usuário final.
 */
@Component({
  selector: 'organize-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  versao = '';

  constructor() {
  }

  ngOnInit(): void {
    const json = require('../../../../../package.json');
    this.versao = json.version;
  }

}
