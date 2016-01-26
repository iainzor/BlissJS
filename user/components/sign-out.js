System.register(["angular2/core", "../user", "../services/user"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1, user_2;
    var SignOutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_2_1) {
                user_2 = user_2_1;
            }],
        execute: function() {
            SignOutComponent = (function () {
                function SignOutComponent(userService) {
                    this.userService = userService;
                }
                SignOutComponent.prototype.signOut = function () {
                    this.userService.signOut(this.user);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], SignOutComponent.prototype, "user", void 0);
                SignOutComponent = __decorate([
                    core_1.Component({
                        selector: "user-sign-out",
                        template: "\n\t\t<button (click)=\"signOut()\">Sign Out</button>\n\t",
                        providers: [user_2.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_2.UserService])
                ], SignOutComponent);
                return SignOutComponent;
            })();
            exports_1("SignOutComponent", SignOutComponent);
        }
    }
});
//# sourceMappingURL=sign-out.js.map