import { Component, OnInit } from '@angular/core';
import { AuthService, User1 } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  usuarios: User1[] = [];
  constructor( private auth: AuthService,
                private router: Router) {}

  ngOnInit() {
    this.auth.getUsers().subscribe( data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  authProccess( event ) {
    event.preventDefault();
    const target = event.target;
    const correo = target.querySelector('#correo').value;
    const contrasena = target.querySelector('#contrasena').value;

    this.auth.authentication(correo, contrasena).subscribe(data => {
      console.log('login successful...');
      this.router.navigate(['/dashboard']);
    });
  }
}
