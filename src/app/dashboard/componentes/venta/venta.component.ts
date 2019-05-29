import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MontosVendidos } from 'app/dashboard/modelo/montos-vendidos';
import { ServicioService } from 'app/dashboard/servicio/servicio.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  listaMontosVendidos: MontosVendidos;

  constructor(private _htto: HttpClient, private _service: ServicioService) { }

  ngOnInit() {
    this.consultarMontosVendidosPorMesPorVendedor();
  }

  consultarMontosVendidosPorMesPorVendedor(){
    this._service.consultarMontosVendidosPorMesPorVendedor().subscribe((res)  => {
      this.listaMontosVendidos = res;
    });
  }
}
