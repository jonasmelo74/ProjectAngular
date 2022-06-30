import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longText = `A organização do cadastro de produtos pode parecer uma atividade simples,
  mas sua prática é essencial para organizar a gestão e aumentar a lucratividade do seu negócio.
  Afinal, um simples erro no controle de estoque é suficiente para bagunçar todo o processo da sua empresa,
  podendo acarretar em  erros nas compras, desperdícios, prejuízos e muitas dores de cabeça!Por outro lado, 
  fazer o cadastro de produtos com foco e eficiência,  gera inúmeros benefícios para a gestão do negócio.`;

  constructor() { }

  ngOnInit() {
     
  } 
}
