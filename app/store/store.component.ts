import { Component } from '@angular/core';
import { StoreItem } from './storeItem';
import { StoreService } from './store.service';
import { AppComponent } from '../app.component';

@Component({
    selector: "store",
    templateUrl: 'app/store/store.component.html',
    styleUrls: ['app/store/styles.css'],
    providers: [AppComponent]
})

export class StoreComponent {
    storeItems: StoreItem[];
    budget = 100;

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.storeService.getItems()
            .subscribe(storeItems => this.storeItems = storeItems);
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