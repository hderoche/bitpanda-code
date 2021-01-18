import { Index } from './../bitpandaObjects';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BitpandaService } from '../bitpanda.service';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.css']
})
export class IndexesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Index>;
  dataSource: MatTableDataSource<Index>;
  displayedColumns: string[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  constructor(private bitpandaService: BitpandaService) {}

  ngOnInit() {
    this.bitpandaService.getMasterdataIndexes$().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.map(elt => new Index(elt.attributes)));
      console.log(this.dataSource)
      this.displayedColumns = ['logo', 'name', 'symbol', 'avg_price', 'change_24h_amount', 'change_1w_amount', 'change_1m_amount', 'change_1y_amount'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      
    })  }

    getColor(nb){
      if(nb > 0){
         return 'green'
      } else if(nb < 0){
         return 'red'   
      } else if (nb == 0) {
        return 'blue'
      }
    }
}
