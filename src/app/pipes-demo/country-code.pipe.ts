import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=="US")
      return  "+01 " + value;
    else if(args=="IND"){
      return "+91 " + value; 
    }else{
      return value;
    }
  }

}
