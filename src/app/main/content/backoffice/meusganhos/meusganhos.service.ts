import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';

@Injectable()
export class MeusganhosService {

  constructor(private http: HttpClient) { }

  getDados(id:any, bonus:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/ganhos/${id},${bonus}`);
  }
  
  getBonus(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/ganhos2/${id}`);
  }

}

