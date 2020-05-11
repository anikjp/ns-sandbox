import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { Carousel, CarouselItem } from 'nativescript-carousel';
import Theme from '@nativescript/theme';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);
registerElement('StarRating', () => require('nativescript-star-ratings').StarRating);

@Component({
    moduleId: module.id,
    selector: 'app-tk-listview-item-selection',
    templateUrl: './home.component.html',
    // providers: [DataService],
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    themeMode = true;
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    images: Array<any> = [
        {title: 'Image 1 (URL)', url: 'https://unsplash.it/400/300/?image=867'},
        {title: 'Image 2 (resources folder)', file: 'res://mountain'},
        {title: 'Image 3 (assets folder)', file: '~/assets/sea-sunrise.jpg'},
        {title: 'Image 4 (URL)', url: 'https://unsplash.it/400/300/?image=868'},
        {title: 'Image 5 (URL)', url: 'https://unsplash.it/400/300/?image=870'},
        {title: 'Image 6 (URL)', url: 'https://unsplash.it/400/300/?image=876'},
    ];

    constructor() {
        //
    }

    ngOnInit(): void {

    }

    showMenu() {

        console.log('showMenu');
    }

    navigateToCart() {
        console.log('navigateToCart');

    }

    navigateToLogin() {
        // if (this.themeMode) {
        //     Theme.setMode(Theme.Dark);
        // } else {
        //     Theme.setMode(Theme.Light);
        // }
        this.themeMode = !this.themeMode;
        Theme.toggleMode(this.themeMode);
        console.log('navigateToLogin');
    }

    onButtonTap(event): void {
        console.log('Button was pressed');
    }


}
