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
    return item.getDescription().toUpperCase().includes(input)||item.getTitle().toUpperCase().includes(input)||item.getAuthor().toUpperCase().includes(input);
  }
filter(input:string):void{
    
    
if(input==null||input.trim()==""){
   this.navParams.get("Item").subscribe(result => this.Item = result);
}
else{

 this.Item = this.Item.filter(item=>{
        return this.check(input.toUpperCase(),item);
      });

}
}

itemIsSelected(event, feeds:string):void{

   var url = feeds;
   var target = '_blank';
  
  this.iab.create(url,target);

  }

}
