import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StoreItem } from './storeItem';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
    constructor(private http: Http) { }

    getItems() {
        return this.http.get('app/store/items.json')
            .map(response => <StoreItem[]>response.json().data);
    }
    
}