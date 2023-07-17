import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoriaComponent } from './components/addcategoria/addcategoria.component';
import { AddprodutoComponent } from './components/addproduto/addproduto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorhandlerService } from './services/errorhandler/errorhandler.service';
import { Errorhandler } from './interceptador/errorhandler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input'
import { AddcategoriamodalComponent } from './components/addcategoria/modaiscategoria/addcategoriamodal/addcategoriamodal.component'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RemovecategoriamodalComponent } from './components/addcategoria/modaiscategoria/removecategoriamodal/removecategoriamodal.component';
import { UpdatecategoriamodalComponent } from './components/addcategoria/modaiscategoria/updatecategoriamodal/updatecategoriamodal.component';
import { AddprodutomodalComponent } from './components/addproduto/modaisproduto/addprodutomodal/addprodutomodal.component';
import { RemoveprodutomodalComponent } from './components/addproduto/modaisproduto/removeprodutomodal/removeprodutomodal.component';
import { UpdateprodutomodalComponent } from './components/addproduto/modaisproduto/updateprodutomodal/updateprodutomodal.component';
import {MatSelectModule} from '@angular/material/select';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component'
import {MatMenuModule} from '@angular/material/menu';
import { UpdateimagemComponent } from './components/addproduto/modaisproduto/updateimagem/updateimagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component'

@NgModule({
  declarations: [
    AppComponent,
    AddcategoriaComponent,
    AddprodutoComponent,
    CarrinhoComponent,
    AddcategoriamodalComponent,
    RemovecategoriamodalComponent,
    UpdatecategoriamodalComponent,
    AddprodutomodalComponent,
    RemoveprodutomodalComponent,
    UpdateprodutomodalComponent,
    HomecomponentComponent,
    UpdateimagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [
    ErrorhandlerService,{
      provide: HTTP_INTERCEPTORS,
      useClass:Errorhandler,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
