import { Component } from '@angular/core';
import { Itemcarrinho } from 'src/app/interfaces/itemcarrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  lista : Itemcarrinho[] = 
  [
    {produtoId : 1,categoriaId:1,nome:'Teste'},
  ]

  constructor(){}
}
