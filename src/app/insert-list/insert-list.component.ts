import { Component, OnInit } from '@angular/core';
import { GroceryItem } from '../groceryList'

@Component({
  selector: 'app-insert-list',
  templateUrl: './insert-list.component.html',
  styleUrls: ['./insert-list.component.css']
})
export class InsertListComponent implements OnInit {
groceryList: GroceryItem[] = [];
item; amount; unit;

addItem(form){
    console.log('add item');
    console.log(this.item);
    this.groceryList.push({item : this.item, amount : this.amount, unit : this.unit});
    for(let i = 0; i < this.groceryList.length; i++){
      console.log(this.groceryList[i].item);
    }
    form.reset();
  }

constructor() { }

ngOnInit(): void {
  }

}
