System.register(["angular2/core", "angular2/http"], function(exports_1) {
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
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.signIn = function (user) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.post("sign-in.json", JSON.stringify(user))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (session) {
                            for (var i in session.user) {
                                user[i] = session.user[i];
                            }
                            resolve(user);
                        }, function (error) {
                            if (error.json) {
                                reject(error.json());
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                };
                UserService.prototype.signOut = function (user) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this.http.post("sign-out.json", "")
                            .map(function (res) { return res.json(); })
                            .subscribe(function (response) {
                            for (var i in response) {
                                user[i] = response[i];
                            }
                            resolve(true);
                        }, function (error) {
                            if (error.json) {
                                reject(error.json());
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                };
                UserService.prototype.signUp = function (user) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http
                            .post("sign-up.json", JSON.stringify({
                            email: user.email,
                            username: user.username,
                            password: user.password
                        }))
                            .map(function (res) { return res.json(); })
                            .subscribe(function (response) {
                            if (response.result && response.result === "error") {
                                reject(response);
                            }
                            else {
                                for (var i in response) {
                                    user[i] = response[i];
                                }
                                resolve(true);
                            }
                        }, function (error) {
                            reject(error.json ? error.json() : error);
                        });
                    });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user-service.js.map