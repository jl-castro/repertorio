import { Pipe, PipeTransform } from '@angular/core';
import { BinRecord } from "../models/bin.interface";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(list: BinRecord[], filterValue: string): BinRecord[] {
    if (!filterValue) return list;
    return list.filter(elem => elem.artist.toLowerCase().includes(filterValue.toLowerCase()) ||
      elem.songName.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
