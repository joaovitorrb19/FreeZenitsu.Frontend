import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfaces/categoria';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-addprodutomodal',
  templateUrl: './addprodutomodal.component.html',
  styleUrls: ['./addprodutomodal.component.css']
})
export class AddprodutomodalComponent {

  produto : Produto = {nome : '',id : 0,categoriaId : 0,preco : 0,imagem : {} as any}

  imagemSelecionada : File = {} as any;
  imagemSelecionadaUrl : string =''

  constructor(
    @Inject(MAT_DIALOG_DATA) public categorias : Categoria[],
    private matDialog : MatDialogRef<AddprodutomodalComponent>
  ){}

  Cancelar(){
    this.matDialog.close()
  }

  Adicionar(){
    
  }

  selecionarImagem(event : any){
    this.imagemSelecionada = event.target.files[0];
    this.exibirImagemSelecionada();
  }

  exibirImagemSelecionada(){
    if(this.imagemSelecionada){
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imagemSelecionadaUrl = e.target.result;
        console.log(this.imagemSelecionadaUrl)
      }
      reader.readAsDataURL(this.imagemSelecionada)
    } 
  }

}
