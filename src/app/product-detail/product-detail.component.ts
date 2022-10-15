import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  category: any;

  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.router.snapshot.params?.['id'];
    const url = 'https://products-b.herokuapp.com/product/' + id;
    this.http.get<any>(url).subscribe((details) => {
      this.product = details;
      this.fetchCategory();
    });
   }
   fetchCategory() {
      const url1 = 'https://products-b.herokuapp.com/category/' + this.product.categoryId;
      this.http.get<any>(url1).subscribe((category) => {
        this.category = category;
      });
    }
}

