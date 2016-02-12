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
    var Block;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Block = (function () {
                function Block(_elRef) {
                    this._elRef = _elRef;
                    this.z = 1;
                    this.compact = false;
                    this._changeZ(1);
                }
                Block.prototype.ngOnChanges = function (changes) {
                    if (changes.z) {
                        this._changeZ(changes.z.currentValue);
                    }
                };
                Block.prototype._changeZ = function (z) {
                    var el = this._elRef.nativeElement;
                    var classList = Array.prototype.slice.apply(el.classList);
                    classList.forEach(function (className) {
                        if (className.match(/^z-/)) {
                            el.classList.remove(className);
                        }
                    });
                    el.classList.add("z-" + z);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Block.prototype, "z", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Block.prototype, "compact", void 0);
                Block = __decorate([
                    core_1.Component({
                        selector: "ui-block",
                        styleUrls: ["./bliss/ui/block/block.css"],
                        template: "\n\t\t<ng-content select=\"header\"></ng-content>\n\t\t<section class=\"content\" [class.compact]=\"compact!==false\">\n\t\t\t<ng-content></ng-content>\n\t\t</section>\n\t\t<ng-content select=\"footer\"></ng-content>\n\t"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Block);
                return Block;
            })();
            exports_1("Block", Block);
        }
    }
});
//# sourceMappingURL=block.js.map