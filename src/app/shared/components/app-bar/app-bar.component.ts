import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'amway-app-bar',
    templateUrl: './app-bar.component.html',
    styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

    constructor() {
        console.log('AppBarComponent');
    }

    ngOnInit(): void {
    }

    onButtonTap(event): void {
        console.log('Button was pressed');
    }

}
