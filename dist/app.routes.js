"use strict";
var router_1 = require('@angular/router');
var component_1 = require('./cart/component');
var component_2 = require('./store/component');
var component_3 = require('./list/component');
var appRoutes = [
    { path: 'store',
        component: component_2.StoreComponent,
        data: {
            title: 'Store'
        }
    },
    { path: 'cart',
        component: component_1.CartComponent,
        data: {
            title: 'Shopping Cart'
        }
    },
    { path: 'list',
        component: component_3.ListComponent,
        data: {
            title: 'Shopping List'
        }
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map