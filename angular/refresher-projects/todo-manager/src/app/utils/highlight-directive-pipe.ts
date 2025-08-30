import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightDirective'
})
export class HighlightDirectivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
