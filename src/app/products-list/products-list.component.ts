import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../products-list/product/product.component'
import { Product } from '../model/Product'
import { StoreApi } from '../service/store-api'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products_list:Array<Product>;

  constructor(public todoService: StoreApi) { }

  ngOnInit() {
    this.products_list = this.todoService.getProductList();
  }

 
}
