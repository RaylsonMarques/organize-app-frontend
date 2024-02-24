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
exports.SignUpComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const shared_1 = require("@organize/shared");
const sign_up_translate_1 = require("./translate/sign-up.translate");
const CreateUserService_service_1 = require("../../core/service/CreateUserService.service");
const dialog_1 = require("@angular/material/dialog");
const components_1 = require("@organize/components");
let SignUpComponent = class SignUpComponent {
    constructor(
    //- Services
    createUserService, routerService, 
    //- Utils
    notificationService, formBuilder, 
    //- Router
    router, activatedRoute, 
    //- Component
    dialog) {
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
    get signUpTranslate() {
        return sign_up_translate_1.SignUpTranslate;
    }
    /***** PUBLIC METHODS *****/
    validatePassword(event) {
        const lettersUppercase = /[A-Z]/;
        const lettersLowercase = /[a-z]/;
        const numbers = /[0-9]/;
        const especialCharacters = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
        const password = event.target.value;
        if (!lettersUppercase.test(password))
            this.passordValidation.lettersUppercaseValid = false;
        else
            this.passordValidation.lettersUppercaseValid = true;
        if (!lettersLowercase.test(password))
            this.passordValidation.lettersLowercaseValid = false;
        else
            this.passordValidation.lettersLowercaseValid = true;
        if (!numbers.test(password))
            this.passordValidation.numbersCharactersValid = false;
        else
            this.passordValidation.numbersCharactersValid = true;
        if (!especialCharacters.test(password))
            this.passordValidation.especialCharacters = false;
        else
            this.passordValidation.especialCharacters = true;
        if (password.length < 6)
            this.passordValidation.passwordLengthValid = false;
        else
            this.passordValidation.passwordLengthValid = true;
    }
    isPasswordMatch(event) {
        const { password } = this.form.controls;
        const passwordConfirm = event.target.value;
        if (password.value !== passwordConfirm)
            this.passordValidation.passwordMatch = false;
        else
            this.passordValidation.passwordMatch = true;
    }
    submit() {
        if (this.userIsValid()) {
            const userToSave = this.treatPayload();
            this.createUserService.create(userToSave, this.language).subscribe({
                next: (payload) => {
                    const { message, payload: user } = payload;
                    //- Must be activate user for make login
                    const activateDialogRef = this.dialog.open(components_1.SimpleDialogComponent, {
                        data: {
                            title: message,
                            content: this.signUpTranslate[this.language].dialog_content_message,
                            cancelButton: {
                                show: true,
                                label: this.signUpTranslate[this.language].dialog_button_cancel,
                                value: false
                            },
                            okButton: {
                                show: true,
                                label: this.signUpTranslate[this.language].dialog_button_confirm,
                                value: true
                            }
                        }
                    });
                    activateDialogRef.afterClosed().subscribe((result) => {
                        if (result) {
                            //- Send e-mail with code activation
                            const payloadToSendCode = { id: user.id };
                            sessionStorage.setItem('user_to_activate', JSON.stringify(user));
                            this.createUserService.sendCodeActivation(payloadToSendCode).subscribe({
                                next: ({ message: messageSentActivation }) => {
                                    this.notificationService.success(messageSentActivation);
                                    this.router.navigate([shared_1.RouterEnum.USER_ACTIVATE], { queryParams: this.queryParams });
                                },
                                error: (error) => {
                                    console.error(error);
                                    this.notificationService.error(error.message);
                                }
                            });
                        }
                        else {
                            //- Activate user later
                            this.queryParams = Object.assign(Object.assign({}, this.queryParams), { activated: false });
                            this.router.navigate([shared_1.RouterEnum.SIGN_IN], { queryParams: this.queryParams });
                        }
                    });
                },
                error: (error) => {
                    console.error(error);
                }
            });
        }
    }
    back() {
        //- Back to previous page
        const previousUrl = this.routerService.getRoute(this.routerService.previousUrl);
        this.router.navigate([previousUrl], { queryParams: this.queryParams });
    }
    buttonDisabled() {
        const { name, surname, nickname, access, email, password } = this.form.controls;
        return !(name.value && surname.value && nickname.value && access.value && email.value && password.value);
    }
    /***** PRIVATE METHODS *****/
    initializeVariables() {
        this.passordValidation = {
            lettersUppercaseValid: null,
            lettersLowercaseValid: null,
            numbersCharactersValid: null,
            especialCharacters: null,
            passwordLengthValid: null,
            passwordMatch: null,
        };
    }
    getLanugage() {
        this.language = '';
        this.activatedRoute.queryParamMap.subscribe((params) => {
            const language = params.get('lang');
            this.language = language;
        });
        this.queryParams = Object.assign(Object.assign({}, this.queryParams), { lang: this.language });
    }
    createForm() {
        this.form = this.formBuilder.group({
            name: [null, forms_1.Validators.required],
            surname: [null, forms_1.Validators.required],
            nickname: [null, forms_1.Validators.required],
            access: [null, forms_1.Validators.required],
            email: [null, [forms_1.Validators.required, forms_1.Validators.pattern(shared_1.Utils.REGEX_EMAIL)]],
            password: [null, forms_1.Validators.required]
        });
    }
    userIsValid() {
        const { name, surname, email } = this.form.controls;
        if (name.value.trim() === '' || name.value.length < 3) {
            //- Name is invalid
            this.notificationService.error(this.signUpTranslate[this.language].name_is_invalid);
            return false;
        }
        if (surname.value.trim() === '' || surname.value.length < 3) {
            //- Surname is invalid
            this.notificationService.error(this.signUpTranslate[this.language].surname_is_invalid);
            return false;
        }
        if (!this.emailIsValid(email.value)) {
            //- Email is invalid
            this.notificationService.error(this.signUpTranslate[this.language].email_is_invalid);
            return false;
        }
        return true;
    }
    treatPayload() {
        const { name, surname, nickname, access, email, password, passwordConfirm } = this.form.controls;
        return {
            people: {
                name: name.value,
                surname: surname.value,
                nickname: nickname.value,
            },
            login: {
                access: access.value,
                email: email.value,
                password: password.value,
            },
        };
    }
    emailIsValid(email) {
        const usuario = email.substring(0, email.indexOf('@'));
        const dominio = email.substring(email.indexOf('@') + 1, email.length);
        return (usuario.length >= 1 &&
            dominio.length >= 3 &&
            usuario.search('@') == -1 &&
            dominio.search('@') == -1 &&
            usuario.search(' ') == -1 &&
            dominio.search(' ') == -1 &&
            dominio.search('.') != -1 &&
            dominio.indexOf('.') >= 1 &&
            dominio.lastIndexOf('.') < dominio.length - 1);
    }
};
exports.SignUpComponent = SignUpComponent;
exports.SignUpComponent = SignUpComponent = __decorate([
    (0, core_1.Component)({
        selector: 'organize-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.scss'],
    }),
    __metadata("design:paramtypes", [CreateUserService_service_1.CreateUserService, typeof (_a = typeof shared_1.RouterService !== "undefined" && shared_1.RouterService) === "function" ? _a : Object, typeof (_b = typeof shared_1.NotificationService !== "undefined" && shared_1.NotificationService) === "function" ? _b : Object, forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        dialog_1.MatDialog])
], SignUpComponent);
