import { Component } from '@angular/core';

import { ListItem } from './listItem';

@Component({
    selector: "list",
    templateUrl: "app/list/list.component.html"
})

export class ListComponent {
    listItems: ListItem[];
    shoppingList = [];

    addToList(listItem: ListItem): void {
        listItem.title = listItem.title.trim();
        if (!listItem.title) { return; }
        this.shoppingList.push(listItem);
    }

    delete(listItem: ListItem): void {

    }
}