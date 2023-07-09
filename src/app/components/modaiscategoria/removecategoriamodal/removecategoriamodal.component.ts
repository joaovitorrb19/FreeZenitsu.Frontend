import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaserviceService } from 'src/app/services/categoria/categoriaservice.service';

@Component({
  selector: 'app-removecategoriamodal',
  templateUrl: './removecategoriamodal.component.html',
  styleUrls: ['./removecategoriamodal.component.css']
})
export class RemovecategoriamodalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public categoria: Categoria,
    private matDialog : MatDialogRef<RemovecategoriamodalComponent>,
    private service : CategoriaserviceService){}

  DeleteCategoria():void{
    this.service.deleteCategoria(this.categoria).subscribe()
    this.matDialog.close()
  }

  Close():void{
    this.matDialog.close()
  }

} 
