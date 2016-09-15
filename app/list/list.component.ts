import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { ListItem } from './listItem';
import { ListService } from './list.service';
import { InMemoryDataListService } from './in-memory-data-list-service';

@Component({
    selector: "list",
    templateUrl: "app/list/list.component.html",
    providers: [InMemoryDataListService]
})

export class ListComponent implements OnInit {
    listItems: ListItem[];

    constructor(
        private listService: ListService) { }

    addToList(title: string): void {
        if (!title) { return; }
        this.listService.create(title)
            .then(listItem => {
                this.listItems.push(listItem)
            })
    }

    getItems(): void {
        this.listService.getItems().then(listItems => this.listItems = listItems);
    }

    ngOnInit(): void {
        this.getItems();
    }


}