System.register(["./user"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_1;
    var UserSession;
    return {
        setters:[
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserSession = (function () {
                function UserSession() {
                    this.isValid = false;
                    this.user = new user_1.User();
                }
                return UserSession;
            }());
            exports_1("UserSession", UserSession);
        }
    }
});
//# sourceMappingURL=user-session.js.map