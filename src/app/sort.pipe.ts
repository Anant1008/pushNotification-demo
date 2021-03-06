import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    return value.sort((a,b)=>{
      if(a>b)
      {
        return -1;
      }
      else if(a<b)
      {
        return 1;
      }
      else 
      {
        return 0;
      }
    });
  }
}
