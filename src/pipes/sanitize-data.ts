import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SanitizeData pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'sanitizer',
})
export class SanitizeData implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    value = value + ''; // make sure it's a string
    value = value.replace(/<img[^>]*>/g,"");
    value = value.replace(/<a[^>]*>/g,"");
value= value.replace(/&lt;br&gt;/g,'\n');
value =value.replace("<br>",'\n');
value =value.replace(/(<([^>]+)>)/ig,'');
    return value;
  }
}
