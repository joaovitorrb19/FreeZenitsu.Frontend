import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ErrorhandlerService } from "../services/errorhandler/errorhandler.service";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Errorhandler implements HttpInterceptor{
    
    constructor(private errorHandlerService : ErrorhandlerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse) => {
                this.errorHandlerService.errorHandler(error)
                return throwError(error);
            })
        )

    }
}
