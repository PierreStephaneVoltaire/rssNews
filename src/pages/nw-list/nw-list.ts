import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{Localstorage}from '../../providers/localstorage';



/*
  Generated class for the NwList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'nw-list',
  templateUrl: 'nw-list.html'
})
export class NwListPage {
@Input() Items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private local:Localstorage) {
    this.local.check();
    this.Items=JSON.parse(this.local.get()).news;
    console.log("list components's obj",this.Items);
      console.log(this.Items[0].name);
        console.log(this.Items[0].rss);
      console.log("list components's obj",this.Items.name);
}

  ionViewDidLoad() {

  }

}
