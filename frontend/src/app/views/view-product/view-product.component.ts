import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    //Button to navigate to create page 
    navigateProductCreate(): void {
    this.router.navigate(['products/create']) 
  }
}
