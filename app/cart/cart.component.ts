import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreItem } from '../store/storeItem';
import { StoreService } from '../store/store.service';

@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.component.html',
    styleUrls: ['app/cart/style.css']
})

export class CartComponent implements OnInit {
    storeItems: StoreItem[];

    constructor(
        private router: Router,
        private storeService: StoreService) { }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.storeService.getItems().then(storeItems => this.storeItems = storeItems);
    }

    getCost(): any {
        let totalCost = 0;

        if(Array.isArray(this.storeItems)) {
            for(let item of this.storeItems) {
                if(item.quantity != 0) {
                    totalCost += (item.quantity * item.price);
                }
            }
        }
        return totalCost;
    }

}

