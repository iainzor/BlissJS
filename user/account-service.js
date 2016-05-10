System.register(["@angular/core", "@angular/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AccountService, ChangePasswordResponse;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AccountService = (function () {
                function AccountService(http) {
                    this.http = http;
                }
                AccountService.prototype.changePassword = function (currentPassword, newPassword, confirmPassword) {
                    var _this = this;
                    var body = JSON.stringify({
                        currentPassword: currentPassword,
                        newPassword: newPassword,
                        confirmPassword: confirmPassword
                    });
                    return new Promise(function (resolve, reject) {
                        _this.http
                            .post("account/change-password.json", body)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (response) {
                            resolve(response);
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                AccountService.prototype.getSettings = function (moduleName) {
                    var _this = this;
                    var search = new http_1.URLSearchParams();
                    search.set("moduleName", moduleName);
                    return new Promise(function (resolve, reject) {
                        _this.http
                            .get("account/settings.json", { search: search })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (response) {
                            resolve(response);
                        }, function (error) {
                            reject(error.json ? error.json() : error);
                        });
                    });
                };
                AccountService.prototype.saveSettings = function (moduleName, settings) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http
                            .post("account/settings.json", JSON.stringify(settings))
                            .map(function (res) { return res.json(); })
                            .subscribe(function () {
                            resolve(true);
                        }, function (error) {
                            reject(error.json ? error.json() : error);
                        });
                    });
                };
                AccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AccountService);
                return AccountService;
            }());
            exports_1("AccountService", AccountService);
            ChangePasswordResponse = (function () {
                function ChangePasswordResponse() {
                }
                return ChangePasswordResponse;
            }());
            exports_1("ChangePasswordResponse", ChangePasswordResponse);
        }
    }
});
//# sourceMappingURL=account-service.js.map