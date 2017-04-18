import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Charts}from'../charts/charts';
import{Categories} from'../categories/categories';
/**
 * Generated class for the ChannelList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-list',
  templateUrl: 'channel-list.html',
})
export class ChannelList {
     Items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,storage: Storage) {
          storage.get('jsonobj').then((val) => {
         this.Items=JSON.parse(val);
               this.Items=this.Items.news; 
      
      });
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelList');
  }

 buttonSelected(event, channels):void{
    this.navCtrl.push(Charts, {
      Item: channels
    });
  }
  itemIsSelected(event, feeds):void{
    this.navCtrl.push(Categories, {
      Item: feeds
    });
  }
  itemSelected(event, feeds):void{
    this.navCtrl.push(Charts, {
      Item: feeds
    });
  }

}
