import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ItemDetailComponent } from '@app/modules/cart/item-detail/item-detail.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CartComponent } from './cart.component';

const routes: Routes = [
    { path: 'default', component: CartComponent },
    { path: 'item/:id', component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CartRoutingModule { }
