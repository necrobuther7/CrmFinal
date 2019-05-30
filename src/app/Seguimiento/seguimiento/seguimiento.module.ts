import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { RegistrarinteraccionComponent } from '../../seguimiento/registrarinteraccion/registrarinteraccion.component';
import { RegistrarpqrsComponent } from '../../seguimiento/registrarpqrs/registrarpqrs.component';
import { CrearinteraccionComponent } from '../../seguimiento/crearinteraccion/crearinteraccion.component';
import { CrearpqrsComponent } from '../../seguimiento/crearpqrs/crearpqrs.component';
import { SeguimientoComponent } from '../../seguimiento/seguimiento/seguimiento.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SeguimientoRoutes } from './seguimiento.routing';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SeguimientoRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [

  ]
})

export class AdminLayoutModule {}
