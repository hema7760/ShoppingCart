import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemList: any;
  searchText:any;
  p: number = 1;
  emptyList:boolean = false;
  stars: any = [5,4,3,2,1];
  constructor(private myService: MyServiceService, private router: Router){ 
    this.myService.filteredListSubject.subscribe((list) => {
      if(list.length == 0){
        this.emptyList = true;
        this.itemList = list;
      }else{
        this.itemList = list;
      }
      
    });
    this.myService.searchTextSubject.subscribe((value) => this.searchText = value);
  }
  navigateToItem(itemid){
    this.router.navigate(['itemDetail',  itemid ]);
  }
  addToCart(itemid){
    let obj = this.itemList.find(element => element.id == itemid);
    obj.isAdded = true;
    this.myService.cartList.push(obj);
    this.myService.updateCartCount(this.myService.cartList);
  }
  ngOnInit() {
  }

}
