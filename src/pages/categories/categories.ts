import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Feeds}from'../feeds/feeds';
import{HttpNews}from'../../providers/http-news';

/**
 * Generated class for the Categories page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class Categories {
Item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private news:HttpNews) {
      this.navCtrl=navCtrl;
    this.Item=this.navParams.get("Item");
  }

  ionViewDidLoad() {
   
  }
getNewsArticles(feeds):void{
   
    this.news.setUrl(feeds);
    let links=this.news.getUrl();
  this.navCtrl.push(Feeds, {
      Item: links
    });
  }

}
