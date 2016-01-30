System.register(["angular2/core", "angular2/common", "./nav-page"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, nav_page_1;
    var NavComponent, Nav;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (nav_page_1_1) {
                nav_page_1 = nav_page_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Nav)
                ], NavComponent.prototype, "nav", void 0);
                NavComponent = __decorate([
                    core_1.Component({
                        selector: "ui-nav",
                        template: "\n\t\t<ui-nav-page \n\t\t\t*ngFor=\"#page of nav?.pages\" \n\t\t\t[page]=\"page\"\n\t\t\t(activate)=\"onActivate(page)\">\n\t\t</ui-nav-page>\n\t",
                        directives: [common_1.NgFor, nav_page_1.NavPageComponent],
                        styleUrls: [
                            "./bliss/ui/components/nav.css"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavComponent);
                return NavComponent;
            })();
            exports_1("NavComponent", NavComponent);
            Nav = (function () {
                function Nav() {
                    this.pages = [];
                }
                return Nav;
            })();
            exports_1("Nav", Nav);
        }
    }
});
//# sourceMappingURL=nav.js.map