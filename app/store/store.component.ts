import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreItem } from './storeItem';
import { StoreService } from './store.service';

@Component({
    selector: "store",
    templateUrl: 'app/store/store.component.html',
    styleUrls: ['app/store/styles.css']
})

export class StoreComponent implements OnInit {
    storeItems: StoreItem[];
    budget = 100;

    constructor(
        private router: Router,
        private storeService: StoreService) { }

    getItems(): void {
        this.storeService.getItems().then(storeItems => this.storeItems = storeItems);
    }

    ngOnInit(): void {
        this.getItems();
    }

    updateItemCost(storeItem) {
        return storeItem.total += storeItem.price;
    }

    upQuantity(storeItem) {
        if(storeItem.inStock != 0) {
            //Add to cart
            storeItem.quantity++;

            //Update remaining stock
            storeItem.inStock--;

            //Update total cost for this item
            this.updateItemCost(storeItem);
            this.storeService.update(storeItem)
        }
    }

    totalCost() {
        let sum = 0;
        if (this.storeItems) {
        for (let storeItem of this.storeItems) {
            sum += storeItem.total;
            }
        }
        return sum;
    }

    updateBudget() {
        return this.budget - this.totalCost();
    }
}