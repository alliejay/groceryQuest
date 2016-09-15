import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ListItem } from './listItem';

@Injectable()
export class ListService {
    private listItemsUrl = 'app/list/listItems';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getItems(): Promise<ListItem[]> {
        return this.http.get(this.listItemsUrl)
            .toPromise()
            .then(response => response.json().data as ListItem[])
            .catch(this.handleError);
    }

    create(title: string): Promise<ListItem> {
        return this.http
            .post(this.listItemsUrl, JSON.stringify({title: title}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }

}