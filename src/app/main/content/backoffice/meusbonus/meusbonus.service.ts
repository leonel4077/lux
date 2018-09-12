import { Pagamentos } from './meusbonus.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';

@Injectable()
export class MeusbonusService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<Pagamentos>{
    return this.http.get<Pagamentos>(`${LUX_API}/meusbonus/${id}`);
  }
  

}
