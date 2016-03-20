System.register(["./user/user"], function(exports_1) {
    var user_1;
    var BlissConfig;
    return {
        setters:[
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            BlissConfig = (function () {
                function BlissConfig() {
                    this.user = new user_1.User();
                }
                return BlissConfig;
            })();
            exports_1("BlissConfig", BlissConfig);
        }
    }
});
//# sourceMappingURL=bliss-config.js.map