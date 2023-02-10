import { Routes } from '@angular/router';
import { IotComponent } from './components/iot/iot.component';

export const IOT_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'iot',
      pathMatch: 'full'
    },
    {
      path: 'iot',
      component: IotComponent
    }
];
