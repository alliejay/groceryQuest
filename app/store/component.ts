import { Component } from '@angular/core';
import { StoreItem } from './storeItem';
import { StoreService } from './service';
import { AppComponent } from '../app.component';

@Component({
    selector: "store",
    templateUrl: 'app/store/component.html',
    styleUrls: ['app/store/styles.css'],
    providers: [AppComponent]
})

export class StoreComponent {
    storeItems: StoreItem[];

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        this.storeService.getItems()
            .subscribe(storeItems => this.storeItems = storeItems);
    }

    upQuantity(storeItem) {
        if(storeItem.inStock != 0) {
            storeItem.quantity++;
            storeItem.inStock--;
            storeItem.total += storeItem.price;
        }
    }

}