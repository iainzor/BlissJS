System.register(["angular2/core"], function(exports_1) {
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
    var LayoutSectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LayoutSectionComponent = (function () {
                function LayoutSectionComponent(_elRef) {
                    this._elRef = _elRef;
                }
                Object.defineProperty(LayoutSectionComponent.prototype, "grow", {
                    set: function (size) {
                        var el = this._elRef.nativeElement;
                        el.style.flexGrow = size.toString();
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], LayoutSectionComponent.prototype, "grow", null);
                LayoutSectionComponent = __decorate([
                    core_1.Component({
                        selector: "ui-layout-section",
                        template: "<ng-content></ng-content>",
                        styleUrls: ["./bliss/ui/components/layout-section.css"]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], LayoutSectionComponent);
                return LayoutSectionComponent;
            })();
            exports_1("LayoutSectionComponent", LayoutSectionComponent);
        }
    }
});
//# sourceMappingURL=layout-section.js.map