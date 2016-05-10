System.register(["@angular/core", "../layout/layout", "../layout/layout-section"], function(exports_1, context_1) {
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
                    this.open = false;
                }
                Tooltip.prototype.ngOnInit = function () {
                    var parent = this._parentEl();
                    parent.addEventListener("mouseover", this._open.bind(this));
                    parent.addEventListener("mouseleave", this._close.bind(this));
                };
                Tooltip.prototype.ngOnDestroy = function () {
                    var parent = this._parentEl();
                    parent.removeEventListener("mouseover", this._open.bind(this));
                    parent.removeEventListener("mouseleave", this._close.bind(this));
                };
                Tooltip.prototype.ngOnChanges = function (changes) {
                    if (changes.title) {
                        setTimeout(this.position.bind(this));
                    }
                };
                Tooltip.prototype.position = function () {
                    var el = this._elRef.nativeElement;
                    var elCoords = el.getBoundingClientRect();
                    var parent = el.parentElement;
                    var parentCoords = parent.getBoundingClientRect();
                    var docCoords = document.body.getBoundingClientRect();
                    var width = elCoords.left + el.clientWidth + parentCoords.width + 10;
                    var diff = width - docCoords.width;
                    if (diff > 0) {
                        el.style.transform = "translateX(-" + (el.clientWidth + 10) + "px)";
                        el.style.transformOrigin = "right center";
                    }
                    else {
                        el.style.transform = "translatX(" + (parentCoords.width + 10) + "px)";
                        el.style.transformOrigin = "left center";
                    }
                };
                Tooltip.prototype._parentEl = function () {
                    return this._elRef.nativeElement.parentNode;
                };
                Tooltip.prototype._open = function () {
                    this.open = true;
                    this.position();
                };
                Tooltip.prototype._close = function () {
                    this.open = false;
                };
                Tooltip = __decorate([
                    core_1.Component({
                        selector: "ui-tooltip",
                        template: "{{title}}",
                        styleUrls: ["./bliss/ui/tooltip/tooltip.css"],
                        directives: [layout_1.Layout, layout_section_1.LayoutSection],
                        inputs: ["title", "open"],
                        host: {
                            "[class.open]": "open"
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Tooltip);
                return Tooltip;
            }());
            exports_1("Tooltip", Tooltip);
        }
    }
});
//# sourceMappingURL=tooltip.js.map