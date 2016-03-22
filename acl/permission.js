System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Permission;
    return {
        setters:[],
        execute: function() {
            Permission = (function () {
                function Permission() {
                    this.resourceName = null;
                    this.action = null;
                    this.params = {};
                    this.isAllowed = false;
                }
                return Permission;
            }());
            exports_1("Permission", Permission);
        }
    }
});
//# sourceMappingURL=permission.js.map