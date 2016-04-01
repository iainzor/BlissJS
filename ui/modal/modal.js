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
    var Modal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Modal = (function () {
                function Modal() {
                    this.open = false;
                    this.openChange = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                Modal.prototype._close = function () {
                    this.open = false;
                    this.close.emit(this);
                    this.openChange.emit(this.open);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Modal.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Modal.prototype, "openChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Modal.prototype, "close", void 0);
                Modal = __decorate([
                    core_1.Component({
                        selector: "ui-modal",
                        template: "\n\t<div class=\"content\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"backdrop\" (click)=\"_close()\"></div>\n\t",
                        styleUrls: ["./bliss/ui/modal/modal.css"],
                        host: {
                            "[class.open]": "open"
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Modal);
                return Modal;
            }());
            exports_1("Modal", Modal);
        }
    }
});
//# sourceMappingURL=modal.js.map