import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { ResultadoCRUDViewModel } from 'src/app/interfaces/resultado-crudview-model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaserviceService {

  
  constructor(private http : HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'text/json'
    })
  }

  getCategoria() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://localhost:7234/categoria/get');
  }

  postCategoria(nomeCategoria : string) : Observable<ResultadoCRUDViewModel>{
    return this.http.post<ResultadoCRUDViewModel>('https://localhost:7234/categoria/post',{'nome':nomeCategoria},this.headers);
  }

  deleteCategoria(corpo : object) : Observable<ResultadoCRUDViewModel>{
    return this.http.delete<ResultadoCRUDViewModel>('https://localhost:7234/categoria/delete',{headers:this.headers.headers,body:corpo});
  }

  updateCategoria(corpo:object) : Observable<ResultadoCRUDViewModel>{
    return this.http.put<ResultadoCRUDViewModel>('https://localhost:7234/categoria/put',corpo,{headers:this.headers.headers});
  }
}
