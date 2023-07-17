import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddprodutomodalComponent } from  '../addproduto/modaisproduto/addprodutomodal/addprodutomodal.component'
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { RemoveprodutomodalComponent } from './modaisproduto/removeprodutomodal/removeprodutomodal.component';
import { UpdateprodutomodalComponent } from './modaisproduto/updateprodutomodal/updateprodutomodal.component';
import { UpdateimagemComponent } from './modaisproduto/updateimagem/updateimagem.component';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})
export class AddprodutoComponent implements OnInit{

  categoriasCadastradas : Categoria[] = []
  produtosCadastrados : Produto[] = []
  constructor(
    private matDialog : MatDialog,
    private categService : CategoriaserviceService,
    private prodService : ProdutoService,
  ){}

  ngOnInit(): void {
    this.GetCategorias();
    this.GetProdutos();  
  }

  OpenAdd(){
    this.matDialog.open(AddprodutomodalComponent,{
      width:'320px',
      height:'auto',
      data:this.categoriasCadastradas
    })
  }

  OpenAtualizar(Produto : Produto){
    this.matDialog.open(UpdateprodutomodalComponent,{
      width:'320px',
      height:'auto',
      data:Produto
    })
  }

  OpenAtualizarImagem(Produto : Produto){
    this.matDialog.open(UpdateimagemComponent,{
      width : '320px',
      height : 'auto',
      data : Produto
    })
  }

  OpenExcluir(produto : Produto){
    this.matDialog.open(RemoveprodutomodalComponent,{
      width:'320px',
      height:'auto',
      data:produto
    })
  }

  GetCategorias (){
    this.categService.getCategoria().subscribe((resultado) => {
      this.categoriasCadastradas = resultado
    })
  }

  GetProdutos(){
    this.prodService.Get().subscribe((resultado) => {
      this.produtosCadastrados = resultado
    })
  }


}
