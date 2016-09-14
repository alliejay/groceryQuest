"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var store_service_1 = require('../store/store.service');
var CartComponent = (function () {
    function CartComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    CartComponent.prototype.getItems = function () {
        var _this = this;
        this.storeService.getItems().then(function (storeItems) { return _this.storeItems = storeItems; });
    };
    CartComponent.prototype.getCost = function () {
        var totalCost = 0;
        if (Array.isArray(this.storeItems)) {
            for (var _i = 0, _a = this.storeItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.quantity != 0) {
                    totalCost += (item.quantity * item.price);
                }
            }
        }
        return totalCost;
    };
    CartComponent.prototype.updateItemCost = function (storeItem) {
        return storeItem.total += storeItem.price;
    };
    CartComponent.prototype.upQuantity = function (storeItem) {
        if (storeItem.inStock != 0) {
            // Increase quantity
            storeItem.quantity++;
            // Decrease stock
            storeItem.inStock--;
            // Update item cost
            this.updateItemCost(storeItem);
            // Update in memory api
            this.storeService.update(storeItem);
        }
    };
    CartComponent.prototype.downQuantity = function (storeItem) {
        if (storeItem.inStock != 0) {
            // Decrease quantity
            storeItem.quantity--;
            // Increase stock
            storeItem.inStock++;
            // Update item cost
            this.updateItemCost(storeItem);
            // Update in memory api
            this.storeService.update(storeItem);
        }
    };
    CartComponent.prototype.update = function (storeItem) {
        this.storeService.update(storeItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CartComponent.prototype, "storeItems", void 0);
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: 'app/cart/cart.component.html',
            styleUrls: ['app/cart/style.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, store_service_1.StoreService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map