System.register([], function(exports_1) {
    var Role;
    return {
        setters:[],
        execute: function() {
            Role = (function () {
                function Role() {
                    this.name = null;
                    this.allowByDefault = false;
                    this.permissions = [];
                }
                return Role;
            })();
            exports_1("Role", Role);
        }
    }
});
//# sourceMappingURL=role.js.map