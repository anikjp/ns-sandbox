import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { ModalComponent } from './modal.component';

@Component({
    selector: 'app-search',
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    showModel(): void {
        console.log('Button was pressed');
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modalService.showModal(ModalComponent, options);
    }
}
