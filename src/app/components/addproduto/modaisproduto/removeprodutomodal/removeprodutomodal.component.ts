import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';



@Component({
  selector: 'app-removeprodutomodal',
  templateUrl: './removeprodutomodal.component.html',
  styleUrls: ['./removeprodutomodal.component.css']
})
export class RemoveprodutomodalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public produto : Produto,
    private mat : MatDialogRef<RemoveprodutomodalComponent>,
    private service : ProdutoService){}

  Excluir():void{
    console.log(this.produto)
    this.service.Remove(this.produto).subscribe()
    this.Close()
  }

  Close(){
    this.mat.close()
  }

}
