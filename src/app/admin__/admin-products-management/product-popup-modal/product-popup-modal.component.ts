import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AdminProductsManagementComponent } from '../admin-products-management.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/model/Product';
import { NgForm } from '@angular/forms';
import { StoreApi } from '../../../service/store-api';



@Component({
  selector: 'app-product-popup-modal',
  templateUrl: './product-popup-modal.component.html',
  styleUrls: ['./product-popup-modal.component.scss']
})
export class ProductPopupModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public storeService : StoreApi) {
  }
 
  
  modal_name:string;
  modal_action:string;
  error_message:string;

  //form 
  id: number;
  title: string;
  description: string;
  qte: number = 1;
  price: number;
  purchase_number:number = 0;
  img_src: string="";
  created_at: Date ;

  ngOnInit() {

    if(this.data)
    {
      console.log("there is data from ts");
      this.modal_name ="Update Modal";
      this.modal_action="Update";

      // values
      this.id= this.data.id;
      this.title= this.data.title;
      this.description= this.data.description;
      this.qte= this.data.qte;
      this.price= this.data.price;
      this.purchase_number= this.data.purchase_number;
      this.img_src= this.data.img_src;
      this.created_at= this.data.created_at;

    }
    else 
    {
      console.log("no data from ts");
      this.modal_name ="Insert Modal";
      this.modal_action="Insert";
    }
  }


  sendForm(event: any)
  {
    // data -> update else ajout
   var prod: Product = new Product;
   prod.id= this.id;
   prod.title= event.target.title.value;
   prod.description= event.target.description.value;
   prod.qte= event.target.qte.value;
   prod.price= event.target.price.value;
   prod.img_src= event.target.img_src.value;
   prod.created_at= event.target.created_at.value;
   prod.purchase_number=this.purchase_number;

    if(this.data)
    {
      // update request 
      if(prod.title=="" || prod.price.toString()=="" || prod.qte<=0)
      {
        this.error_message="The field with * are necessary";
      }
      else
      {
        // send the update
        this.storeService.updateProductApi(prod);
        window.location.reload();
      }


    }
    else
    {
      // add request
      prod.created_at = new Date(); //

      if(prod.title=="" || prod.price.toString()=="" || prod.qte<=0)
      {
        this.error_message="The field with * are necessary";
      }
      else
      {
        // send the insert
        this.storeService.addProductApi(prod);
        window.location.reload();
      }
    }
  } 
 

}
