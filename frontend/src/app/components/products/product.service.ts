import { Router } from '@angular/router';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'  //service singleton angular = root
  //Sigleton é uma classe que possue uma única instância 
})
export class ProductService {
  
  //[x: string]: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private route: Router) { }

  baseUrl = "http://localhost:3001/products"
  
  readID(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  //change Product from database and update the product in the array of products 
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
    return this.http.get<Product[]>(this.baseUrl)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Função passando o router
  navigateProduct(route: string) {
  this.route.navigate([route]); 
  }



  showMsg(msg: String){  
    switch (msg) {
      case 'msg1':
        let msg1 = this.showMessage('Produto não foi alterado')
        break;
      case 'msg2':
        let msg2 =  this.showMessage('Produto não foi excluído')
        break;
      case 'msg3':
        let msg3 = this.showMessage('Novo produto foi cancelado')
        break;
    }
  }
}