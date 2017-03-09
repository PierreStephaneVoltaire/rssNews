import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Item=this.navParams.get("Item");
    console.log("in feed",this.Item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
