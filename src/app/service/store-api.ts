// getting all the products from API + add, remove, update functions
import { Injectable } from '@angular/core';
import { Product } from '../model/Product'
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})

//https://www.tutorialspoint.com/angular4/angular4_services.htm

export class StoreApi {

  ROOT_URL= "http://127.0.0.1:8000"; // root url for symfony api

  storeApiChange: Subject<number> = new Subject<number>();

  private products_list:Array<Product>;

  constructor( public storeHttp: HttpClient) { 
    // getting date from server here - todo

    this.storeApiChange.subscribe((value) => {
      this.products_list = this.products_list;
   });

    var apiArray: any;
    var link= this.ROOT_URL+"/product/fetchAll";
    console.log(link)
    
    var self = this;
    $.ajax({ 
      type: "GET",
      crossDomain: true,
      dataType: 'json',
      url: link,
      success: function(data){  
        console.log("store api fetch");      
        console.log(data.products);
        //create new product
        var a = [];
        for(var i=0;i<data.products.length;i++)
        {
          var p = new Product;
          p.id= data.products[i].product_id;
          p.title= data.products[i].product_name;
          p.qte= data.products[i].product_qte;
          p.description= data.products[i].product_description;
          p.price= data.products[i].product_price;
          p.img_src= data.products[i].product_img_src;
          p.purchase_number= data.products[i].product_purchas_number;
          p.created_at= data.products[i].product_created_at;
          a.push(p);
        }
        self.products_list= a;
        self.storeApiChange.next(1); // change the value
      },
      error: function(errorThrown )
      {
        console.log(errorThrown.statusText);
      }
   });

  }
 
 
  getProductList() // make the api call /product/fetchAll
  {
    return this.products_list;
  }

  getTopProducts()
  {
    // adding top products to the list 
    var top_poduct:Array<Product> = Array<Product>();
    // delay here 
    
    for(var i=0;i<this.products_list.length;i++)
    {
      if(this.products_list[i].purchase_number>=10)
      {
        top_poduct.push(this.products_list[i]);
      }
    }
    return top_poduct;
  }

  addProductApi(product_:Product) // making the api call /product/new
  {
    console.log("add from store-api");
    console.log(product_);

    var link= this.ROOT_URL+"/product/new";
    console.log(link)
    
    var self = this;
    $.ajax({ 
      type: "POST",
      url: link,
      data: { product_name: product_.title, product_qte : product_.qte, product_description : product_.description,
       product_price : product_.price, product_purchase_number : product_.purchase_number, product_img_src : product_.img_src,
       product_created_at : product_.created_at} ,
      success: function(data){  
        console.log("insert");      
        
      },
      error: function(errorThrown )
      {
        console.log(errorThrown.statusText);
      }
   });


  }

  updateProductApi(product_:Product) // making the api call /product/edit/{id}
  {
    console.log("update from store-api");
    console.log(product_);

    var link= this.ROOT_URL+"/product/edit/"+product_.id;
    console.log(link)
    
    var self = this;
    $.ajax({ 
      type: "POST",
      crossDomain: true,
      dataType: 'json',
      url: link,
      data: { product_name: product_.title, product_qte : product_.qte, product_description : product_.description,
       product_price : product_.price, product_purchase_number : product_.purchase_number, product_img_src : product_.img_src,
       product_created_at : product_.created_at} ,
      success: function(data){  
        console.log("updated");      
        
      },
      error: function(errorThrown )
      {
        console.log(errorThrown.statusText);
      }
   });


  }

  deleteProductApi(product_:Product) // making the api call /product/delete/{id}
  {
    console.log("delete from store-api");
    console.log(product_);
    var link= this.ROOT_URL+"/product/delete/"+product_.id;
    console.log(link)
    
    var self = this;
    $.ajax({ 
      crossDomain: true,
      dataType: 'json',
      url: link,
      success: function(data){  
        console.log("removed")
      },
      error: function(errorThrown )
      {
        console.log(errorThrown.statusText);
      }
   });
  }





}