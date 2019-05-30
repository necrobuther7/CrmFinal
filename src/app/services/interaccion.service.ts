import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interaccion } from '../Models/Interaccion';
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
 
  private apiUrl = 'https://54.224.238.170:8443/interaccion';
 
  constructor( private HttpClient: HttpClient) { }
 
   nuevaInteraccion(interaccion:Interaccion){
    const  body= JSON.stringify(interaccion);
    }  
    
    /** Post: add a new pqrs to the database */
    CrearInteraccion(id, interaccion):Observable<Interaccion[]>{
      return this.HttpClient.post<Interaccion[]>(this.apiUrl + '/crear/' + id, JSON.stringify(interaccion));
  }

  ConsultarInteraccion():Observable<Interaccion[]>{
    return this.HttpClient.get<Interaccion[]>(this.apiUrl + '/consultar');
}

ConsultarInteraccionId(id):Observable<Interaccion[]>{
  return this.HttpClient.get<Interaccion[]>(this.apiUrl + '/consultar/' + id);
}

ActualizarInteraccion(id, interaccion):Observable<Interaccion[]>{
return this.HttpClient.put<Interaccion[]>(this.apiUrl + '/actualizar/' + id, JSON.stringify(interaccion));
}

EliminaInteraccion(id):Observable<Interaccion[]>{
return this.HttpClient.delete<Interaccion[]>(this.apiUrl + '/borrar/' + id);
}

  
    //guardar()
}