import { Injectable } from '@angular/core';
import { Http,Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import'xml-to-json';
import{load}from'rss-to-json';

/*
  Generated class for the NewsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {
url:string;
  constructor(private jsonp: Jsonp,public http:Http) {
    console.log('Hello NewsService Provider');
  }
setUrl(url:string){this.url="https://crossorigin.me/"+url;}
getUrl(){

  return this.http
             .get(this.url)
            .map(response => response.text())
             .subscribe(val => console.log(val));
}

}
