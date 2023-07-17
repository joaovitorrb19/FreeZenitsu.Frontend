import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfaces/categoria';
import {Inject} from '@angular/core'
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';

@Component({
  selector: 'app-updatecategoriamodal',
  templateUrl: './updatecategoriamodal.component.html',
  styleUrls: ['./updatecategoriamodal.component.css']
})
export class UpdatecategoriamodalComponent{

  nomeAntes = this.categoria.nome
  nomeDepois = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) public categoria : Categoria,
    private mat : MatDialogRef<UpdatecategoriamodalComponent>,
    private service : CategoriaserviceService
  ){}


  UpdateCategoria():void{
    this.categoria.nome = this.nomeDepois
    this.service.updateCategoria(this.categoria).subscribe()
    this.mat.close()
  }  

  Close():void{
    this.mat.close()
  }

}
