import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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
getFeed(): Observable<Object[]> {
  console.log("in get");
   return this.http.get(this.url)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

 private extractData(res: Response) {
   console.log("in extract data",res);
   let body = res.json();
   return body.data || { };
 }

 ParseXML(val):any
 {
      let parser=new DOMParser();
    let     xmlDoc=parser.parseFromString(val,"text/xml");
 return xmlDoc ;
 }



 private handleError (error: Response | any) {
   // In a real world app, you might use a remote logging infrastructure
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error(errMsg);
   return Observable.throw(errMsg);
 }
}
