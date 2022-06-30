import { Product } from './../product.model';
import { ProductService } from 'src/app/components/products/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: '' ,
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['products'])
    })
  }

  cancel(): void {
    this.router.navigate(['products'])
    this.productService.showMessage('Cadastro cancelado!')
  }
}
