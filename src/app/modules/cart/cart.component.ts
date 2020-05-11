import { Component, OnInit } from '@angular/core';
import { DataItem, DataService } from '@app/shared/data.service';

@Component({
    selector: 'Cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
