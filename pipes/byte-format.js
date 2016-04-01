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
    var ByteFormatPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ByteFormatPipe = (function () {
                function ByteFormatPipe() {
                }
                ByteFormatPipe.prototype.transform = function (value, args) {
                    var kb = 1024;
                    var mb = kb * 1024;
                    var gb = mb * 1024;
                    if (value > gb) {
                        return (value / gb).toFixed(2) + " GB";
                    }
                    if (value > mb) {
                        return (value / mb).toFixed(2) + " MB";
                    }
                    if (value > kb) {
                        return (value / kb).toFixed(2) + " kB";
                    }
                    return value.toFixed(0) + " bytes";
                };
                ByteFormatPipe = __decorate([
                    core_1.Pipe({
                        name: "byteFormat"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ByteFormatPipe);
                return ByteFormatPipe;
            }());
            exports_1("ByteFormatPipe", ByteFormatPipe);
        }
    }
});
//# sourceMappingURL=byte-format.js.map