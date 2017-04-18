import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
/**
 * Generated class for the Charts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class Charts {
  
  Item:any;
 chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
     scaleOverride: true,
     scaleStartValue: 0
  };
chartLabels: string[] ;
  chartType: string ='pie';
  chartLegend: boolean = true;
chartData: any[] ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.navCtrl=navCtrl;
    this.Item=this.navParams.get("Item");
    let arrOfObj:any[]=$.makeArray(this.Item);
let temparr:any[]=[];
let tempDataArr:number[]=[];
let tempFeedArr:number[]=[];
    $.each(arrOfObj,function(index,value){
let temp=0;
temparr.push(value.name);
tempDataArr.push(value.rss.length);
$.each(value.rss,function(index,rss){
temp+=rss.feed.length;

});
tempFeedArr.push(temp);
});
 temparr.push("");
tempDataArr.push(0);
console.log(temparr);
console.log(tempDataArr);
    this.chartLabels =$.makeArray(temparr);
    this.chartData= [
    { data: tempDataArr, label: 'Number of cactegories'

 }, { data: tempFeedArr, label:'number of feeds'

 }

  ];       
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Charts');
  }

}
