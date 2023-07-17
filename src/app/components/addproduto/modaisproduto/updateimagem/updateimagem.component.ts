import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-updateimagem',
  templateUrl: './updateimagem.component.html',
  styleUrls: ['./updateimagem.component.css']
})
export class UpdateimagemComponent {

  ImagemSelecionada : File = {} as File
  ImagemSelecionadaUrl = ''

  constructor(@Inject(MAT_DIALOG_DATA)public data : Produto,private service :  ProdutoService,private matRef : MatDialogRef<UpdateimagemComponent>){}

  PutImagem(){
    const formDat = new FormData()
    formDat.append('id',this.data.id.toString())
    formDat.append('imagem',this.ImagemSelecionada)
    this.service.AtualizarIMG(formDat).subscribe()
    this.matRef.close()
  }

  Close(){
    this.matRef.close();
  }

  AtualizarImagem(event : any){
    this.ImagemSelecionada = event.target.files[0]
    this.ExibirImagem()
  }

  ExibirImagem(){
    const FileReade = new FileReader();

    FileReade.onload = (e : any) => {
      this.ImagemSelecionadaUrl = e.target.result
    }

    FileReade.readAsDataURL(this.ImagemSelecionada)
  }

}
