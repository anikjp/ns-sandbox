import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { AppConfig } from '@app/core/models/core';
import { APP_CONFIG } from '../../../../config/app-config.module';
import { PtItem } from '@app/core/models/domain';

@Injectable()
export class BacklogRepository {
    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http$: HttpClient
    ) { }

    private get backlogUrl() {
        return `${this.config.apiEndpoint}/backlog`;
    }

    public getPtItems(
        errorHandler,
        successHandler: (data: Array<PtItem>) => void
    ) {

        this.http$.get(this.backlogUrl).pipe(
            map(res => {
                console.log("getPtItems");

                return successHandler(res as Array<PtItem>);
            }),
            catchError(errorRes => {
                console.log("errorRes");

                return errorHandler(errorRes);
          })
        );
    }
}
