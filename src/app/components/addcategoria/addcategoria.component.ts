import { Component } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';
import { MatDialog } from '@angular/material/dialog';
import { AddcategoriamodalComponent } from '../modaiscategoria/addcategoriamodal/addcategoriamodal.component';
import { RemovecategoriamodalComponent } from '../modaiscategoria/removecategoriamodal/removecategoriamodal.component';
import { UpdatecategoriamodalComponent } from '../modaiscategoria/updatecategoriamodal/updatecategoriamodal.component';


@Component({
  selector: 'app-addcategoria',
  templateUrl: './addcategoria.component.html',
  styleUrls: ['./addcategoria.component.css']
})
export class AddcategoriaComponent {
  listaCategorias : Categoria[] = []
  categoriaAdd : Categoria = {nome :'',id:0}
  valor? : string
  
  constructor(private _service : CategoriaserviceService,private dialog:MatDialog)
  {
    this.GetCategorias();
  }

  AbrirModalAdd(){
    this.dialog.open(AddcategoriamodalComponent,{
      width:'300px',
      height:'120px'
    })
  }

  AbriModalDelete(categoria : Categoria){
    this.dialog.open(RemovecategoriamodalComponent,{
      width:'300px',
      height:'200px',
      data:categoria
    })
  }

  AbrirModalUpdate(categoria : Categoria){
    this.dialog.open(UpdatecategoriamodalComponent,{
      width:'300px',
      height:'220px',
      data:categoria
    })
  }

  GetCategorias(){
    this._service.getCategoria().subscribe(
       {next: (resposta : Categoria[]) => {
        this.listaCategorias = resposta
        }})}

  GettCategorias(){
    this._service.getCategoria()
  }


}
