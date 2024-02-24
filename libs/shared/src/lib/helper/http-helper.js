"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
const http_1 = require("@angular/common/http");
const moment = __importStar(require("moment"));
class HttpHelper {
    static toParams(...values) {
        let params = new http_1.HttpParams();
        values.forEach(value => params = this.include(value, params));
        return params;
    }
    static include(value, params) {
        if (typeof value === 'object') {
            Object.getOwnPropertyNames(value)
                .filter(property => value[property] !== null)
                .forEach(property => params = this.appendParam(value, property, params));
        }
        return params;
    }
    static appendParam(obj, property, params) {
        const value = obj[property] instanceof Date ? moment(obj[property]).toISOString() : obj[property];
        return params.append(property, value);
    }
}
exports.HttpHelper = HttpHelper;
