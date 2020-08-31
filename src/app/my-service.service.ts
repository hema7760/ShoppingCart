import { Injectable } from '@angular/core';
import { MOCKITEMLIST } from './Mock_Items';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  itemList: any = MOCKITEMLIST.items;
  filteredList: any = MOCKITEMLIST.items;
  cartCount: number  = 0;
  cartList: any = [];
  searchText: any='';
  cartCountSubject: any = new BehaviorSubject({cart: 0});
  filteredListSubject: any = new BehaviorSubject(this.itemList);
  searchTextSubject: any = new BehaviorSubject(this.searchText);
  clearFilterSelectionSubject:any = new BehaviorSubject({collection: '', category: '',color: '', priceRangeRadio:'All'});
  constructor() { 
    this.updateCartCount([]);
    this.filteredListSubject.subscribe((value) => {
      this.filteredList = value;
    });
  }
  updateSearchValue(value){
    this.searchText = value;
    this.searchTextSubject(this.searchText);
  }
  updateCartCount(cartList){
    const selectedList = this.itemList.filter((item) => {
      return item['isAdded'] === true;
    });
    this.cartCount = selectedList.length;
    this.cartCountSubject.next({ cart: this.cartCount});
  }
  updateFilteredList(list){
    this.filteredListSubject.next(list);
  }
  clearFilterSelection(){
    this.clearFilterSelectionSubject.next({collection: '', category: '',color: '', priceRangeRadio:'All'});
  }
}
