import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { SystemUser } from '../Models/system-user';

/* @Injectable({
  providedIn: 'root'
}) */

const token = localStorage.getItem('currentUser');
const httpOptions1 = {
  headers: new HttpHeaders({
    'x-auth-token': token,
  }),
  responseType: 'json' as any
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'json' as any
}

@Injectable()
export class AuthService {
    // private uri = 'http://localhost:3000';
    private uri = 'https://finalprojectapi.herokuapp.com';

    constructor ( private http: HttpClient ) {
      console.log('Auth state: active');
    }

    getUsers (): Observable<User1[]> {
      console.log('data from users...');
      return this.http.get<User1[]>(this.uri + '/api/user', httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
    // "node": "6.11.1",
    authentication(correo: string, contrasena: string): Observable<any> {
      return this.http.post<any>(this.uri + '/api/auth', {correo, contrasena}, httpOptions)
        .pipe(map(user => {
          if (user) {
            console.log('auth response: ' + user.token);
            localStorage.setItem('currentUser', user.token);
          } else if (user === undefined) {
            console.log('auth failed');
            localStorage.removeItem('currentUser');
          }
        })
      )
    }

     // Error handling
    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
}

export interface User1 {
  idUser: Number;
  correo: String;
  idTipoUsuario: Number;
  estado: Boolean;
  nombres: String;
  apellidos: String;
  identificacion: Number;
  tipousuario: {
    idTipoUsuario: Number;
    tipoUsuario: String;
  };
}
