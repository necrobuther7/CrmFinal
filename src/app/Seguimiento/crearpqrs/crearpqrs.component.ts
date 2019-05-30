import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForm } from "@angular/forms";
//import { Pqr } from "../../Model/Pqr";
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { qrsService } from '../../services/pqrs.service';
import { log } from 'util';
//import 'rxsj/Rx';

@Component({
  selector: 'app-crearpqrs',
  templateUrl: './crearpqrs.component.html',
})
export class CrearpqrsComponent implements OnInit {

  Pqrs: pqrs = {
    id_pqr: 0,
    tipo_pqr: "",
    fecha_pqr: "",
    id_cliente: "",
    estado_pqr: "",
    id_medio_comunicacion: "",
    descripcion: ""
  }

  // private crearPqrsService:PqrsService
  constructor() { }

  ngOnInit() {
  }
     
    guardar(){
    //     this.crearPqrsService.CrearPqrs(Pqrs)
    //      .subcribe(data=>{
    //       this.router.navigate(['/heroe',data.id_pqr])
    //      },
    //      error=> console.error(error));
    }
  
}