import { Component, OnInit } from '@angular/core';

import { BacklogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from '../../../../core/models/domain';

@Component({
    moduleId: module.id,
    selector: 'Backlog',
    templateUrl: 'backlog.page.component.html',
    styleUrls: ['backlog.page.component.scss']
})

export class BacklogPageComponent implements OnInit {

    public items$ = this.store.select<Array<PtItem>>('backlogItems');

    constructor(
        private backlogService: BacklogService,
        private store: Store
    ) {
        console.log("----BacklogPageComponent-----");
    }

    public ngOnInit() {
        this.backlogService.fetchItems();
    }

    public selectListItem(item: PtItem) {
        // navigate to detail page
    }

    public onAddTap(args) {
        // show add item dialog
    }
}
