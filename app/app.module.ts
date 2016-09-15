import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// In memory web API
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

// Components
import { AppComponent }  from './app.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';

import { StoreService } from './store/store.service';
import { ListService } from './list/list.service';

import { routing } from './app.routes';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        StoreComponent,
        CartComponent,
        ListComponent
    ],
    providers: [
        StoreService,
        ListService
    ],
    bootstrap:    [
        AppComponent
    ]
})

export class AppModule { }
