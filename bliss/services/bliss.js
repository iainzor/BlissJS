System.register(["rxjs/add/operator/map", "angular2/core", "angular2/http", "../bliss-config"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, bliss_config_1;
    var BlissService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (bliss_config_1_1) {
                bliss_config_1 = bliss_config_1_1;
            }],
        execute: function() {
            BlissService = (function () {
                function BlissService(http) {
                    this.http = http;
                    this.config = new bliss_config_1.BlissConfig();
                }
                BlissService.prototype.load = function (url) {
                    var _this = this;
                    this.promise = new Promise(function (resolve, reject) {
                        var req = _this.http.get(url).subscribe(function (res) {
                            _this.config = res.json();
                            resolve(_this.config);
                        });
                    });
                    return this.promise;
                };
                BlissService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlissService);
                return BlissService;
            })();
            exports_1("BlissService", BlissService);
        }
    }
});
//# sourceMappingURL=bliss.js.map