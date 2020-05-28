import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) public locale: string) {}
  transform(date: number, ...args: unknown[]): unknown {
    const dateObj = new Date(date);
    const formatedDate = formatDate(dateObj, 'yyyy-MM-dd HH:mm', this.locale);
    return formatedDate;
  }
}
