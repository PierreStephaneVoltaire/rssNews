import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ChannelList} from'../pages/channel-list/channel-list';
import { ChartsModule } from 'ng2-charts';
import {Categories}from'../pages/categories/categories';
import{Feeds}from'../pages/feeds/feeds';
import{Charts}from'../pages/charts/charts';
import{SanitizeData}from'../pipes/sanitize-data';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import{HttpNews}from'../providers/http-news';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChannelList,
    Categories,
    Charts,
    SanitizeData,
    Feeds 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
    ChartsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChannelList,
    Categories,
    Charts,
    Feeds
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpNews,
    InAppBrowser
  ]
})
export class AppModule {}
