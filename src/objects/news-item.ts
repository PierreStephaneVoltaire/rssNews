
export class NewsItem {
  constructor(){
    this.title=null;
    this.link=null;
    this.pubDate=null;
    this.author=null;
    this.category=null;
    this.description=null;
  }
private title:string;
private link:string;
private pubDate:string;
private author:string;
private category:string;
private description:string;

public setTitle(title:string):void{this.title=title;}
public setLink(link:string):void{this.link=link;}
public setPubDate(pubDate:string):void{this.pubDate=pubDate;}
public setAuthor(author:string):void{this.author=author;}
public setCategory(category:string):void{this.category=category;}
public setDescription(description:string):void{this.description=description;}


public getTitle():string{return this.title;}
public getLink():string{return this.link;}
public getPubDate():string{return this.pubDate;}
public getAuthor():string{return this.author;}
public getCategory():string{return this.category;}
public getDescription():string{return this.description;}

}
