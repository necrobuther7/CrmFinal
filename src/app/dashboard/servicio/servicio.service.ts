import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url: string = "https://crm-kpi.herokuapp.com/adaptador/";
  private _url: string = "https://kpi-crm.herokuapp.com/adaptador/";

  constructor(private _http: HttpClient) { }

  consultarCantidadDeClientesPorZona(){
    return this._http.get<any>(this._url + "consultarCantidadDeClientesPorZona");
  }

  consultarNumeroDeProductosVendidosPorAnio(){
    return this._http.get<any>(this.url + "consultarNumeroDeProductosVendidosPorAnio");
  }

}
