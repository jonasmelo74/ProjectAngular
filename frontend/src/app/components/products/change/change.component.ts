import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Lendo o id do produto e preenchendo no objeto product
    const id = this.route.snapshot.params['id']
    this.productService.readID(id).subscribe(product => {
      this.product = product;
    })
  }

  change(){
    if (this.product !== null) {
    this.productService.changeProduct(this.product).subscribe(() => {
    this.productService.showMessage('Produto Alterado!')
    this.router.navigate(['products']);
    })
  }
}

  cancelChange(){
    this.router.navigate(['products']);
    this.productService.showMessage('Alteração cancelada!')
  }
}
