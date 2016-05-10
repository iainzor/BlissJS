System.register(["@angular/core", "@angular/common", "../../ui/block/block", "../user", "../user-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, block_1, user_1, user_service_1;
    var SignUp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            SignUp = (function () {
                function SignUp(userService) {
                    this.userService = userService;
                    this.success = new core_1.EventEmitter();
                    this.fields = [];
                }
                SignUp.prototype.ngOnChanges = function (changes) {
                    if (changes.user) {
                        this.generate(changes.user.currentValue);
                    }
                };
                SignUp.prototype.generate = function (user) {
                    this.fields = [{
                            type: "email",
                            label: "Email Address",
                            key: "email"
                        }, {
                            label: "Username",
                            key: "username"
                        }, {
                            type: "password",
                            label: "Password",
                            key: "password"
                        }];
                };
                SignUp.prototype.submit = function () {
                    var _this = this;
                    this.userService.signUp(this.user).catch(function (error) {
                        if (error.errors) {
                            _this.fields.forEach(function (field) {
                                if (error.errors[field.key]) {
                                    field.error = error.errors[field.key];
                                }
                            });
                        }
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], SignUp.prototype, "user", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SignUp.prototype, "success", void 0);
                SignUp = __decorate([
                    core_1.Component({
                        selector: "user-sign-up",
                        templateUrl: "./bliss/user/sign-up/sign-up.html",
                        directives: [block_1.Block, common_1.NgForm],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], SignUp);
                return SignUp;
            }());
            exports_1("SignUp", SignUp);
        }
    }
});
//# sourceMappingURL=sign-up.js.map