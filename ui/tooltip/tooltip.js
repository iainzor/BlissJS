System.register(["angular2/core", "../layout/layout", "../layout/layout-section"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, layout_1, layout_section_1;
    var Tooltip;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (layout_section_1_1) {
                layout_section_1 = layout_section_1_1;
            }],
        execute: function() {
            Tooltip = (function () {
                function Tooltip(_elRef) {
                    this._elRef = _elRef;
                    var el = _elRef.nativeElement;
                    var parent = el.parentElement;
                    parent.addEventListener("mouseover", this._open.bind(this));
                    parent.addEventListener("mouseleave", this._close.bind(this));
                }
                Tooltip.prototype._open = function () {
                    this.open = true;
                };
                Tooltip.prototype._close = function () {
                    this.open = false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Tooltip.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Tooltip.prototype, "open", void 0);
                Tooltip = __decorate([
                    core_1.Component({
                        selector: "ui-tooltip",
                        templateUrl: "./bliss/ui/tooltip/tooltip.html",
                        styleUrls: ["./bliss/ui/tooltip/tooltip.css"],
                        directives: [layout_1.Layout, layout_section_1.LayoutSection],
                        host: {
                            "[class.open]": "open",
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Tooltip);
                return Tooltip;
            })();
            exports_1("Tooltip", Tooltip);
        }
    }
});
//# sourceMappingURL=tooltip.js.map