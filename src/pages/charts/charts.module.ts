import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Charts } from './charts';

@NgModule({
  declarations: [
    Charts,
  ],
  imports: [
    IonicPageModule.forChild(Charts),
  ],
  exports: [
    Charts
  ]
})
export class ChartsModule {}
