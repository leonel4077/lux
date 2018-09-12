import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';
import { Vml } from './vml.model';

@Injectable()
export class VmlService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<Vml>{
    return this.http.get<Vml>(`${LUX_API}/vml/${id}`);
  }
  

}