import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../../model/Product'
import { FavoriteProducts } from '../../service/favorite_products'
import { PanierList } from '../../service/panier_list'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  favorite: boolean = false;
 
  constructor(public todoService: FavoriteProducts,public todoServicePanier: PanierList) {} // here we got the FavoriteProducts // ERROR is here => adding the service to app module to solve the problem

  ngOnInit() {
    this.favorite = this.todoService.checkFavoriteExist(this.product.id);
    //console.log("product component");
    //console.log(this.todoService.checkFavoriteExist(this.product.id));
  }

 
  set_favorite()
  {
     // here we test to change favorite(boolean) to true or false
    if(this.favorite==false && this.todoService.checkFavoriteExist(this.product.id)==false)
    {
      this.favorite = true;
      // add it to favorite section
      this.todoService.setFavorite(this.product);
    }
    else
    {
      this.favorite = false;
      // remove it from favorite section
      this.todoService.removeFavorit(this.product);
    }
  
  }

  // panier stuffs goes here xd 
  add_product_panier()
  {
    this.todoServicePanier.addProductPanier(this.product);
  }


}
