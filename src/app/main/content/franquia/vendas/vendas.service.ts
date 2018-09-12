import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { LUX_API } from '../../../../app.api';
import { MenuItem } from './menu-item/menu-item.model';


@Injectable()
export class VendasService {

  constructor(private http: HttpClient) { }

  getDados(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/pontuacao/${id}`)
  }

  getVml(id:any, nivel:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/calcvml/${id},${nivel}`)
  }

  menuOfVendas(id:any): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${LUX_API}/produtos/${id}`)
      
  }
  menuOfLinha(): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/linhas`)
      
  }
  menuOfProdutos(id:any): Observable<any[]>{
    return this.http.get<any[]>(`${LUX_API}/produtosln/${id}`)
      
  }
}