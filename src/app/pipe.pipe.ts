import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args): any {
    // console.log(value,args);
    if(args[0]==null)
    {
   return value;
    }else if(args[0]!=null){
      value =value.filter(result=> result.name.includes(args[0]));
     return value;
  }
  }
}
