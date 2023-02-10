import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IotComponent} from './components/iot/iot.component';
import {IOT_ROUTES} from './iot.routes';

@NgModule({
  declarations: [
    IotComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IOT_ROUTES),
  ]
})
export class IoTModule {
}
