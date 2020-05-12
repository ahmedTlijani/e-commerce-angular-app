import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product'
import { StoreApi } from '../service/store-api'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'Online Market ';
  top_products_list: Array<Product>;
  constructor(public todoService: StoreApi) {}

  ngOnInit() {
      this.top_products_list = this.todoService.getTopProducts();
  }

  

   // get random number
   get_random(min_,max_)
   {
     return Math.floor((Math.random()*max_)+min_);
   }
}
