import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(value: any, searchValue: string): any {

    if (!searchValue) return value;
    return value.filter((v: { nom: string; dev: string, note: number; }) => v.nom.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.dev.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.note.toString().indexOf(searchValue.toString()) > -1)

  }

}