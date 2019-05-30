import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pqr } from '../Models/Pqr';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
}),
  reponseType: 'json' as any
}

@Injectable({
providedIn: 'root'
})
export class CrearinteraccionService {
 
  private apiUrl = 'https://54.224.238.170:8443/pqr';
 
  constructor( private HttpClient: HttpClient) { }
 
   nuevaPqrs(Pqrs:Pqr){
    const  body= JSON.stringify(Pqrs);
    }  
    
    /** Post: add a new pqrs to the database */
    CrearPqrs(id, pqrs):Observable<Pqr[]>{
      return this.HttpClient.post<Pqr[]>(this.apiUrl + '/crear/' + id, JSON.stringify(pqrs));
  }
  ConsultarPqrs():Observable<Pqr[]>{
    return this.HttpClient.get<Pqr[]>(this.apiUrl + '/consultar');
  }

  ConsultaPqrs(id){
    return this.HttpClient.get<Pqr[]>(this.apiUrl + '/consultar/' + id);
  }

  ActualizarPqrs(id, pqrs):Observable<Pqr[]>{
    return this.HttpClient.put<Pqr[]>(this.apiUrl + '/actualizar/' + id, JSON.stringify(pqrs));
  }

  EliminaPqrs(id, pqrs):Observable<Pqr[]>{
    return this.HttpClient.delete<Pqr[]>(this.apiUrl + '/borrar/' + id);
  }
    //guardar()
}
