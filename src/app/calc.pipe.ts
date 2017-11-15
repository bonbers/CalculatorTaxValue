import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

// declare let _: any;

@Pipe({
  name: 'uniqFilter',
    pure: false
})

export class CalcPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return _.uniqBy(items, args);
    }
}



