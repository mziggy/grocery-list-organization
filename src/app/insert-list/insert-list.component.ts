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
editItem; editAmount; editUnit;
selectedItem: GroceryItem;

addItem(form): void{
    console.log('add item');
    this.groceryList.push({item : this.item, amount : this.amount, unit : this.unit});
    form.reset();
  }

  onSelect(i: GroceryItem): void{//allow to edit
    this.selectedItem = i;
    this.editItem = this.selectedItem.item;
    this.editAmount = this.selectedItem.amount;
    this.editUnit = this.selectedItem.unit;
  }

  deleteItem(): void{
    const index = this.groceryList.indexOf(this.selectedItem);
    if(index > -1){//validate item has an index in the array
      this.groceryList.splice(index, 1);//remove from array
    }
  }

  saveItem(): void{
    const index = this.groceryList.indexOf(this.selectedItem);
    if(index > -1){//validate item has an index in the array
      this.groceryList[index].item=this.editItem;
      this.groceryList[index].amount=this.editAmount;
      this.groceryList[index].unit=this.editUnit;
    }
    this.selectedItem = null;//remove editing
  }

constructor() { }

ngOnInit(): void {
  }

}
