import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value >= 3600) {
      return `${moment.utc(value * 1000).format('h')}h ${moment.utc(value * 1000).format('mm')}m`;
    } else {
      return `${moment.utc(value * 1000).format('mm')}m`;
    }
  }

}
