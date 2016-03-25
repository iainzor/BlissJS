System.register(["./bliss", "./ui/theme"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bliss_1, theme_1;
    var BLISS_PROVIDERS;
    return {
        setters:[
            function (bliss_1_1) {
                bliss_1 = bliss_1_1;
            },
            function (theme_1_1) {
                theme_1 = theme_1_1;
            }],
        execute: function() {
            exports_1("BLISS_PROVIDERS", BLISS_PROVIDERS = [
                bliss_1.Bliss,
                theme_1.Theme
            ]);
        }
    }
});
//# sourceMappingURL=bliss-providers.js.map