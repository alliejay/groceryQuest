"use strict";
var router_1 = require('@angular/router');
var cart_component_1 = require('./cart/cart.component');
var store_component_1 = require('./store/store.component');
var list_component_1 = require('./list/list.component');
var appRoutes = [
    { path: 'store',
        component: store_component_1.StoreComponent,
        data: {
            title: 'Store'
        }
    },
    { path: 'cart',
        component: cart_component_1.CartComponent,
        data: {
            title: 'Shopping Cart'
        }
    },
    { path: 'list',
        component: list_component_1.ListComponent,
        data: {
            title: 'Shopping List'
        }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map