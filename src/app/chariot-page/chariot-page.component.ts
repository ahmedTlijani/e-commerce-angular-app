import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product'
import { PanierList } from '../service/panier_list'

@Component({
  selector: 'app-chariot-page',
  templateUrl: './chariot-page.component.html',
  styleUrls: ['./chariot-page.component.scss']
})
export class ChariotPageComponent implements OnInit {

  products_list_with_qte = [];
  total_panier: number = 0;

  constructor(public todoService: PanierList) {
    
      // panier list 
    this.todoService.panier_counts_change.subscribe(() => {
    this.products_list_with_qte=this.todoService.panier_products_qte;
    console.log("panier_products_qte array from top nav: ");
    console.log(this.products_list_with_qte);

    });

   }

  ngOnInit() {
    this.products_list_with_qte=this.todoService.panier_products_qte;

    this.total_panier=this.todoService.calculate_total();
    console.log("total " + this.total_panier)

  }

  add_product_(element1)
  {
    console.log("adding element: ");console.log(element1);
    this.todoService.plusProductPanier(element1);

    this.total_panier=this.todoService.calculate_total();
    console.log("total " + this.total_panier)
  }

  minus_product_(element2)
  {
    console.log("minus element: ");console.log(element2);
    this.todoService.minusProductPanier(element2);

    this.total_panier=this.todoService.calculate_total();
    console.log("total " + this.total_panier)

  }

  removeShoppingCart_(element3)
  {
    console.log("remove element: ");console.log(element3);
    this.todoService.removeProductPanier(element3);

    this.total_panier=this.todoService.calculate_total();
    console.log("total " + this.total_panier)
  }


/*   todo 
  1 - completing panier_list remove - Done :D
  2 - subscribe to panier_products_qte from panier_list */

}
