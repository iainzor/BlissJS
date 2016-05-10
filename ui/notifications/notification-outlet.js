System.register(["@angular/core", "./notify-service", "../block/block"], function(exports_1, context_1) {
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
    var core_1, notify_service_1, block_1;
    var NotificationOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notify_service_1_1) {
                notify_service_1 = notify_service_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            }],
        execute: function() {
            NotificationOutlet = (function () {
                function NotificationOutlet(notifyService) {
                    var _this = this;
                    this.messages = [];
                    notifyService.subscribe(function (message) {
                        _this.messages.push(message);
                        _this.setup(message);
                    });
                }
                NotificationOutlet.prototype.setup = function (message) {
                    var _this = this;
                    message.is = message.is || "dark";
                    setTimeout(function () {
                        message.incoming = true;
                    });
                    setTimeout(function () {
                        message.incoming = false;
                        message.outgoing = true;
                        setTimeout(function () {
                            var index = _this.messages.indexOf(message);
                            _this.messages.splice(index, 1);
                        }, 300);
                    }, message.duration || 3000);
                };
                NotificationOutlet = __decorate([
                    core_1.Component({
                        selector: "ui-notification-outlet",
                        directives: [block_1.Block],
                        template: "\n\t\t<ui-block *ngFor=\"let message of messages\"\n\t\t\t[z]=\"2\" \n\t\t\t[is]=\"message.is\"\n\t\t\t[class.incoming]=\"message.incoming\"\n\t\t\t[class.outgoing]=\"message.outgoing\"\n\t\t>\n\t\t\t<section>\n\t\t\t\t<p>{{message.body}}</p>\n\t\t\t</section>\n\t\t</ui-block>\n\t",
                        styles: ["\n\t\t:host > ui-block {\n\t\t\tmin-width: 200px;\n\t\t\ttransform: translateY(50px);\n\t\t\topacity: 0;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t:host > ui-block.incoming {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1;\n\t\t}\n\t\t:host > ui-block.outgoing {\n\t\t\ttransform: translateY(0) translateX(50px);\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [notify_service_1.NotifyService])
                ], NotificationOutlet);
                return NotificationOutlet;
            }());
            exports_1("NotificationOutlet", NotificationOutlet);
        }
    }
});
//# sourceMappingURL=notification-outlet.js.map