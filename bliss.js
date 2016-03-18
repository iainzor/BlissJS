System.register(["rxjs/add/operator/map", "angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var Bliss;
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
            Bliss = (function () {
                function Bliss(_http) {
                    this._http = _http;
                    this.url = "/app.json";
                }
                Bliss.prototype.load = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this._http.get(_this.url)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (config) {
                            resolve(config);
                        });
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Bliss.prototype, "url", void 0);
                Bliss = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Bliss);
                return Bliss;
            }());
            exports_1("Bliss", Bliss);
        }
    }
});
//# sourceMappingURL=bliss.js.map