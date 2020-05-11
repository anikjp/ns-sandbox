import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptMaterialCardViewModule } from 'nativescript-material-cardview/angular';
import { NativeScriptUIListViewModule } from 'nativescript-pro-ui/listview/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemDetailComponent } from '../cart/item-detail/item-detail.component';
@NgModule({
    imports: [
        NativeScriptUIListViewModule,
        NativeScriptCommonModule,
        NativeScriptMaterialCardViewModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
