import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, format: string): string {
    let duration: number;
    let hour: number;

    if (format === 'seconds') {
      duration = value * 1000;
      hour = 3600;
    } else if (format === 'minutes') {
      duration = value * 1000 * 60;
      hour = 60;
    }

    if (value >= hour) {
      return `${moment.utc(duration).format('h')}h ${moment.utc(duration).format('mm')}m`;
    } else {
      return `${moment.utc(duration).format('mm')}m`;
    }
  }

}
