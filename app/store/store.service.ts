import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StoreItem } from './storeItem';

@Injectable()
export class StoreService {
    private itemsUrl = 'app/storeItems';

    constructor(private http: Http) { }

    getItems(): Promise<StoreItem[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data as StoreItem[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}