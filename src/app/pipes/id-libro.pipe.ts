import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idLibro'
})
export class IdLibroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let result: string;
    result = "\"" + value + "\"";
    return result;
  }

}
