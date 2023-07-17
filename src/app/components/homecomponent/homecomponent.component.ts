import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit{

  produtos : Produto[] = []

  constructor(private service : ProdutoService){}

  ngOnInit(): void {
    this.GetProdutos()
  }

  GetProdutos(){
    this.service.Get().subscribe((resultado) => {
      this.produtos = resultado
    })
  }


}
