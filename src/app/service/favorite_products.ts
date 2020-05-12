import { Injectable } from '@angular/core';
import { Product } from '../model/Product'
import { Subject } from 'rxjs';

@Injectable()

//https://www.tutorialspoint.com/angular4/angular4_services.htm

export class FavoriteProducts {

  public favorite_products= new Array<Product>();
  
  public favorite_counts:number = 0;
  public favorite_counts_change: Subject<number> = new Subject<number>();


  constructor() { 
    this.favorite_counts_change.subscribe((value) => {
      this.favorite_counts += value;
  });
  }

  setFavorite(element: Product) {
    var flag = false;
    for(var i=0;i<this.favorite_products.length;i++)
    {
      if(element.id==this.favorite_products[i].id)
      {
        flag=true; // exist so dnt push 
        break;
      }
    }
    // checking if exist 
    if(!flag) // if not exust then push
    {
      this.favorite_products.push(element);
      this.favorite_counts_change.next(1); // +1 to favorite counts 
      /* console.log("adding to favorit list ");
      console.log(this.favorite_products); */
    }else{
      /* console.log("not adding to favorit list ");
      console.log(this.favorite_products); */
    }

   
   }
  
  removeFavorit(element: Product) {
    // fruits.splice(2, 1); delete 1 element at position 2 of fruits array
    for(var i=0;i<this.favorite_products.length;i++)
    {
      if(element.id==this.favorite_products[i].id)
      {
        this.favorite_products.splice(i,1);
        this.favorite_counts_change.next(-1); // -1 to the favorite counts
        break;
      }
    }
   /*  console.log("removed from favorite ");
    console.log(this.favorite_products); */
   }
  getFavoriteById(id_: number)
  {
    console.log(this.favorite_products);

    for(var i=0;i<this.favorite_products.length;i++)
    {
      if(id_==this.favorite_products[i].id)
      {
        return this.favorite_products[i];
      }
    }
   }

  public checkFavoriteExist(id_: number)
  {
    var aa: boolean = false;
    this.favorite_products.forEach(element => {
        if(element.id==id_)
        {
            aa = true;
        }
    });
    /* console.log("from checking favirte exist ");
    console.log(this.favorite_products); */
     return aa;
  }
  get_all() {
   /*  console.log("from get all ");
    console.log(this.favorite_products); */
    return this.favorite_products;
  }
}