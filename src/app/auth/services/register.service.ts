import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LUX_API } from '../../app.api';
import { ResponseType } from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(registerForm: any):Observable<any>{
    return this.http.post<any>(`${LUX_API}/adduser`, registerForm);
  }

}
