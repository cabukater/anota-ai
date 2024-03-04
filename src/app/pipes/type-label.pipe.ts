import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeLabel'
})
export class TypeLabelPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case "1":
        return 'Paisagem';
      case "2":
        return 'Flor';
      case "3":
        return 'Pizza';
      default:
        return 'Desconhecido';
    }
  }
}
