System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DatePicker = (function () {
                function DatePicker() {
                    this.dateChange = new core_1.EventEmitter();
                    this.date = new Date();
                }
                DatePicker.prototype.ngOnChanges = function () {
                    if (this.date) {
                        this.dateString = (this.date.getFullYear().toString() + '-'
                            + ("0" + (this.date.getMonth() + 1)).slice(-2) + '-'
                            + ("0" + (this.date.getDate())).slice(-2))
                            + 'T' + this.date.toTimeString().slice(0, 5);
                    }
                };
                DatePicker.prototype.onDateChange = function (value) {
                    if (value) {
                        value = value.replace("T", "-");
                        var parts = value.split("-");
                        var timeParts = parts[3].split(":");
                        this.dateString = value;
                        this.date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), parseInt(timeParts[0]), parseInt(timeParts[1]));
                        this.dateChange.emit(this.date);
                        console.log(this.dateString, this.date);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Date)
                ], DatePicker.prototype, "date", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DatePicker.prototype, "dateChange", void 0);
                DatePicker = __decorate([
                    core_1.Component({
                        selector: "date-picker",
                        template: "\n\t\t<input type=\"datetime-local\" \n\t\t\t   class=\"form-control\"\n\t\t\t   [value]=\"dateString\"\n\t\t\t   (change)=\"onDateChange($event.target.value)\">\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DatePicker);
                return DatePicker;
            }());
            exports_1("DatePicker", DatePicker);
        }
    }
});
//# sourceMappingURL=date-picker.js.map