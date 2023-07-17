import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AddprodutoComponent } from './components/addproduto/addproduto.component';
import { AddcategoriaComponent } from './components/addcategoria/addcategoria.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [  
{path:'',component:HomecomponentComponent},
{path:'carrinho',component:CarrinhoComponent},
{path:'addproduto',component:AddprodutoComponent},
{path:'addcategoria',component:AddcategoriaComponent},
{path:'cadastro',component:CadastroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
