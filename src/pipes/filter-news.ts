import { Pipe, PipeTransform } from '@angular/core';
import{NewsItem}from'../objects/news-item';
/**
 * Generated class for the FilterNews pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'filter-news',
  pure:false
})
export class FilterNews implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: NewsItem[], searchTerm: string): any[] {
    if(searchTerm){
       searchTerm = searchTerm.toUpperCase();
      return list.filter(item=>{
        return item[0].title.toUpperCase().indexOf(searchTerm)>=0;
      });
    }else{return list;}
    
   }
}

