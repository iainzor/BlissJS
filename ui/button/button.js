System.register(["angular2/core", "../block/block"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, block_1;
    var Button;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button() {
                    this.z = 0;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Button.prototype, "z", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Button.prototype, "icon", void 0);
                Button = __decorate([
                    core_1.Component({
                        selector: "ui-button",
                        template: "\n\t\t<ui-block [z]=\"z\">\n\t\t\t<div class=\"material-icons\">{{icon}}</div>\n\t\t</ui-block>\n\t",
                        styleUrls: ["./bliss/ui/button/button.css"],
                        directives: [block_1.Block]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Button);
                return Button;
            })();
            exports_1("Button", Button);
        }
    }
});
//# sourceMappingURL=button.js.map