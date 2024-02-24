"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcpaPipeModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const capitalizar_pipe_1 = require("./capitalizar.pipe");
const json_filter_pipe_1 = require("./json-filter.pipe");
const search_filter_pipe_1 = require("./search-filter.pipe");
const trim_pipe_1 = require("./trim.pipe");
let BcpaPipeModule = class BcpaPipeModule {
};
exports.BcpaPipeModule = BcpaPipeModule;
exports.BcpaPipeModule = BcpaPipeModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [trim_pipe_1.TrimPipe, json_filter_pipe_1.JsonFilterPipe, capitalizar_pipe_1.CapitalizarPipe, search_filter_pipe_1.IconSearchPipe],
        exports: [trim_pipe_1.TrimPipe, json_filter_pipe_1.JsonFilterPipe, search_filter_pipe_1.IconSearchPipe],
        imports: [common_1.CommonModule],
    })
], BcpaPipeModule);
