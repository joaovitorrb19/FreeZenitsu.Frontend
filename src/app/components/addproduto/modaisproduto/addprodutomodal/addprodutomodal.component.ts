import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfaces/categoria';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-addprodutomodal',
  templateUrl: './addprodutomodal.component.html',
  styleUrls: ['./addprodutomodal.component.css']
})
export class AddprodutomodalComponent {

  form = new FormGroup({
    nome : new FormControl('',[Validators.required]),
    preco : new FormControl('',[Validators.required,Validators.pattern(/^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/)]),
    categoriaId : new FormControl('',Validators.required),
    Imagem : new FormControl('',[Validators.required]),
  })
 
  imagemSelecionada : File = {} as any;
  imagemSelecionadaUrl : string =''

  constructor(
    @Inject(MAT_DIALOG_DATA) public categorias : Categoria[],
    private matDialog : MatDialogRef<AddprodutomodalComponent>,
    private service : ProdutoService,
  ){}

  Cancelar(){
    this.matDialog.close()
  }

  Adicionar(){

    const nome = this.form.get('nome')?.value
    const preco = this.form.get('preco')?.value
    const categoriaId = this.form.get('categoriaId')?.value

    let formData = new FormData();
    
   formData.append('Imagem',this.imagemSelecionada);
    formData.append('nome',nome || '');
    formData.append('preco',this.form.get('preco')?.value || '');
    formData.append('CategoriaId',this.form.get('categoriaId')?.value || '');

    this.service.Post(formData).subscribe()
    this.matDialog.close()
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
      }
      reader.readAsDataURL(this.imagemSelecionada)
    } 
  }

}
