import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notFoundPage',
})
export class NotFoundPagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
