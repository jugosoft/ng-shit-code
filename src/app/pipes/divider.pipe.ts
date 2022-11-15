import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divider'
})
export class DividerPipe implements PipeTransform {
  transform(value: number, divider: number): number {
    if (divider === 0) {
      return Infinity;
    }
    return value /= divider;
  }
}
