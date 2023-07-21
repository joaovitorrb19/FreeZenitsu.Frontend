import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoCRUDViewModel } from 'src/app/interfaces/resultado-crudview-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  headers = new HttpHeaders({'Content-Type' : 'text/json'})

  constructor(private http : HttpClient) { }

  Post(body:Object):Observable<ResultadoCRUDViewModel>{
    return this.http.post<ResultadoCRUDViewModel>('https://localhost:7234/usuario/cadastro',body)
  }

}
