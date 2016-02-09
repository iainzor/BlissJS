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
    var TitleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TitleDirective = (function () {
                function TitleDirective(_elRef) {
                    if (_elRef.nativeElement) {
                        this._el = _elRef.nativeElement;
                    }
                }
                Object.defineProperty(TitleDirective.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (title) {
                        this._title = title;
                        if (this._title) {
                            this._build(this._title);
                            this._position();
                        }
                        else {
                            this._destroy();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                TitleDirective.prototype._build = function (title) {
                    if (!this._el) {
                        throw "Cannot build without a host element";
                        return;
                    }
                    if (!this._caption) {
                        this._caption = document.createElement("div");
                        this._caption.classList.add("ui-title");
                        this._el.appendChild(this._caption);
                    }
                    this._caption.innerText = title;
                };
                TitleDirective.prototype._position = function () {
                };
                TitleDirective.prototype._destroy = function () {
                    if (this._caption) {
                        delete this._caption;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], TitleDirective.prototype, "title", null);
                TitleDirective = __decorate([
                    core_1.Directive({
                        selector: "[title]",
                    }),
                    core_1.View({
                        styles: ["\n\t:host > .ui-title {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 100%;\n\t\tbackground-color: #212121;\n\t\tcolor: #fff;\n\t\tpadding: 5px;\n\t\tborder-radius: 3px;\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TitleDirective);
                return TitleDirective;
            })();
            exports_1("TitleDirective", TitleDirective);
        }
    }
});
//# sourceMappingURL=title-directive.js.map