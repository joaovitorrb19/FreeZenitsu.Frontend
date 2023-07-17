import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfaces/categoria';
import { Produto } from 'src/app/interfaces/produto';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-updateprodutomodal',
  templateUrl: './updateprodutomodal.component.html',
  styleUrls: ['./updateprodutomodal.component.css']
})
export class UpdateprodutomodalComponent implements OnInit {
  
  categorias : Categoria[] = []  

  form  = new FormGroup({
  nome : new FormControl(''),
  preco : new FormControl(''),
  categoriaId : new FormControl(''),
  imagem :new FormControl(null)
  })

  constructor(@Inject(MAT_DIALOG_DATA)public produto : Produto,private service : ProdutoService,private mat : MatDialogRef<UpdateprodutomodalComponent>,private categService : CategoriaserviceService){}
 
  ngOnInit(): void {
    this.categService.getCategoria().subscribe((resultado) => {
      this.categorias  = resultado
    })
  }

  Atualizar(){
    let formData = new FormData()
    formData.append('id',this.produto.id.toString())
    formData.append('preco',this.form.get('preco')?.value || '')
    formData.append('nome',this.form.get('nome')?.value || '')
    formData.append('categoriaId',this.form.get('categoriaId')?.value || '')


    this.service.Atualizar(formData).subscribe()
    this.mat.close()
  }

  Cancelar(){
    this.mat.close()
  }

}
