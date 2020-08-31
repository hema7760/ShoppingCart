import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {
  itemList: any;
  title = 'appBootstrap';
  collection: any = [];
  categoryList: any = [];
  colorList: any = [];
  public isCollapsed = false;
  minPriceRange: any;
  maxPriceRange: any;
  minPriceRangeList: any = [];
  maxPriceRangeList: any = [];
  filterForm: any;
  constructor(private myService: MyServiceService) {
    this.myService.filteredListSubject.subscribe((list) => {
      this.itemList = list;
      this.itemList.forEach(element => {
        if (this.collection.indexOf(element.brand) == -1) {
          this.collection.push(element.brand);
        }
        if (this.categoryList.indexOf(element.type) == -1) {
          this.categoryList.push(element.type);
        }
        if (this.colorList.indexOf(element.color) == -1) {
          this.colorList.push(element.color);
        }

      });

    });
    

  }
  filterList(filterForm) {
    let itemList = this.myService.itemList;

    if (filterForm.collectionValue.value != '') {
       itemList =  itemList.filter(item => {
        return item.brand == filterForm.collectionValue.value;
       });
      }
    if (filterForm.category.value != '') {
        itemList =  itemList.filter(item => {
         return item.type == filterForm.category.value;
        });
       }
    if (filterForm.color.value != '') {
        itemList =  itemList.filter(item => {
         return item.color == filterForm.color.value;
        });
       }
    if(filterForm.priceRangeRadio.value != 'All'){
        const min = parseFloat(filterForm.priceRangeRadio.value.split('-')[0]);
        const max = parseFloat(filterForm.priceRangeRadio.value.split('-')[1]);
        itemList  = itemList.filter(element => (min < parseFloat(element.price) && parseFloat(element.price) <= max));
       }
    this.myService.updateFilteredList(itemList);
  }

  onCollectionChange(brandValueSelected, property) {
    const filteredList  = this.myService.itemList.filter(element => element[property] == brandValueSelected);
    this.myService.updateFilteredList(filteredList);
  }
  onPriceRangeChanged(event) {
    const min = parseFloat(event.target.value.split('-')[0]);
    const max = parseFloat(event.target.value.split('-')[1]);

    if (event.target.checked) {
      this.minPriceRange = this.minPriceRange == undefined ? min : (this.minPriceRange > min) ? min : this.minPriceRange;
      this.maxPriceRange = this.maxPriceRange == undefined ? max : (this.maxPriceRange < max) ? max : this.maxPriceRange;
      if (this.minPriceRangeList.indexOf(min) == -1) {
      this.minPriceRangeList.push(min);
      }
      this.minPriceRangeList.sort((a, b) => {a - b;});
      if (this.maxPriceRangeList.indexOf(max) == -1) {
      this.maxPriceRangeList.push(max);
      }
    } else {
      this.minPriceRangeList.splice(min, 1);
      this.maxPriceRangeList.splice(max, 1);
      if (this.minPriceRangeList.length == 0 ) {
        this.minPriceRange = 0;
      }
      if (this.maxPriceRangeList.length == 0) {
        this.maxPriceRange = 10000;
      }
    }
    // tslint:disable-next-line: max-line-length
    const filteredList  = this.itemList.filter(element => (this.minPriceRange < parseFloat(element.price) && parseFloat(element.price) <= this.maxPriceRange));
    this.myService.updateFilteredList(filteredList);
  }

  ngOnInit() {
    
  }

}
