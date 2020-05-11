import { HttpClient } from '@angular/common/http';
import { NgModule, Injectable, APP_INITIALIZER, InjectionToken } from '@angular/core';
import { environment } from '@environment';
import { AppConfig } from '@app/core/models/core/app-config.model';
import { Observable } from 'rxjs/internal/Observable';

const appConfig: AppConfig = <AppConfig>environment.appConfigFile;

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: appConfig }
    ]
})
export class AppConfigModule { }

// @Injectable()
// export class ConfigService {
//
//     private _config: object;
//     private _env: string;
//
//     constructor(private _http: HttpClient) { }
//     load() {
//         return new Promise((resolve, reject) => {
//             this._env = 'development';
//             if (environment.production) {
//                 this._env = 'production';
//             }
//             console.log(this._env);
//             this._http.get<AppConfig>('./config/app.config.dev.json' + this._env + '.json')
//                 .subscribe((data) => {
//                         this._config = data;
//                         resolve(true);
//                     },
//                     (error: any) => {
//                         console.error(error);
//
//                         return Observable.throw(error.json().error || 'Server error');
//                     });
//         });
//     }
//     // Is app in the development mode?
//     isDevmode() {
//         return this._env === 'development';
//     }
//     // Gets API route based on the provided key
//     getApi(key: string): string {
//
//         return this._config['API_ENDPOINTS'][key];
//     }
//     // Gets a value of specified property in the configuration file
//     get(key: any) {
//         return this._config[key];
//     }
// }
//
// export function ConfigFactory(config: ConfigService) {
//     return () => config.load();
// }
//
// @NgModule({
//     providers: [
//         ConfigService,
//         {
//             provide: APP_INITIALIZER,
//             useFactory: ConfigFactory,
//             deps: [ConfigService],
//             multi: true
//         }
//     ]
// })
// export class AppConfigModule { }
