import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalComponent } from '@app/modules/search/modal.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
        ModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        ModalComponent
    ]
})
export class SearchModule { }
