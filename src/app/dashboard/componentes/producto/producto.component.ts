import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'app/dashboard/servicio/servicio.service';
import { ListaProductos } from 'app/dashboard/modelo/lista-productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  listaProductos: ListaProductos;

  constructor(private _service: ServicioService) { }

  ngOnInit() {
    this.consultarNumeroDeProductosVendidosPorAnio();
  }

  consultarNumeroDeProductosVendidosPorAnio() {
    this._service.consultarNumeroDeProductosVendidosPorAnio().subscribe((res) => {
      this.listaProductos = res;
    });
  }

}
