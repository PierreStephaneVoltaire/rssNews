import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Feeds } from './feeds';

@NgModule({
  declarations: [
    Feeds,
  ],
  imports: [
    IonicPageModule.forChild(Feeds),
  ],
  exports: [
    Feeds
  ]
})
export class FeedsModule {}
