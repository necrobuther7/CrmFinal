import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url: string = "http://localhost:8080/adaptador/";

  constructor(private _http: HttpClient) { }

  consultarIndideDeFidelizacion(){
    return this._http.get(this.url + "consultarElIndiceDeFidelizacion");
  }

  consultarMontosVendidosPorMesPorVendedor(){
    return this._http.get<any>(this.url + "consultarMontosVendidosPorMesPorVendedor")
  }
}
