import { Component, OnInit } from '@angular/core';
import { AuthService, User1 } from '../services/auth.service';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error = '';
  usuarios: User1 [] = [];
  constructor( private auth: AuthService,
                private router: Router,
                private toast: Toaster
              ) { }

  ngOnInit() { }

  authProccess( event ) {
    event.preventDefault();
    const target = event.target;
    const correo = target.querySelector('#correo').value;
    const contrasena = target.querySelector('#contrasena').value;

    if (correo === '' || correo === null) {
      this.showNotification('Ingrese el correo', 'Datos faltantes...', 3000, 'warning');
      document.getElementById('correo').focus();
      return;
    } else if (contrasena === '' || contrasena === null) {
      this.showNotification('Ingrese la contraseña', 'Datos faltantes...', 3000, 'warning');
      document.getElementById('contrasena').focus();
      return;
    }

    this.auth.authentication(correo, contrasena)
    .pipe(first())
    .subscribe(
      data => {
        this.showNotification('Espere por favor, Ingresando...', 'Bienvenido.', 3000, 'success');
        this.auth.setSession(data.user);
        this.auth.setSessionToken(data.token);
        // consulta al api para traer los datos
        this.auth.getUsers().subscribe( data1 => {
          this.usuarios = data1;
          console.log(this.usuarios.result);
        });
        // espera de 3.5 milisegundos para inicio de sesión
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 3500);
      },
      error => {
        this.error = error;
        this.showNotification('Por favor, verifique sus credenciales e Intente de nuevo !', 'Algo va mal...', 3000, 'danger');
      });
  }

  showNotification(message: string, caption: string, duration: number, type: string) {
    this.toast.open({
      text: message,
      caption: caption,
      duration: duration,
      type: type
    });
  }
}
