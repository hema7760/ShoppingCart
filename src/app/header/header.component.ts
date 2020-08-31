import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  searchText:any = '';
  itemList:any;
  constructor(private myService: MyServiceService) { 
    this.myService.cartCountSubject.subscribe((count) => {this.cartCount = count.cart; });
    this.myService.searchTextSubject.subscribe((value) => this.searchText = value);
    this.itemList =  this.myService.itemList;
  }

  onSearchValueChange(){
    this.myService.searchTextSubject.next(this.searchText);
    this.myService.filteredListSubject.next(this.itemList);
    this.myService.clearFilterSelection();
  }
  ngOnInit() {
  }

}
