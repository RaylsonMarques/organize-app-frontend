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
exports.NotificationService = void 0;
const core_1 = require("@angular/core");
const ngx_toastr_1 = require("ngx-toastr");
let NotificationService = class NotificationService {
    constructor(toastService) {
        this.toastService = toastService;
    }
    success(message) {
        this.toastService.success(message, "this.language.success");
    }
    error(message) {
        this.toastService.error(message, "this.language.error");
    }
    info(message) {
        this.toastService.info(message, "this.language.info");
    }
    alert(message) {
        this.toastService.warning(message, "this.language.alert");
    }
    limpar() {
        this.toastService.clear();
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [ngx_toastr_1.ToastrService])
], NotificationService);
