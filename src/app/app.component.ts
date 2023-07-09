import { Component } from '@angular/core';
import { ResultadoCRUDViewModel } from './interfaces/resultado-crudview-model';
import { ErrorhandlerService } from './services/errorhandler/errorhandler.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  error : ResultadoCRUDViewModel = {error:[],isSucessfull:false}

  constructor(private errorHandlerService :ErrorhandlerService,private snack : MatSnackBar){}

  ngOnInit():void{
    this.errorHandlerService.getError().subscribe((erro) => {
      this.error = erro.error
      this.snack.open(this.error.error.join(),'Fechar',{
        
        verticalPosition:'top',
        panelClass:['matsnack']
      })
    }) 
  }
  
  title = 'front';
  
}
