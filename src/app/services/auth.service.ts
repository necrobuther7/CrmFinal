import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class AuthService {

  token = localStorage.getItem('userK');
  httpOptions1 = {
    headers: new HttpHeaders({
      'x-auth-token': this.token,
    }),
    responseType: 'json' as any
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'json' as any
  }
  private uri = 'https://finalprojectapi.herokuapp.com';

    constructor ( private http: HttpClient ) {
      console.log('Auth state: active');
    }
    // obtain all user
    getUsers(): Observable<User1> {
      console.log('data from users...');
      return this.http.get<User1>(this.uri + '/api/user', this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    }
    // Authentication function
    authentication(correo: string, contrasena: string): Observable<any> {
      return this.http.post<any>(this.uri + '/api/auth', {correo, contrasena}, this.httpOptions)
        .pipe(map(user => user));
      }

    // Create Token and session
    setSession(user: string): void {
      const userLogin = JSON.stringify(user);
      localStorage.setItem('userL', userLogin);
    }

    setSessionToken(key: string): void {
      localStorage.setItem('userK', key);
    }

    getSession() {
      const userLogin = localStorage.getItem('userL');
      if (!isNullOrUndefined(userLogin)) {
        const user = JSON.parse(userLogin);
        return user;
      } else {
        return null;
      }
    }

    getSessionToken() {
      return localStorage.getItem('userK');
    }

    exitSession() {
      localStorage.removeItem('userL');
      localStorage.removeItem('userK');
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
