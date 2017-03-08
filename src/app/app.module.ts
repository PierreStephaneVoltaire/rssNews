import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Localstorage }from '../providers/localstorage';
import{NwListPage}from'../pages/nw-list/nw-list';
import{NwChannelPage}from'../pages/nw-channel/nw-channel';
import{FeedPage}from'../pages/feed/feed'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NwListPage,
    NwChannelPage,
    FeedPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NwListPage,
    NwChannelPage,
    FeedPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Localstorage]
})
export class AppModule {}
