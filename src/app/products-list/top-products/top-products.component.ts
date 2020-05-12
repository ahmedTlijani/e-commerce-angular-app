import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {

@Input() top_products_list : string[];

  constructor() { }

  ngOnInit() {
  }

}
