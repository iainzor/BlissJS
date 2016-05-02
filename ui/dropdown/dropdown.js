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
    var Dropdown;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Dropdown = (function () {
                function Dropdown() {
                    this.ignoreClick = false;
                    this.arrow = true;
                    this.arrowColor = "#fff";
                    this.position = "right";
                    this.open = false;
                    this.openChange = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                Object.defineProperty(Dropdown.prototype, "leftPosition", {
                    get: function () {
                        return this.position === "left" ? "0" : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dropdown.prototype, "rightPosition", {
                    get: function () {
                        return this.position === "right" ? "0" : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Dropdown.prototype.handleEvent = function (e) {
                    switch (e.type) {
                        case "click":
                            this.handleDocClick();
                            break;
                    }
                };
                Dropdown.prototype.toggleContent = function (e) {
                    if (this.open) {
                        if (!this.ignoreClick) {
                            this.closeContent();
                        }
                        else {
                            this.ignoreClick = true;
                        }
                    }
                    else {
                        this.ignoreClick = true;
                        this.openContent();
                    }
                };
                Dropdown.prototype.openContent = function () {
                    this.open = true;
                    this.openChange.emit(this.open);
                    document.addEventListener("click", this);
                };
                Dropdown.prototype.closeContent = function () {
                    this.ignoreClick = false;
                    this.open = false;
                    this.openChange.emit(this.open);
                    this.close.emit(null);
                    document.removeEventListener("click", this);
                };
                Dropdown.prototype.onContentClick = function () {
                    this.ignoreClick = true;
                };
                Dropdown.prototype.handleDocClick = function () {
                    if (!this.ignoreClick) {
                        this.closeContent();
                    }
                    else {
                        this.ignoreClick = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Dropdown.prototype, "arrow", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Dropdown.prototype, "arrowColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Dropdown.prototype, "position", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Dropdown.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Dropdown.prototype, "openChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Dropdown.prototype, "close", void 0);
                Dropdown = __decorate([
                    core_1.Component({
                        selector: "ui-dropdown",
                        styleUrls: ["./bliss/ui/dropdown/dropdown.css"],
                        template: "\n\t\t<ng-content></ng-content>\n\t\t\n\t\t<i \tclass=\"arrow\"\n\t\t\t*ngIf=\"arrow\"\n\t\t\t[style.border-right-color]=\"arrowColor\"\n\t\t\t[style.border-bottom-color]=\"arrowColor\"\n\t\t></i>\n\t\t\n\t\t<div \tclass=\"content\" \n\t\t\t\t[style.left]=\"leftPosition\"\n\t\t\t\t[style.right]=\"rightPosition\"\n\t\t\t\t(click)=\"onContentClick()\"\n\t\t>\n\t\t\t<ng-content select=\"[dropdown-content]\"></ng-content>\n\t\t</div>\n\t",
                        host: {
                            "[class.has-arrow]": "arrow",
                            "[class.open]": "open",
                            "(click)": "toggleContent($event)"
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dropdown);
                return Dropdown;
            }());
            exports_1("Dropdown", Dropdown);
        }
    }
});
//# sourceMappingURL=dropdown.js.map