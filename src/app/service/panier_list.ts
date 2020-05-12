import { Injectable } from '@angular/core';
import { Product } from '../model/Product'
import { Subject } from 'rxjs';

@Injectable()

//https://www.tutorialspoint.com/angular4/angular4_services.htm

export class PanierList {

   panier_products: Array<Product> = new Array<Product>(); // array of products 
   panier_products_qte= []; // if the product exist in panier_products add +1 to qte 
   panier_counts:number = 0;
   panier_counts_change: Subject<number> = new Subject<number>();
   
  constructor() { 
    this.panier_counts_change.subscribe((value) => {
        this.panier_counts += value;
     });
  }

  addProductPanier(element:Product)
  {
    console.log(element)
    console.log("panier_products_qte");
    console.log(this.panier_products_qte);
    console.log("panier_products");
    console.log(this.panier_products);
    console.log("check "+this.checkPanierProductExist(element));
    if(this.checkPanierProductExist(element)) // product exist
    {
        for(var i=0;this.panier_products_qte.length;i++)
        {
            if(this.panier_products_qte[i].product.id==element.id)
            {
                this.panier_products_qte[i].qte+=1;
                break;
            }
        }
    }
    else
    {
        this.panier_products.push(element); // add product to panier_products and panier_products_qte
        var a = {"product":element,"qte":1};
        this.panier_products_qte.push(a);
        this.panier_counts_change.next(1); // adding 1 to panier_counts
 
        console.log(this.panier_products_qte);
    }
    console.log(this.panier_products_qte);
    console.log(this.panier_products);
  }

  plusProductPanier(element)
  {
    for(var i=0;i<this.panier_products_qte.length;i++)
    {
        if(element.product.id==this.panier_products_qte[i].product.id)
        {
            this.panier_products_qte[i].qte+=1;
        }
    }
  }

/*
  this.panier_products.slice(i,1); // deleting the product from panier_products if the qte is 0
  this.panier_products_qte.slice(i,1); // deleteing the product from panier_products_qte
  this.panier_counts_change.next(-1); // minus 1 to panier_counts
*/

  minusProductPanier(element) // we cant remove unless the product exist 
  {
    for(var i=0;i<this.panier_products_qte.length;i++)
    {
        if(element.product.id==this.panier_products_qte[i].product.id)
        {
            if(this.panier_products_qte[i].qte>1) // minimum qte is 1 
            {
                this.panier_products_qte[i].qte-=1;
            }
        }
    }
    console.log(this.panier_products_qte);
    console.log(this.panier_products);
  }


  removeProductPanier(element)
  {
    for(var i=0;i<this.panier_products_qte.length;i++)
    {
        if(element.product.id==this.panier_products_qte[i].product.id)
        {
            console.log("removing.......");
            this.panier_products.splice(i,1); // deleting the product from panier_products if the qte is 0
            this.panier_products_qte.splice(i,1); // deleteing the product from panier_products_qte
            this.panier_counts_change.next(-1); // minus 1 to panier_counts
        }
    }
    console.log(this.panier_products_qte);
    console.log(this.panier_products);
  }


  // check if product exist in panier_products
  checkPanierProductExist(prod:Product)
  {
    var flag:boolean = false;
    for(var i=0;i<this.panier_products.length;i++)
    {
        if(prod.id==this.panier_products[i].id)
        {
            flag=true;
            break;
        }
    }
    return flag;
  }

  getPanierProducts()
  {
      return this.panier_products;
  }
  getPanierCounts()
  {
      return this.panier_counts;
  }

  getPanierProductsWithQte()
  {
      return this.getPanierProductsWithQte;
  }

  calculate_total()
  {
    var t = 0 ;
    for(var i=0;i<this.panier_products_qte.length;i++)
    {
       var a = this.panier_products_qte[i].product.price * this.panier_products_qte[i].qte;
       t+=a;
    }
    return t;
  }



}