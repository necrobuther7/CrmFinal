import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'app/dashboard/servicio/servicio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private _service : ServicioService, private _http: HttpClient) { }

  ngOnInit() {
    this.consultarIndiceDeFidelizacion();
  }

  private indiceDeFidelizacion: any = null;
  consultarIndiceDeFidelizacion() {
    this._service.consultarIndideDeFidelizacion().subscribe((res) => {
      this.indiceDeFidelizacion = res;
    });
  }

}
