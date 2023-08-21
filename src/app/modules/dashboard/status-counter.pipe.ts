import { Pipe, PipeTransform } from '@angular/core';
import { ITable, TableStatus } from 'src/app/model/table.interface';

@Pipe({
  name: 'statusCounter'
})
export class StatusCounterPipe implements PipeTransform {

  transform(tables: ITable[] | null, status?: TableStatus): number {
    if (!tables) return 0;
    console.log('calculating in StatusCounterPipe pipe');
    return tables.map(it => it.status).filter(it => it === status).length;
  }

}
