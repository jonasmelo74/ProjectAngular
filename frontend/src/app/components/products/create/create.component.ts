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
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  verification(): number{
    let conv = this.product.price?.toString()
    conv = conv?.replace(",", ".");
    return Number(conv)
  }

  createProduct(): void {
    if (this.product.price !== undefined) {
    this.product.price = this.verification();
    this.productService.createProduct(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['products'])
    })
  } else {
    this.productService.showMessage('Não existe produto para cadastro!');
  }
}

  cancel(): void {
    this.router.navigate(['products']);
    this.productService.showMsg('msg3')
  }
}