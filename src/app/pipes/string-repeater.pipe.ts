import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringRepeater'
})
export class StringRepeaterPipe implements PipeTransform {
  transform(value: string): string {
    return value.repeat(5);
  }
}
