import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pqr } from '../../Models/Pqr';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Estado } from '../../Models/Estado';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

    pqr :Pqr= new Pqr();
    Url='https://54.224.238.170:8443';

    estados: Estado[] = [
    {id_estado: 1, estado: 'Activo'},
    {id_estado: 2, estado: 'Inactivo'},
    {id_estado: 3, estado: 'Suspendido'},
    {id_estado: 4, estado: 'Finalizado'}
  ];

  constructor(private router:Router,private http: HttpClient ) { }

  ngOnInit() {
      this.editar();
  }

  editar(){
      let id=localStorage.getItem("id");
      this.http.get<Pqr>(this.Url+"/pqr/consultar/"+id)
      .subscribe(data=>{
        this.pqr=data;
      })
  }

  regresar(){
      this.router.navigate(["table-list"]);
  }

  actualizar(pqr: Pqr){
   this.http.put<Pqr>(this.Url+"/pqr/actualizar/"+pqr.id_pqr, pqr)
    .subscribe(data=>{
        this.pqr=data;
        localStorage.removeItem('id');
        this.router.navigate(["table-list"]);
    })
  }
}
