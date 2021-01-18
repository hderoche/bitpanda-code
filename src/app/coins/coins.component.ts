import { MasterDataRecords, Coin } from './../bitpandaObjects';
import { BitpandaService } from './../bitpanda.service';
import { map, tap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Coin>;
  dataSource: MatTableDataSource<Coin>;
  displayedColumns: string[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  data: MasterDataRecords;
  constructor(private bitpandaService: BitpandaService) {}

  ngOnInit() {
    this.bitpandaService.getMasterdataCryptocoins$().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.map(elt => new Coin(elt.attributes)));
      console.log(this.dataSource)
      this.displayedColumns = ['logo', 'name', 'symbol', 'avg_price', 'circulating_supply', 'change_24h_amount', 'change_1w_amount', 'change_1m_amount', 'change_1y_amount'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      
    })
  }


  

  getColor(nb){
    if(nb > 0){
       return 'green'
    } else if(nb < 0){
       return 'red'   
    } else if (nb == 0) {
      return 'blue'
    }
  }

  ngAfterViewInit() {
  }
}
