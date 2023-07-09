import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AddprodutoComponent } from './components/addproduto/addproduto.component';
import { AddcategoriaComponent } from './components/addcategoria/addcategoria.component';

const routes: Routes = [  {path:'carrinho',component:CarrinhoComponent},
{path:'addproduto',component:AddprodutoComponent},
{path:'addcategoria',component:AddcategoriaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
