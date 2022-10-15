import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-mini-detail',
  templateUrl: './product-mini-detail.component.html',
  styleUrls: ['./product-mini-detail.component.scss']
})
export class ProductMiniDetailComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
