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
    var Checkbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Checkbox = (function () {
                function Checkbox() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Checkbox.prototype, "checked", void 0);
                Checkbox = __decorate([
                    core_1.Component({
                        selector: "ui-checkbox",
                        styleUrls: ["./bliss/ui/checkbox/checkbox.css"],
                        template: "\n\t\t<div class=\"box checked\">\n\t\t\t<div class=\"material-icons\">check_box</div>\n\t\t</div>\n\t\t<div class=\"box unchecked\">\n\t\t\t<div class=\"material-icons\">check_box_outline_blank</div>\n\t\t</div>\n\t",
                        host: {
                            "[class.on]": "checked"
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Checkbox);
                return Checkbox;
            }());
            exports_1("Checkbox", Checkbox);
        }
    }
});
//# sourceMappingURL=checkbox.js.map