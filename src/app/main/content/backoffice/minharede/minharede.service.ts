import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';
import { Usuario } from './minharede.model';

@Injectable()
export class MinharedeService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<Usuario>{
    return this.http.get<Usuario>(`${LUX_API}/buscarede/${id}`);
  }

  getDb(id:any): Observable<any>{
    return this.http.get<any>(`${LUX_API}/rede/${id}`)
  }
}