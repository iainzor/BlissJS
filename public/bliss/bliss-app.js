System.register(["rxjs/Rx", "angular2/core", "angular2/http"], function(exports_1) {
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
    var BlissApp;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            BlissApp = (function () {
                function BlissApp(http) {
                    this.http = http;
                    this.config = {};
                }
                BlissApp.prototype.load = function (url) {
                    var req = this.http.get(url);
                    req.map(function (res) { return res.json(); });
                    return req;
                };
                BlissApp = __decorate([
                    core_1.Component({
                        selector: "[bliss-app]"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlissApp);
                return BlissApp;
            })();
            exports_1("BlissApp", BlissApp);
        }
    }
});
//# sourceMappingURL=bliss-app.js.map