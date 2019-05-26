import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

// personalizados
import { LoginComponent } from '../../login/login.component';

// protección a rutas
import { GuardsGeneralGuard } from '../../guards/guards-general.guard';

export const AdminLayoutRoutes: Routes = [
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
    { path: 'login',          component: LoginComponent,            },
    { path: 'dashboard',      component: DashboardComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'user-profile',   component: UserProfileComponent,      canActivate: [GuardsGeneralGuard] },
    { path: 'table-list',     component: TableListComponent,        canActivate: [GuardsGeneralGuard] },
    { path: 'typography',     component: TypographyComponent,       canActivate: [GuardsGeneralGuard] },
    { path: 'icons',          component: IconsComponent,            canActivate: [GuardsGeneralGuard] },
    { path: 'maps',           component: MapsComponent,             canActivate: [GuardsGeneralGuard] },
    { path: 'notifications',  component: NotificationsComponent,    canActivate: [GuardsGeneralGuard] },
    { path: 'upgrade',        component: UpgradeComponent,          canActivate: [GuardsGeneralGuard] },
];
