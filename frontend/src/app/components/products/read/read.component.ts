import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/products/product.service';
import { Product } from '../product.model';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'symbol', 'action'];

  constructor(private router: Router, private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
    //productService é um objeto que contém todos os métodos do serviço
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    })
  }

  //a função delete faz o link com o componente delete
  deleteProduct(id:number): void {
    this.router.navigate([`products/delete/${id}`])
  }

  //a função change faz o link com o componente change
  change(id:number): void {
    this.router.navigate([`products/change/${id}`])
  }
}