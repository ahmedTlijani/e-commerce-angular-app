import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoriteProductsPageComponent } from './favorite-products-page/favorite-products-page.component'
import { ChariotPageComponent } from './chariot-page/chariot-page.component';
import { AdminProductsManagementComponent } from './admin__/admin-products-management/admin-products-management.component';


const routes: Routes = [
   { path: 'home', component: HomePageComponent }, // home page 127.0.0.1:4200
   { path: '', component: HomePageComponent }, // home page 127.0.0.1:4200/home
   { path: 'all-product', component: ProductsListComponent }, // all products page 127.0.0.1:4200/all-product
   { path: 'favorite-products', component: FavoriteProductsPageComponent }, // favorite products page 127.0.0.1:4200/favorite-products
   { path: 'chariot-products', component: ChariotPageComponent }, // panier list products page 127.0.0.1:4200/chariot-products
   { path: 'manage-products', component: AdminProductsManagementComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
