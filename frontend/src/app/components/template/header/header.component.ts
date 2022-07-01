import { NavigationEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/components/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titles = [
    {
      url: '/',
      icon: 'home',
      label: 'Home'
    },
    {
      url: '/products',
      icon: 'storefront',
      label: 'Produtos'
    },
  ]

  actualTitle: { label: string, icon: string } = {
    label: '',
    icon: ''
  };

  constructor(private productService: ProductService,
    private router: Router) {

    router.events.subscribe((val) => {  //Sobrescrever cada evento que acontecer no router, para saber qual é o titulo atual                                  
      if (val instanceof NavigationEnd) { //Se o evento for do tipo NavigationEnd (Um evento acionado quando uma navegação termina com sucesso.)
        const actual = this.titles.filter((title) => title.url === val.url).shift(); //Filtrar o titulo atual, e retornar o primeiro resultado
 
        if (actual) {
          this.actualTitle.label = actual.label;
          this.actualTitle.icon = actual.icon;
        }
      }
    });
  }

  ngOnInit(): void {
    this.icones();
  }

  icones() {
  }
}