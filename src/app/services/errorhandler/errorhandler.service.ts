import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  error = new Subject<HttpErrorResponse>();  

  constructor() { }

  errorHandler(error : HttpErrorResponse){
    this.error.next(error)
  } 

  getError() : Observable<HttpErrorResponse>{
    return this.error.asObservable()
  }
}
