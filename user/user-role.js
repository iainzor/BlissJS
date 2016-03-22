System.register(["../acl/role"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var role_1;
    var UserRole;
    return {
        setters:[
            function (role_1_1) {
                role_1 = role_1_1;
            }],
        execute: function() {
            UserRole = (function (_super) {
                __extends(UserRole, _super);
                function UserRole() {
                    _super.apply(this, arguments);
                    this.defaultPath = null;
                }
                return UserRole;
            }(role_1.Role));
            exports_1("UserRole", UserRole);
        }
    }
});
//# sourceMappingURL=user-role.js.map