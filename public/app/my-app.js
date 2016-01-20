System.register(["angular2/core", "angular2/common", "angular2/http", "../bliss/user/sign-in-form"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, sign_in_form_1;
    var MyApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (sign_in_form_1_1) {
                sign_in_form_1 = sign_in_form_1_1;
            }],
        execute: function() {
            MyApp = (function () {
                function MyApp(http) {
                    var _this = this;
                    this.isReady = false;
                    http.get("app.json").map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.user = data.user;
                        _this.isReady = true;
                    });
                }
                MyApp = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n\t<div *ngIf=\"isReady\">\n\t\t{{user.email}}\n\t\t<div *ngIf=\"user.isActive\">\n\t\t\tHello {{user.displayName}}\n\t\t</div>\n\t\t<div *ngIf=\"!user.isActive\">\n\t\t\t<user-sign-in [(user)]=\"user\"></user-sign-in>\n\t\t</div>\n\t</div>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, sign_in_form_1.SignInComponent]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyApp);
                return MyApp;
            })();
            exports_1("MyApp", MyApp);
        }
    }
});
//# sourceMappingURL=my-app.js.map