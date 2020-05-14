import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { NativeScriptMaterialCardViewModule } from 'nativescript-material-cardview/angular';

import { AppConfigModule } from '../config/app-config.module';

import { createTranslationLoader } from '@app/utils';

import '@app/utils/console-color';
import '@app/rxjs-imports';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        SharedModule,
        NativeScriptMaterialCardViewModule,
        NativeScriptModule,
        NativeScriptHttpClientModule,
        AppConfigModule,
        AppRoutingModule,
        CoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslationLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
