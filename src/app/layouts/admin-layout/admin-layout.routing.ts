import { Routes } from '@angular/router';

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

// personalizados
import { LoginComponent } from '../../login/login.component';
import { ClienteComponent } from 'app/dashboard/componentes/cliente/cliente.component';
import { ProductoComponent } from 'app/dashboard/componentes/producto/producto.component';
import { VentaComponent } from 'app/dashboard/componentes/venta/venta.component';

// protección a rutas
import { GuardsGeneralGuard } from '../../guards/guards-general.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent            },
    { path: 'dashboard',      component: DashboardComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'user-profile',   component: UserProfileComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'table-list',     component: TableListComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'editar',         component: EditarComponent,           canActivate: [GuardsGeneralGuard] },
    { path: 'typography',     component: TypographyComponent,       canActivate: [GuardsGeneralGuard] },
    { path: 'icons',          component: IconsComponent,            canActivate: [GuardsGeneralGuard] },
    { path: 'seguimiento',    component: SeguimientoComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'crearpqrs',      component: CrearpqrsComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'crearinteraccion',    component: CrearinteraccionComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'registrarinteraccion',    component: RegistrarinteraccionComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'registrarpqrs',    component: RegistrarpqrsComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'maps',           component: MapsComponent,             canActivate: [GuardsGeneralGuard] },
    { path: 'notifications',  component: NotificationsComponent,    canActivate: [GuardsGeneralGuard] },
    { path: 'upgrade',        component: UpgradeComponent,          canActivate: [GuardsGeneralGuard] },
    { path: 'clientekpi',     component: ClienteComponent,          canActivate: [GuardsGeneralGuard] },
    { path: 'productokpi',    component: ProductoComponent,         canActivate: [GuardsGeneralGuard] },
    { path: 'ventaskpi',      component: VentaComponent,            canActivate: [GuardsGeneralGuard] },
];
