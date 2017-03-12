import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


export class FeedItem {
  description: string;
  link: string;
  title: string;

  constructor(description: string, link: string, title: string) {
    this.description = description;
    this.link = link;
    this.title = title;
  }
}

export class Feed {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
@Injectable()
export class NewsService {
feed:any;
url:string;
  constructor(public http: Http) {

    console.log('Hello NewsService Provider');
  }
setUrl(Feedurl:string){
    this.url=Feedurl;
    console.log("in service",this.url);
}
getFeed(){
let articles=[];
return this.http.get(this.url)
.map(data=>data.json()['query']['result'])
.map((res)=>{
  if(res==null){return articles;}
let objects=res['item'];
 for (let i = 0; i < objects.length; i++) {
 let item = objects[i];
let newFeedItem = new FeedItem(item.description, item.link, item.title);
 articles.push(newFeedItem);
 }

 }
).subscribe(res => {
      articles = res;
     return articles});

  }

 private extractData(res: Response) {
   console.log("i",res);
   let body = res.text();
   console.log(body);
   return body;
 }

 ParseXML(val):any
 {
      let parser=new DOMParser();
    let     xmlDoc=parser.parseFromString(val,"text/xml");
 return xmlDoc ;
 }



 private handleError (error: Response | any) {
  console.log("didn't work");
 }
}
