import { Component, OnInit, Inject } from '@angular/core';
import { AdminProductsManagementComponent } from '../admin-products-management.component';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-image-popup-modal',
  templateUrl: './image-popup-modal.component.html',
  styleUrls: ['./image-popup-modal.component.scss']
})
export class ImagePopupModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AdminProductsManagementComponent) {}

  ngOnInit() {
  }

}
