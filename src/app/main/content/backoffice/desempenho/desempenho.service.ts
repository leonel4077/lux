import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';


@Injectable()
export class DesempenhoService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/pontuacao/${id}`)
  }

  getVml(id:any, nivel:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/calcvml/${id},${nivel}`)
  }
}