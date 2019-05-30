import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from 'app/dashboard/servicio/servicio.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {


  constructor(private _htto: HttpClient, private _service: ServicioService) { }

  ngOnInit() {

  }

}
