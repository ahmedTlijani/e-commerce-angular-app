import { Component, OnInit, Input } from '@angular/core';
import { FavoriteProducts } from '../service/favorite_products'
import { PanierList } from '../service/panier_list'
import { Product } from '../model/Product'
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  chariot: number=0;
  favorite: number = 0;

  constructor(public todoService: FavoriteProducts,public todoServicePanier: PanierList) {
   // favorite list update
   this.todoService.favorite_counts_change.subscribe(() => {
    this.favorite = todoService.favorite_counts;
    console.log("favorite counts from top nav: " + this.favorite);
    });

    // panier list 
   this.todoServicePanier.panier_counts_change.subscribe(() => {
    this.chariot = todoServicePanier.panier_counts;
    console.log("panier counts from top nav: " + this.chariot);
    });



  }

  ngOnInit() {}

}
