import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import{NewsItem}from'../../objects/news-item';

/**
 * Generated class for the Feeds page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class Feeds {

Item:NewsItem[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
     this.Item = [];

 this.navParams.get("Item").subscribe(result => this.Item = result);
  }
  check(input:string,item:NewsItem):boolean{
    return item.getDescription().includes(input)||item.getTitle().includes(input)||item.getAuthor().includes(input);
  }
filter(input:string):void{
    console.log("in FILTER");
    console.log(this.Item);
    
if(input==null||input.trim()==""){
   this.navParams.get("Item").subscribe(result => this.Item = result);
}
else{

  console.log(this.Item);
 this.Item = this.Item.filter(item=>{
        return this.check(input,item);
      });

}
}

itemIsSelected(event, feeds:string):void{

   var url = feeds;
   var target = '_self';
  
  this.iab.create(url,target);
//const Appbrowser = this.iab.create(url);
//Appbrowser.show

  }

}
