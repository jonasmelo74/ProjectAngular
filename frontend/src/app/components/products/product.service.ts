import { Router } from '@angular/router';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //[x: string]: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/products"
  
  readID(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  changeProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }

  //Deletando dados na tabela
  deleteProductService(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<Product>(url)
  }

  //Inserindo dados na tabela
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  //Pegando os dados da tabela 
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Função passando o router
  navigateProduct(router Router) {
  this.router.navigate(['products']); 
  }   
    
 

}