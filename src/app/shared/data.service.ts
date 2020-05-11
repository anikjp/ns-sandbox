import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export interface DataItem {
    id: number;
    name: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private items = new Array<DataItem>();

    constructor() {
        let i = 0;
        while (i < 1000) {
            i++;
            this.items.push({
                id: i,
                name: 'Item ' + i,
                description: 'Description for Item ' + i
            });

        }
    }

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
