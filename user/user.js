System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this.id = 0;
                    this.email = null;
                    this.password = null;
                    this.displayName = null;
                    this.isActive = false;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map