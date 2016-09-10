import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
    imports:      [
        BrowserModule,
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
        appRoutingProviders,
        StoreService
    ],
    bootstrap:    [
        AppComponent
    ]
})

export class AppModule { }
