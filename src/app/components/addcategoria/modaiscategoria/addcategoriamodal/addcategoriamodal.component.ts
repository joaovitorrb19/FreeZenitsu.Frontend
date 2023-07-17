import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; 
import { Addcategoriainputvalidator } from 'src/app/component/addcategoriainputvalidator';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';


@Component({
  selector: 'app-addcategoriamodal',
  templateUrl: './addcategoriamodal.component.html',
  styleUrls: ['./addcategoriamodal.component.css']
})
export class AddcategoriamodalComponent{

  matcher = new Addcategoriainputvalidator()
  nameForm = new FormControl('',[Validators.required])


  constructor(
    public dialogRef: MatDialogRef<AddcategoriamodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data : string,
    private service : CategoriaserviceService){}
  
    Adicionar():void{
       let valor = ''

       valor = this.nameForm.value ?? '' ;

      this.service.postCategoria(valor).subscribe()
      
      this.dialogRef.close()
    }

    Cancelar():void{
      this.dialogRef.close()
    }

}
