System.register(["angular2/core", "angular2/common", "angular2/router", "./nav"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, nav_1;
    var NavPageComponent, NavPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nav_1_1) {
                nav_1 = nav_1_1;
            }],
        execute: function() {
            NavPageComponent = (function () {
                function NavPageComponent(_router, _elRef) {
                    this._router = _router;
                    this._elRef = _elRef;
                    this.activate = new core_1.EventEmitter();
                    this.deactivate = new core_1.EventEmitter();
                }
                NavPageComponent.prototype.onPageClicked = function ($event, page) {
                    var _this = this;
                    $event.preventDefault();
                    if ((typeof page.path) !== "undefined") {
                        this._router.navigateByUrl(page.path).then(function () {
                            _this.activate.emit(page);
                        });
                    }
                    else {
                        page.isActive = !page.isActive;
                        if (page.isActive) {
                            this.activate.emit(page);
                        }
                        else {
                            this.deactivate.emit(page);
                        }
                    }
                };
                NavPageComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.page) {
                        var page = changes.page.currentValue;
                        if (!page.is) {
                            page.is = "link";
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', NavPage)
                ], NavPageComponent.prototype, "page", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], NavPageComponent.prototype, "activate", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], NavPageComponent.prototype, "deactivate", void 0);
                NavPageComponent = __decorate([
                    core_1.Component({
                        selector: "ui-nav-page",
                        styleUrls: ["./bliss/ui/components/nav-page.css"],
                        directives: [common_1.CORE_DIRECTIVES, (core_1.forwardRef(function () { return nav_1.NavComponent; }))],
                        template: "\n\t\t<i *ngIf=\"page?.icon\" class=\"material-icons\">{{page.icon}}</i>\n\t\t<span *ngIf=\"!page?.icon\">{{page?.title}}</span>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
                ], NavPageComponent);
                return NavPageComponent;
            })();
            exports_1("NavPageComponent", NavPageComponent);
            NavPage = (function () {
                function NavPage() {
                    this.is = "link";
                    this.path = null;
                    this.title = null;
                    this.icon = null;
                    this.isActive = false;
                }
                return NavPage;
            })();
            exports_1("NavPage", NavPage);
        }
    }
});
//# sourceMappingURL=nav-page.js.map