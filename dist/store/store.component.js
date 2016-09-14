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
var store_service_1 = require('./store.service');
var StoreComponent = (function () {
    function StoreComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.budget = 100;
    }
    StoreComponent.prototype.getItems = function () {
        var _this = this;
        this.storeService.getItems().then(function (storeItems) { return _this.storeItems = storeItems; });
    };
    StoreComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    StoreComponent.prototype.updateItemCost = function (storeItem) {
        return storeItem.total += storeItem.price;
    };
    StoreComponent.prototype.upQuantity = function (storeItem) {
        if (storeItem.inStock != 0) {
            //Add to cart
            storeItem.quantity++;
            //Update remaining stock
            storeItem.inStock--;
            //Update total cost for item
            this.updateItemCost(storeItem);
            //Update api
            this.storeService.update(storeItem);
        }
    };
    StoreComponent.prototype.downQuantity = function (storeItem) {
        if (storeItem.quantity != 0) {
            //Remove from cart
            storeItem.quantity--;
            //Update remaining stock
            storeItem.inStock++;
            //Update total cost for item
            this.updateItemCost(storeItem);
            //Update api
            this.storeService.update(storeItem);
        }
    };
    StoreComponent.prototype.totalCost = function () {
        var sum = 0;
        if (this.storeItems) {
            for (var _i = 0, _a = this.storeItems; _i < _a.length; _i++) {
                var storeItem = _a[_i];
                sum += storeItem.total;
            }
        }
        return sum;
    };
    StoreComponent.prototype.updateBudget = function () {
        return this.budget - this.totalCost();
    };
    StoreComponent.prototype.update = function (storeItem) {
        this.storeService.update(storeItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], StoreComponent.prototype, "storeItems", void 0);
    StoreComponent = __decorate([
        core_1.Component({
            selector: "store",
            templateUrl: 'app/store/store.component.html',
            styleUrls: ['app/store/styles.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, store_service_1.StoreService])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map