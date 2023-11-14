import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/products';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ZCommerce';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('http://localhost:5000/api/products?pageSize=50').subscribe({
      next: (response : any) => this.products = response.data, //next
      error: error => console.log(error), //error
      complete: () => {
        console.log('request completed');
        console.log('extra statement'); //completed
      }
    })
  }
}
