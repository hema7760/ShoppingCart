import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private myService: MyServiceService) {
    this.itemList = this.myService.itemList;
    this.route.params.subscribe( params => {
      this.itemid = params.id;
      this.itemObj = this.itemList.find(element => element.id == this.itemid);
      this.showImage = this.itemObj.imageList[0];
    });


  }
  itemid: number;
  itemObj: any;
  itemList: any;
  selectedId: number;
  itemToDisplay: any;
  showImage: any = '';
  ngOnInit(): void {
  }

  showExpandedImage(imgSrc){
    this.showImage = imgSrc;
  };
  addToCart(itemid){
    let obj = this.itemList.find(element => element.id == itemid);
    obj.isAdded = true;
    this.myService.cartList.push(obj);
    this.myService.updateCartCount(this.myService.cartList);
  }
}
