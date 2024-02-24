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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const sign_in_translate_1 = require("./translate/sign-in.translate");
const shared_1 = require("@organize/shared");
const LoginUserService_service_1 = require("../../core/service/LoginUserService.service");
const dialog_1 = require("@angular/material/dialog");
const components_1 = require("@organize/components");
const CreateUserService_service_1 = require("../../core/service/CreateUserService.service");
let SignInComponent = class SignInComponent {
    constructor(
    //- Services
    loginUserService, createUserService, routerService, 
    //- Utils
    notificationService, formBuilder, 
    //- Router
    router, activatedRoute, 
    //- Component
    dialog) {
        this.loginUserService = loginUserService;
        this.createUserService = createUserService;
        this.routerService = routerService;
        this.notificationService = notificationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.getLanugage();
        this.initializeVariables();
        this.createForm();
    }
    /***** GETTERS *****/
    get signInTranslate() {
        return sign_in_translate_1.SignInTranslate;
    }
    get routerEnum() {
        return shared_1.RouterEnum;
    }
    /***** PUBLIC METHODS *****/
    submit() {
        const login = this.treatData();
        this.loginUserService.login(login).subscribe({
            next: (response) => {
                console.log(response);
                this.notificationService.success(response.message);
                this.router.navigate([this.routerEnum.APP_PARENT], { queryParams: this.queryParams });
            },
            error: ({ error }) => {
                console.log(error);
                if (error.payload.code === "ORG-200") {
                    //- User inactive
                    const activateDialogRef = this.dialog.open(components_1.SimpleDialogComponent, {
                        data: {
                            title: error.message,
                            content: 'Para realizar o login o usuário deve estar ativo. Deseja ativar o usuário agora?',
                            cancelButton: {
                                show: true,
                                label: 'Não, quero ativar depois',
                                value: false
                            },
                            okButton: {
                                show: true,
                                label: 'Sim',
                                value: true
                            }
                        }
                    });
                    activateDialogRef.afterClosed().subscribe((result) => {
                        if (result) {
                            //- User want activate now!
                            const payloadToSendCode = {
                                email: this.emailAccessType ? this.form.controls.access.value : null,
                                username: !this.emailAccessType ? this.form.controls.access.value : null
                            };
                            this.createUserService.sendCodeActivation(payloadToSendCode).subscribe({
                                next: ({ message: messageSendActivation }) => {
                                    this.notificationService.success(messageSendActivation);
                                    this.redirect(shared_1.RouterEnum.USER_ACTIVATE);
                                },
                                error: ({ error }) => {
                                    console.error(error);
                                    this.notificationService.error(error.message);
                                }
                            });
                        }
                        else {
                            //- User won't activate user.
                            this.form.controls.access.setValue("");
                            this.form.controls.password.setValue("");
                            return;
                        }
                    });
                }
                else {
                    this.notificationService.error(error.message);
                }
            }
        });
    }
    buttonDisabled() {
        if (this.form.controls.access.value && this.form.controls.password.value) {
            return false;
        }
        return true;
    }
    validateTypeAccess(event) {
        const inputValue = event.target.value;
        if (inputValue.includes('@gmail.com') || inputValue.includes('@hotmail.com') || inputValue.includes('@yahoo')) {
            //- It's a email type
            this.emailAccessType = true;
            this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].email;
        }
        else {
            //- It's a name type
            this.emailAccessType = false;
            this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].access;
        }
    }
    redirect(route) {
        this.router.navigate([route], { queryParams: this.queryParams });
    }
    back() {
    }
    /***** PRIVATE METHODS *****/
    getLanugage() {
        this.language = '';
        this.activatedRoute.queryParamMap.subscribe((params) => {
            const language = params.get('lang');
            this.language = language;
        });
        this.queryParams = Object.assign(Object.assign({}, this.queryParams), { lang: this.language });
    }
    initializeVariables() {
        this.emailAccessType = false;
        this.signInTranslate[this.language].access_label = this.signInTranslate[this.language].access;
    }
    createForm() {
        this.form = this.formBuilder.group({
            access: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required]
        });
    }
    treatData() {
        const { access, password } = this.form.controls;
        const login = {
            password: password.value,
            username: !this.emailAccessType ? access.value : null,
            email: this.emailAccessType ? access.value : null
        };
        return login;
    }
};
exports.SignInComponent = SignInComponent;
exports.SignInComponent = SignInComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.scss'],
    }),
    __metadata("design:paramtypes", [LoginUserService_service_1.LoginUserService,
        CreateUserService_service_1.CreateUserService, typeof (_a = typeof shared_1.RouterService !== "undefined" && shared_1.RouterService) === "function" ? _a : Object, typeof (_b = typeof shared_1.NotificationService !== "undefined" && shared_1.NotificationService) === "function" ? _b : Object, forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        dialog_1.MatDialog])
], SignInComponent);
