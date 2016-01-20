System.register(["angular2/platform/browser", "angular2/http", "../bliss/bliss-app", "./my-app"], function(exports_1) {
    var browser_1, http_1, bliss_app_1, my_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (bliss_app_1_1) {
                bliss_app_1 = bliss_app_1_1;
            },
            function (my_app_1_1) {
                my_app_1 = my_app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(my_app_1.MyApp, [bliss_app_1.BlissApp, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map