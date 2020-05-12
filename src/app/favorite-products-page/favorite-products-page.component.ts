import { Component, OnInit } from '@angular/core';
import { FavoriteProducts } from '../service/favorite_products'
import { ProductComponent } from '../products-list/product/product.component'
import { Product } from '../model/Product';
 
@Component({
  selector: 'app-favorite-products-page',
  templateUrl: './favorite-products-page.component.html',
  styleUrls: ['./favorite-products-page.component.scss']
})
export class FavoriteProductsPageComponent implements OnInit {

  fav_products:Array<Product>;

  constructor( public todoService: FavoriteProducts ) { }

  ngOnInit() {
    this.fav_products = this.todoService.get_all();
  }

}
