System.register([], function(exports_1) {
    var DynamicRouter;
    return {
        setters:[],
        execute: function() {
            DynamicRouter = (function () {
                function DynamicRouter(router) {
                    this.router = router;
                }
                DynamicRouter.prototype.populate = function (routes) {
                    var _this = this;
                    var component = this.router.hostComponent;
                    var defs = [];
                    routes.forEach(function (route) {
                        var def = _this.createRouteDefinition(route, _this.router, component);
                        defs.push(def);
                    });
                    return this.router.config(defs);
                };
                DynamicRouter.prototype.createRouteDefinition = function (route, parentRouter, parentComponent) {
                    return {
                        name: route.name,
                        path: route.path,
                        useAsDefault: route.useAsDefault,
                        loader: function () {
                            return new Promise(function (resolve) {
                                //console.log("Loading component", route);
                                System.import(route.component.path).then(function (m) {
                                    var component = m[route.component.name];
                                    if (route.routes && route.routes.length) {
                                        //console.log("Building child", component);
                                        var childRouter = parentRouter.childRouter(component);
                                        var dr = new DynamicRouter(childRouter);
                                        dr.populate(route.routes).then(function () { return resolve(component); });
                                    }
                                    else {
                                        resolve(component);
                                    }
                                });
                            });
                        }
                    };
                };
                return DynamicRouter;
            })();
            exports_1("DynamicRouter", DynamicRouter);
        }
    }
});
//# sourceMappingURL=dynamic-router.js.map