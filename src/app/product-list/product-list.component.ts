import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  product_list_data: any;
  product_details_data: any;
  selectedProduct: any;
  selectedProductDetail: any;
  productCategory = new FormGroup({
    category: new FormControl(''),
  });

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>('https://products-b.herokuapp.com/category').subscribe((list) => {
      this.product_list_data = list;
      this.selectedProduct = this.product_list_data[0];
      this.onCategorySelection();
    });
  }

  onCategorySelection(): void {
    const id: string = this.selectedProduct._id;
    const url = 'https://products-b.herokuapp.com/product/list/' + id;
    this.http.get<any>(url, this.selectedProduct._id).subscribe((products) => {
      this.selectedProductDetail = products;
    });
  }

  fetchProductDetails(product: any): void {
    console.log(product);
    this.router.navigate(['/product-detail/'+ product._id]);
  }
}
