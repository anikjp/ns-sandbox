import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NSEmptyOutletComponent } from 'nativescript-angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/(homeTab:home/default//browseTab:browse/default//searchTab:search/default//backlogTab:backlog/default)',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('@app/modules/home/home.module').then((m) => m.HomeModule),
        outlet: 'homeTab'
    },

    {
        path: 'browse',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('@app/modules/browse/browse.module').then((m) => m.BrowseModule),
        outlet: 'browseTab'
    },

    {
        path: 'search',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('@app/modules/search/search.module').then((m) => m.SearchModule),
        outlet: 'searchTab'
    },
    {
        path: 'cart',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('@app/modules/cart/cart.module').then((m) => m.CartModule),
        outlet: 'cartTab'
    },
    {
        path: 'backlog',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('@app/modules/backlog/backlog.module').then((m) => m.BacklogModule),
        outlet: 'backlogTab'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
