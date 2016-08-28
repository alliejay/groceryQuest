import { Component } from '@angular/core';
import { StoreService } from './store/service';
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_DIRECTIVES } from '@angular/router';
import {StoreComponent} from "./store/component";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [StoreService, HTTP_PROVIDERS]
})

export class AppComponent {}