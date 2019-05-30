import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'app/dashboard/servicio/servicio.service';
import { ClientesZona } from 'app/dashboard/modelo/clientes-zona';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private _service : ServicioService) { }

  ngOnInit() {
    this.consultarCantidadDeClientesPorZona();
  }

  clientesZona: ClientesZona;

  consultarCantidadDeClientesPorZona() {
    this._service.consultarCantidadDeClientesPorZona().subscribe((res) => {
      this.clientesZona = res;
    });
  }

}
