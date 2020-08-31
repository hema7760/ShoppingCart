import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MagzineComponent } from './magzine/magzine.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'magazine', component: MagzineComponent},
  {path: 'itemDetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home',  pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
