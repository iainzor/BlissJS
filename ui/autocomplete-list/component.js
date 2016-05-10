System.register(["rxjs/add/operator/debounceTime", "@angular/core", "@angular/common", "../block/block"], function(exports_1, context_1) {
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
    var core_1, common_1, block_1;
    var AutocompleteList;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            }],
        execute: function() {
            AutocompleteList = (function () {
                function AutocompleteList(elRef) {
                    var _this = this;
                    this.elRef = elRef;
                    this._resultMap = {};
                    this.termControl = new common_1.Control();
                    this.selected = 0;
                    this.isFocused = false;
                    this.listChange = new core_1.EventEmitter();
                    this.search = new core_1.EventEmitter();
                    this.termControl
                        .valueChanges
                        .debounceTime(300)
                        .subscribe(function () {
                        if (!_this.term) {
                            _this._results = null;
                        }
                        else {
                            _this.search.emit(_this.term);
                        }
                    });
                }
                Object.defineProperty(AutocompleteList.prototype, "results", {
                    set: function (results) {
                        var _this = this;
                        if (results) {
                            this._results = results.filter(function (result) {
                                var label = _this.resultLabel(result);
                                if (_this._resultMap[label]) {
                                    return false;
                                }
                                return true;
                            });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AutocompleteList.prototype, "input", {
                    get: function () {
                        return this.elRef.nativeElement.querySelector("input");
                    },
                    enumerable: true,
                    configurable: true
                });
                AutocompleteList.prototype.resultLabel = function (result) {
                    if (!this.labelGenerator) {
                        throw ("No label generator was provided");
                    }
                    return this.labelGenerator(result);
                };
                AutocompleteList.prototype.add = function (e, result) {
                    if (e) {
                        e.preventDefault();
                    }
                    var label = this.resultLabel(result);
                    var index = this._results.indexOf(result);
                    if (!this._resultMap[label]) {
                        this._resultMap[label] = result;
                        this._results.splice(index, 1);
                        this.list.push(result);
                        this.listChange.emit(this.list);
                        if (index > 0) {
                            this.selected = index - 1;
                        }
                    }
                };
                AutocompleteList.prototype.remove = function (e, result) {
                    e.preventDefault();
                    var index = this.list.indexOf(result);
                    var key = this.resultLabel(result);
                    if (index > -1) {
                        this.list.splice(index, 1);
                        this._results.push(result);
                        this.listChange.emit(this.list);
                        delete this._resultMap[key];
                    }
                };
                AutocompleteList.prototype.navigate = function (amount) {
                    var max = this._results.length - 1;
                    this.selected += amount;
                    if (this.selected < 0) {
                        this.selected = max;
                    }
                    else if (this.selected > max) {
                        this.selected = 0;
                    }
                };
                AutocompleteList.prototype.select = function () {
                    var result = this._results[this.selected];
                    if (result) {
                        this.add(null, result);
                    }
                };
                AutocompleteList.prototype.onKeyDown = function (e) {
                    switch (e.keyCode) {
                        // Down Arrow
                        case 40:
                            this.navigate(1);
                            break;
                        // Up Arrow
                        case 38:
                            this.navigate(-1);
                            break;
                        // Enter
                        case 13:
                            this.select();
                            break;
                        // Escape
                        case 27:
                            this.isFocused = false;
                            this.input.blur();
                            break;
                    }
                };
                AutocompleteList.prototype.onFocus = function () {
                    this.isFocused = true;
                };
                AutocompleteList.prototype.onBlur = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.isFocused = false;
                    }, 100);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], AutocompleteList.prototype, "labelGenerator", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AutocompleteList.prototype, "placeholder", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], AutocompleteList.prototype, "list", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AutocompleteList.prototype, "listChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AutocompleteList.prototype, "search", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], AutocompleteList.prototype, "results", null);
                AutocompleteList = __decorate([
                    core_1.Component({
                        selector: "autocomplete-list",
                        templateUrl: "./bliss/ui/autocomplete-list/template.html",
                        styleUrls: ["./bliss/ui/autocomplete-list/styles.css"],
                        directives: [block_1.Block],
                        host: {
                            "[class.focused]": "isFocused"
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AutocompleteList);
                return AutocompleteList;
            }());
            exports_1("AutocompleteList", AutocompleteList);
        }
    }
});
//# sourceMappingURL=component.js.map