import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddprodutomodalComponent } from '../modaisproduto/addprodutomodal/addprodutomodal.component';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.component.html',
  styleUrls: ['./addproduto.component.css']
})
export class AddprodutoComponent implements OnInit{

  categoriasCadastradas : Categoria[] = []

  constructor(
    private matDialog : MatDialog,
    private categService : CategoriaserviceService
  ){}

  ngOnInit(): void {
    this.GetCategorias()
  }

  OpenAdd(){
    this.matDialog.open(AddprodutomodalComponent,{
      width:'320px',
      height:'auto',
      data:this.categoriasCadastradas
    })
  }

  GetCategorias (){
    this.categService.getCategoria().subscribe((resultado) => {
      this.categoriasCadastradas = resultado
    })
  }

}
