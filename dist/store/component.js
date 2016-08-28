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
var service_1 = require('./service');
var app_component_1 = require('../app.component');
var StoreComponent = (function () {
    function StoreComponent(storeService) {
        this.storeService = storeService;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeService.getItems()
            .subscribe(function (storeItems) { return _this.storeItems = storeItems; });
    };
    StoreComponent.prototype.upQuantity = function (storeItem) {
        if (storeItem.inStock != 0) {
            storeItem.quantity++;
            storeItem.inStock--;
            storeItem.total += storeItem.price;
        }
    };
    StoreComponent = __decorate([
        core_1.Component({
            selector: "store",
            templateUrl: 'app/store/component.html',
            styleUrls: ['app/store/styles.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [service_1.StoreService])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=component.js.map