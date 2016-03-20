System.register(["angular2/core", "angular2/common", "../tooltip/tooltip", "../block/block", "../theme"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, tooltip_1, block_1, theme_1;
    var Fab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tooltip_1_1) {
                tooltip_1 = tooltip_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (theme_1_1) {
                theme_1 = theme_1_1;
            }],
        execute: function() {
            Fab = (function () {
                function Fab(theme, _elRef) {
                    this.theme = theme;
                    this._elRef = _elRef;
                    this.isReady = false;
                    this.isVisible = true;
                    this.z = 2;
                    this.backgroundColor = theme.accentBackgroundColor;
                    this.iconColor = theme.accentTextColor;
                }
                Fab.prototype.ngOnInit = function () {
                    var _this = this;
                    this.position();
                    setTimeout(function () {
                        _this.isReady = true;
                    }, 300);
                    window.addEventListener("resize", this.position.bind(this));
                };
                Fab.prototype.ngOnDestroy = function () {
                    window.removeEventListener("resize", this.position.bind(this));
                };
                Fab.prototype.ngOnChanges = function () {
                    this.position();
                };
                Fab.prototype.position = function () {
                    var el = this._elRef.nativeElement;
                    var fab = el.querySelector("ui-block");
                    var elCoords = el.getBoundingClientRect();
                    var parent = el.parentElement;
                    var parentCoords = parent.getBoundingClientRect();
                    var top;
                    var left;
                    if (typeof this.top !== "undefined") {
                        fab.style.top = this.top + "px";
                    }
                    else if (typeof this.bottom !== "undefined") {
                        fab.style.bottom = this.bottom + "px";
                    }
                    if (typeof this.left !== "undefined") {
                        fab.style.left = this.left + "px";
                    }
                    else if (typeof this.right !== "undefined") {
                        fab.style.right = this.right + "px";
                    }
                };
                Fab.prototype.onMouseEnter = function () {
                    this.z += 2;
                };
                Fab.prototype.onMouseLeave = function () {
                    this.z -= 2;
                };
                Fab = __decorate([
                    core_1.Component({
                        selector: "ui-fab",
                        styleUrls: ["./bliss/ui/fab/fab.css"],
                        inputs: ["title", "icon", "bottom", "top", "left", "right", "z", "isVisible"],
                        directives: [tooltip_1.Tooltip, block_1.Block, common_1.NgIf],
                        host: {
                            "[class.visible]": "isVisible && isReady",
                            "(mouseenter)": "onMouseEnter()",
                            "(mouseleave)": "onMouseLeave()"
                        },
                        template: "\n\t<ui-block [z]=\"z\" [style.background-color]=\"backgroundColor\" [style.color]=\"iconColor\">\n\t\t<ui-tooltip *ngIf=\"title\" [title]=\"title\"></ui-tooltip>\n\t\t<i class=\"material-icons\">{{icon}}</i>\n\t</ui-block>\n\t"
                    }), 
                    __metadata('design:paramtypes', [theme_1.Theme, core_1.ElementRef])
                ], Fab);
                return Fab;
            })();
            exports_1("Fab", Fab);
        }
    }
});
//# sourceMappingURL=fab.js.map