import { Pipe, PipeTransform } from '@angular/core';
import { BinRecord } from "../models/bin.interface";

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(list: BinRecord[], category: string): BinRecord[] {
    if (!category || category === 'Todos') return list;
    return list.filter(elem => elem.category === category);
  }
}
