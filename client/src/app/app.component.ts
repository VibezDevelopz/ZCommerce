import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IProduct } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ZCommerce';
  products: IProduct[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const observer = {
      next: (response: any) => this.products = response.data,
      error: (error: any) => console.log(error),
      complete: () => console.log('Completed')
    };

    this.http.get('http://localhost:5000/api/products?pageSize=50')
      .pipe(
        tap(observer)
      )
      .subscribe();
  }
}
