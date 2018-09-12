import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';


@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDb(id:any): Observable<any>{
    return this.http.get<any>(`${LUX_API}/rede/${id}`)
  }
  getDados(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/pontuacao/${id}`)
  }
}