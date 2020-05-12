import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

import { ProductsListComponent } from './products-list/products-list.component';

// install angular material https://www.youtube.com/watch?v=46d7AGhgwSM
import { HomePageComponent } from './home-page/home-page.component';

import { FavoriteProducts } from './service/favorite_products' // solving the problem of service => no provider
import { StoreApi } from './service/store-api'
import { PanierList } from './service/panier_list';
import {
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatBadgeModule,
  MatMenuModule,
  MatTooltipModule,
  MatGridListModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableDataSource,
  MatDialogModule,
  MatFormFieldControl,
  MatRadioModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDividerModule
  
} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { TopProductsComponent } from './products-list/top-products/top-products.component';
import { ProductComponent } from './products-list/product/product.component';
import { FavoriteProductsPageComponent } from './favorite-products-page/favorite-products-page.component';
import { ChariotPageComponent } from './chariot-page/chariot-page.component';
import { AdminProductsManagementComponent } from './admin__/admin-products-management/admin-products-management.component';
import { ImagePopupModalComponent } from './admin__/admin-products-management/image-popup-modal/image-popup-modal.component';
import { ProductPopupModalComponent } from './admin__/admin-products-management/product-popup-modal/product-popup-modal.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SlideShowComponent,
    ProductsListComponent,
    HomePageComponent,
    FooterComponent,
    TopProductsComponent,
    ProductComponent,
    FavoriteProductsPageComponent,
    ChariotPageComponent,
    AdminProductsManagementComponent,
    ImagePopupModalComponent,
    ProductPopupModalComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDividerModule,
    HttpClientModule
   ],
  providers: [FavoriteProducts,StoreApi,PanierList,MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents:[ImagePopupModalComponent,ProductPopupModalComponent] // popup
})
export class AppModule { }
