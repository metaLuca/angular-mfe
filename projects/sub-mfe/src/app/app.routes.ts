import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'iot',
        loadChildren: () => import('./modules/iot/iot.module')
            .then(m => m.IoTModule)
    }
];
