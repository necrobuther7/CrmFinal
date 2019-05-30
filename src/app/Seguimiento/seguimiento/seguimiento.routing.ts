import { Routes } from '@angular/router';
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { SeguimientoComponent } from '../../seguimiento/seguimiento/seguimiento.component';
import { RegistrarinteraccionComponent } from '../../seguimiento/registrarinteraccion/registrarinteraccion.component';
import { RegistrarpqrsComponent } from '../../seguimiento/registrarpqrs/registrarpqrs.component';
import { CrearinteraccionComponent } from '../../seguimiento/crearinteraccion/crearinteraccion.component';
import { CrearpqrsComponent } from '../../seguimiento/crearpqrs/crearpqrs.component';
import { IconsComponent } from '../../icons/icons.component';

export const SeguimientoRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'seguimiento',     component: SeguimientoComponent },
    { path: 'crearpqrs',     component: CrearpqrsComponent },
    { path: 'crearinteraccion',     component: CrearinteraccionComponent },
    { path: 'registrarpqrs',     component: RegistrarpqrsComponent },
    { path: 'registrarinteraccion',     component: RegistrarinteraccionComponent },
    { path: 'icons',          component: IconsComponent },
];
