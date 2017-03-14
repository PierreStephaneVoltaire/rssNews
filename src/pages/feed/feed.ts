import { Component,Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {NewsService}from'../../providers/news-service';
/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',



})
export class FeedPage {
Item:any;
  constructor(@Inject(NewsService)public navCtrl: NavController, public navParams: NavParams,private news:NewsService ) {
    this.Item=this.navParams.get("Item");
    console.log("in feed",this.Item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  stuff(feeds):void{
      //set the rss feed url
this.news.setUrl(feeds);
//test to see if i can actually get the rss
    console.log(this.news.getUrl())

  }
}
