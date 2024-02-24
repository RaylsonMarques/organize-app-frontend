"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionComponent = void 0;
const core_1 = require("@angular/core");
/**
 * OBtem a versão do package.json para ser mostrado para o usuário final.
 */
let VersionComponent = class VersionComponent {
    constructor() {
        this.versao = '';
    }
    ngOnInit() {
        const json = require('../../../../../package.json');
        this.versao = json.version;
    }
};
exports.VersionComponent = VersionComponent;
exports.VersionComponent = VersionComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-version',
        templateUrl: './version.component.html',
        styleUrls: ['./version.component.css']
    }),
    __metadata("design:paramtypes", [])
], VersionComponent);
