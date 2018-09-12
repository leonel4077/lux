import { Faturas } from './faturas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';

@Injectable()
export class FaturasService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<Faturas>{
    return this.http.get<Faturas>(`${LUX_API}/faturas/${id}`);
  }
  

}