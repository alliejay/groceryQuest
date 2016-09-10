import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    { path: 'store',
      component: StoreComponent,
      data: {
          title: 'Store'
        }
      },
    { path: 'cart',
        component: CartComponent,
        data: {
            title: 'Shopping Cart'
        }
    },
    { path: 'list',
        component: ListComponent,
        data: {
            title: 'Shopping List'
        }
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);