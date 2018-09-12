
import { Router } from '@angular/router';
import { LUX_API } from '../../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { User } from '../login/user.model';

@Injectable()
export class AuthService {

  private usuarioAutenticado:boolean = false;

  constructor(private http: HttpClient, private router : Router) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials : {email:string, password:string}):Observable<boolean>{
    return this.http.post<any>(`${LUX_API}/auth/login`, credentials)
      .do(data =>{
        localStorage.setItem('token',data.token);
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        this.usuarioAutenticado = true;
      });
  }

  logout() : void {
    this.http.get(`${LUX_API}/auth/logout`).subscribe(resp =>{
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }
  
  getUser() : User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  getDados(id:any): Observable<any>{
    return this.http.get<any>(`${LUX_API}/cad/${id}`)
  }

  setUser() : Promise<boolean>{
    return this.http.get<any>(`${LUX_API}/auth/me`).toPromise()
      .then(data=>{
        if(data.user){
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        }
        return true;
      });
  }

}
