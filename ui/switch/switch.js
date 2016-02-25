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
    var Switch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            }],
        execute: function() {
            Switch = (function () {
                function Switch() {
                    this.on = false;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Switch.prototype, "on", void 0);
                Switch = __decorate([
                    core_1.Component({
                        selector: "ui-switch",
                        directives: [block_1.Block],
                        styleUrls: ["./bliss/ui/switch/switch.css"],
                        template: "\n\t\t<ui-block z=\"1\"></ui-block>\n\t\t<div class=\"bar\"></div>\n\t",
                        host: {
                            "[class.on]": "on"
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Switch);
                return Switch;
            })();
            exports_1("Switch", Switch);
        }
    }
});
//# sourceMappingURL=switch.js.map