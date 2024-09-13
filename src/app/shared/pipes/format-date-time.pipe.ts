import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {

  transform(value: string | Date, format: 'date' | 'time' | 'both' = 'date'): string {
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    const formattedDate = ('0' + date.getDate()).slice(-2) + '/' +
                          ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
                          date.getFullYear();

    const formattedTime = ('0' + date.getHours()).slice(-2) + ':' +
                          ('0' + date.getMinutes()).slice(-2) + ':' +
                          ('0' + date.getSeconds()).slice(-2);

    switch (format) {
      case 'date':
        return formattedDate;
      case 'time':
        return formattedTime;
      case 'both':
        return `${formattedDate} ${formattedTime}`;
      default:
        return 'Invalid format';
    }
  }
}
