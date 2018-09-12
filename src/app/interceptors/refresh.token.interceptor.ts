import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { LUX_API } from '../app.api';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private injector : Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).catch((errorResponse: HttpErrorResponse) => {
      
      const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse.error;
      
      if (errorResponse.status === 401 && error.error === 'token_expired'){
        const http = this.injector.get(HttpClient);
        const token = localStorage.getItem('token');

        return http.post<any>(`${LUX_API}/auth/refresh`, {})
        .flatMap(data => {
          
          localStorage.setItem('token', data.token);
          const cloneResquest = request.clone({headers: request.headers.set('Authorization', `Bearer ${data.token}`)});

          return next.handle(cloneResquest);
        });

      }
      
      return Observable.throw(errorResponse);
      
    });
  }
}