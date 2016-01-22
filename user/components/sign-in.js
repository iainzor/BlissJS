System.register(["rxjs/add/operator/map", "angular2/core", "angular2/common", "angular2/http", "../../bliss/services/bliss", "../user"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, bliss_1, user_1;
    var SignInComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (bliss_1_1) {
                bliss_1 = bliss_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            SignInComponent = (function () {
                function SignInComponent(http, bliss) {
                    this.http = http;
                    this.success = new core_1.EventEmitter();
                    this.user = new user_1.User();
                    this.user = bliss.config.user;
                }
                SignInComponent.prototype.submit = function () {
                    var _this = this;
                    this.http.post("sign-in.json", JSON.stringify(this.user))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (session) {
                        for (var i in session.user) {
                            _this.user[i] = session.user[i];
                        }
                        _this.success.emit(_this.user);
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SignInComponent.prototype, "success", void 0);
                SignInComponent = __decorate([
                    core_1.Component({
                        selector: "user-sign-in",
                        template: "\n\t\t<h1>Please Sign In</h1>\n\t\t<form method=\"post\" action=\"sign-in.json\" (submit)=\"submit()\">\n\t\t\t<p>\n\t\t\t\t<label>Email Address</label>\n\t\t\t\t<input type=\"email\" [(ngModel)]=\"user.email\" required>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"user.password\" required>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input type=\"submit\" value=\"Sign In\">\n\t\t\t</p>\n\t\t</form>\n\t",
                        directives: [common_1.NgForm]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, bliss_1.BlissService])
                ], SignInComponent);
                return SignInComponent;
            })();
            exports_1("SignInComponent", SignInComponent);
        }
    }
});
//# sourceMappingURL=sign-in.js.map