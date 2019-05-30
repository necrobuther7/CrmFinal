import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { EditarComponent } from '../../table-list/editar/editar.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SeguimientoComponent } from '../../seguimiento/seguimiento/seguimiento.component';
import { RegistrarinteraccionComponent } from '../../seguimiento/registrarinteraccion/registrarinteraccion.component';
import { RegistrarpqrsComponent } from '../../seguimiento/registrarpqrs/registrarpqrs.component';
import { CrearinteraccionComponent } from '../../seguimiento/crearinteraccion/crearinteraccion.component';
import { CrearpqrsComponent } from '../../seguimiento/crearpqrs/crearpqrs.component';

// personalizadas
import { LoginComponent } from '../../login/login.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ClienteComponent } from 'app/dashboard/componentes/cliente/cliente.component';
import { VentaComponent } from 'app/dashboard/componentes/venta/venta.component';
import { ProductoComponent } from 'app/dashboard/componentes/producto/producto.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    EditarComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    ClienteComponent,
    VentaComponent,
    ProductoComponent,
    SeguimientoComponent,
    RegistrarinteraccionComponent,
    RegistrarpqrsComponent,
    CrearinteraccionComponent,
    CrearpqrsComponent,
  ]
})

export class AdminLayoutModule {}
