import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ FeedPage}from'../feed/feed';


/*
  Generated class for the NwChannel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'nw-channel',
  templateUrl: 'nw-channel.html'
})
export class NwChannelPage {
@Input()Item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NwChannelPage');
  }

  itemIsSelected(event, feeds) {
    this.navCtrl.push(FeedPage, {
      Item: feeds
    });
  }
}
