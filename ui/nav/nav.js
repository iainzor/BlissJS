System.register(["angular2/core", "angular2/common", "angular2/router", "./nav-page"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, nav_page_1;
    var Nav;
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
            function (nav_page_1_1) {
                nav_page_1 = nav_page_1_1;
            }],
        execute: function() {
            Nav = (function () {
                function Nav() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Nav.prototype, "nav", void 0);
                Nav = __decorate([
                    core_1.Component({
                        selector: "ui-nav",
                        template: "\n\t\t<section class=\"pages\">\n\t\t\t<template ngFor #page [ngForOf]=\"nav?.pages\">\n\t\t\t\t<template [ngIf]=\"!page.is || page.is === 'link'\">\n\t\t\t\t\t<ui-nav-page \n\t\t\t\t\t\t[page]=\"page\"\n\t\t\t\t\t\t[routerLink]=\"[page.path]\">\n\t\t\t\t\t</ui-nav-page>\n\t\t\t\t</template>\n\t\t\t\t<template [ngIf]=\"page.is === 'spacer'\">\n\t\t\t\t\t<div class=\"spacer\"></div>\n\t\t\t\t</template>\n\t\t\t</template>\n\t\t</section>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, nav_page_1.NavPage, router_1.RouterLink],
                        styleUrls: [
                            "./bliss/ui/nav/nav.css"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Nav);
                return Nav;
            }());
            exports_1("Nav", Nav);
        }
    }
});
//# sourceMappingURL=nav.js.map