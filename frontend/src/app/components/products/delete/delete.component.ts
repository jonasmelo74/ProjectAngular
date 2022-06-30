import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  //activatedRoute lê os parâmetros da rota do componente
  //snapshot é um objeto que contém todos os parâmetros da rota
  //subscribe é um método que recebe um função
  //product é um objeto que contém todos os dados do produto
  //this.product é um objeto que contém todos os dados do produto

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.productService.readID(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    if (this.product !== null) {
      this.productService.deleteProductService(this.product).subscribe(() => {
        this.productService.showMessage('Produto excluído com sucesso');
        this.router.navigate(['/products']);
      })
    } else {
      throw 'product is null';
    }
  }

  cancelDelete(): void {
    this.router.navigate(['/products']);
    this.productService.showMessage('Exclusão cancelada!');
  }
}