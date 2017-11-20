import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(myArray: any[], properties: any, value: any): any {
    if (!myArray || !value || !properties) return myArray;
    var newArr = myArray.filter(function (val) {
      var found = -1;
      for (var prop in properties) {
        var controlVal = val[properties[prop]].toLowerCase();
        found = controlVal.indexOf(value.toLowerCase());
        if (found >= 0) {
          return true;
        }
      }
    });
    return newArr;
  }

}
