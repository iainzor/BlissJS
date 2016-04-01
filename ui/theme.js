System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Theme;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Theme = (function () {
                function Theme() {
                    this.primaryBackgroundColor = "#607D8B";
                    this.primaryTextColor = "#fff";
                    this.accentBackgroundColor = "#8BC34A";
                    this.accentTextColor = "#fff";
                }
                Theme.prototype.ngOnChanges = function () {
                };
                Theme.prototype.decorate = function (el, type) {
                    var _this = this;
                    if (type === void 0) { type = "primary"; }
                    console.log("TEST");
                    this.subscriber.add(function (theme) {
                        console.log(theme);
                        var background, text;
                        switch (type) {
                            case "accent":
                                background = _this.accentBackgroundColor;
                                text = _this.accentTextColor;
                            case "primary":
                            default:
                                background = _this.primaryBackgroundColor;
                                text = _this.primaryTextColor;
                                break;
                        }
                        el.style.backgroundColor = background;
                        el.style.color = text;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Theme.prototype, "primaryBackgroundColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Theme.prototype, "primaryTextColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Theme.prototype, "accentBackgroundColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Theme.prototype, "accentTextColor", void 0);
                Theme = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Theme);
                return Theme;
            }());
            exports_1("Theme", Theme);
        }
    }
});
//# sourceMappingURL=theme.js.map