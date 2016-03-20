System.register([], function(exports_1) {
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
            })();
            exports_1("Permission", Permission);
        }
    }
});
//# sourceMappingURL=permission.js.map