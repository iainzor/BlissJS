System.register(["angular2/core", "angular2/common", "../../ui/block/block", "../user", "../user-service"], function(exports_1, context_1) {
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
    var SignIn;
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
            SignIn = (function () {
                function SignIn(userService) {
                    this.userService = userService;
                    this.success = new core_1.EventEmitter();
                }
                SignIn.prototype.submit = function () {
                    var _this = this;
                    this.userService.signIn(this.user).then(function () {
                        _this.success.emit(_this.user);
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SignIn.prototype, "success", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], SignIn.prototype, "user", void 0);
                SignIn = __decorate([
                    core_1.Component({
                        selector: "user-sign-in",
                        templateUrl: "./bliss/user/sign-in/sign-in.html",
                        directives: [block_1.Block, common_1.NgForm],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], SignIn);
                return SignIn;
            }());
            exports_1("SignIn", SignIn);
        }
    }
});
//# sourceMappingURL=sign-in.js.map