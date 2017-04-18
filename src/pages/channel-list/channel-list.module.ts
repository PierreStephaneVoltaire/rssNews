import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelList } from './channel-list';

@NgModule({
  declarations: [
    ChannelList,
  ],
  imports: [
    IonicPageModule.forChild(ChannelList),
  ],
  exports: [
    ChannelList
  ]
})
export class ChannelListModule {}
