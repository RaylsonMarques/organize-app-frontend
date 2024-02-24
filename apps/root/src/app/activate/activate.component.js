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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const shared_1 = require("@organize/shared");
const CreateUserService_service_1 = require("../../core/service/CreateUserService.service");
const activate_translate_1 = require("./translate/activate.translate");
let ActivateComponent = class ActivateComponent {
    constructor(createUserService, 
    //- Utils
    notificationService, formBuilder, 
    //- Router
    router, activatedRoute) {
        this.createUserService = createUserService;
        this.notificationService = notificationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.getLanugage();
        this.createForm();
    }
    get activateTranslate() {
        return activate_translate_1.ActivateTranslate;
    }
    submit() {
        const { code } = this.form.controls;
        const user = JSON.parse(sessionStorage.getItem('user_to_activate'));
        if (code.value.trim() === '' || code.value.length < 6) {
            this.notificationService.error('Codigo inválido');
            return;
        }
        this.createUserService.activate({ userId: user.id, code: code.value }).subscribe({
            next: (payload) => {
                this.notificationService.success(payload.message);
                this.router.navigate([shared_1.RouterEnum.SIGN_IN], { queryParams: this.queryParams });
            },
            error: (error) => {
                console.error(error);
                this.notificationService.error(error.message);
            }
        });
    }
    textTransform(event) {
        this.form.controls.code.setValue(event.target.value.toUpperCase());
    }
    back() { }
    getLanugage() {
        this.language = '';
        this.activatedRoute.queryParamMap.subscribe((params) => {
            const language = params.get('lang');
            this.language = language;
        });
        this.queryParams = Object.assign(Object.assign({}, this.queryParams), { lang: this.language });
    }
    createForm() {
        this.form = this.formBuilder.group({ code: [null, forms_1.Validators.required] });
    }
};
exports.ActivateComponent = ActivateComponent;
exports.ActivateComponent = ActivateComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-activate',
        templateUrl: './activate.component.html',
        styleUrls: ['./activate.component.scss'],
    }),
    __metadata("design:paramtypes", [CreateUserService_service_1.CreateUserService, typeof (_a = typeof shared_1.NotificationService !== "undefined" && shared_1.NotificationService) === "function" ? _a : Object, forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute])
], ActivateComponent);
