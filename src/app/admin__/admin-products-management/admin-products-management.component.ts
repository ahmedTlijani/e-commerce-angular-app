import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Product } from '../../model/Product';
import { StoreApi } from '../../service/store-api';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA,MatSort} from '@angular/material';
import { ImagePopupModalComponent } from '../../admin__/admin-products-management/image-popup-modal/image-popup-modal.component';
import { ProductPopupModalComponent } from '../../admin__/admin-products-management/product-popup-modal/product-popup-modal.component';


@Component({
  selector: 'app-admin-products-management',
  templateUrl: './admin-products-management.component.html',
  styleUrls: ['./admin-products-management.component.scss']
})


export class AdminProductsManagementComponent implements OnInit {

  constructor(private storeService: StoreApi,public dialog: MatDialog) {
    storeService.storeApiChange.subscribe(() => {
      this.dataSource = new MatTableDataSource<Product>(this.storeService.getProductList());
      });
   }

  dataSource : MatTableDataSource<any> ;
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'qte', 'purchase_number', 'img_src', 'created_at','actions'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string="";

  ngOnInit() {

  //this.dataSource = this.storeService.getProductList();
  this.dataSource = new MatTableDataSource<Product>(this.storeService.getProductList());
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter("");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  insertProduct() // open modal 
  {
    console.log("insert");
    this.dialog.open(ProductPopupModalComponent, { 
    });

  }

  modifyProduct(product_:Product) // open modal
  {
   // console.log("modify");
   // console.log(product_)
    this.dialog.open(ProductPopupModalComponent, { 
      data:product_
    });
  }

  deleteProduct(product_:Product) // delete  product
  {
    if (confirm("Delete this product?!")) {
      this.storeService.deleteProductApi(product_);
      window.location.reload();

    } else {
      
    }

  }


  showImage(img_src_)
  {
    // src from server "../assets/images/1.jpg"
    // will change it like this '../../../../assets/images/1.jpg'
    var s = "../../../"+img_src_;
    this.dialog.open(ImagePopupModalComponent, { 
      data: { 
        img_src: s
      }
    });
  }

  

}
