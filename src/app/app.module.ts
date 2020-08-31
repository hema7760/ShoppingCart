import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShopComponent } from './shop/shop.component';
import { MagzineComponent } from './magzine/magzine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSectionComponent,
    HomeComponent,
    ItemDetailComponent,
    ShopComponent,
    MagzineComponent,
    PageNotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
