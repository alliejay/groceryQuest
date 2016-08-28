import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent }  from './app.component';
import { StoreComponent } from './store/component';
import { CartComponent } from './cart/component';
import { ListComponent } from './list/component';

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        StoreComponent,
        CartComponent,
        ListComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:    [
        AppComponent
    ]
})

export class AppModule { }
