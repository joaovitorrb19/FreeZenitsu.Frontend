import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { ResultadoCRUDViewModel } from 'src/app/interfaces/resultado-crudview-model';
import { options } from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  headers = {
    headerJson: new HttpHeaders({
      'Content-Type': 'text/json'
    })
  };
  
  constructor(private http: HttpClient) {}
  
  Post(produto: FormData) :Observable<ResultadoCRUDViewModel>{
    return this.http.post<ResultadoCRUDViewModel>('https://localhost:7234/produto/post', produto);
  }

  Get() : Observable<Produto[]>{
    return this.http.get<Produto[]>('https://localhost:7234/produto/get')
  }

  Remove(produto : Produto):Observable<ResultadoCRUDViewModel>{
    return this.http.delete<ResultadoCRUDViewModel>(`https://localhost:7234/produto/delete/${produto.id}`);
  }

  Atualizar(Object : FormData){
    return this.http.put<ResultadoCRUDViewModel>('https://localhost:7234/produto/put',Object);
  }

  AtualizarIMG(Object : FormData){
    return this.http.put<ResultadoCRUDViewModel>('https://localhost:7234/produto/putimg',Object);
  }

}
