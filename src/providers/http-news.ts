import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {NewsItem}from'../objects/news-item';
import * as $ from 'jquery';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the HttpNews provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpNews {
  
url:string;
  constructor(public http: Http) {
    console.log('Hello HttpNews Provider');
  }
setUrl(url:string){this.url="https://cors-anywhere.herokuapp.com/"+url;}
getUrl():Observable<Object> {
  return this.http
             .get(this.url)
            .map(response => this.parseFeed(response.text()));
}
parseFeed(feed:string):any[]{
  let feeds=[];
    let xmlfeed=$.parseXML(feed);
    $(xmlfeed).find('item').each(function(){
      let newsItem=new NewsItem;
          newsItem.setTitle($(this).find('title').text());
        newsItem.setLink($(this).find('link').text());
          newsItem.setPubDate($(this).find('pubDate').text());
              newsItem.setAuthor($(this).find('author').text());
              newsItem.setCategory($(this).find('category').text());
                newsItem.setDescription($(this).find('description').text());
              feeds.push(newsItem);
    }  );
    console.log("in the parsing method of the news service",feeds)
    return feeds;
}

}
