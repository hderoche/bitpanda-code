import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MasterDataRecords } from './bitpandaObjects';

@Injectable({
  providedIn: 'root'
})
export class BitpandaService {

  constructor(private http: HttpClient) { }

  getMasterdata$ = (params = {}, headers = {}) => {
    return this.http.get<MasterDataRecords>('https://api.bitpanda.com/v1/masterdata')
    .pipe(map(p =>{ 
      return p.data.attributes.cryptocoins;
    }))
  }
  getMasterdataCryptocoins$ = (params = {}, headers = {}) => {
    return this.http.get<MasterDataRecords>('https://api.bitpanda.com/v1/masterdata')
    .pipe(map(p =>{ 
      return p.data.attributes.cryptocoins;
    }))
  }
  getMasterdataFiats$ = (params = {}, headers = {}) => {
    return this.http.get<MasterDataRecords>('https://api.bitpanda.com/v1/masterdata')
    .pipe(map(p =>{ 
      return p.data.attributes.fiats;
    }))
  }
  getMasterdataCommodities$ = (params = {type: null}, headers = {}) => {
    return this.http.get<MasterDataRecords>('https://api.bitpanda.com/v1/masterdata')
    .pipe(map(p =>{ 
      console.log(params.type)
      return p.data.attributes.commodities;
    }))
  }
  getMasterdataIndexes$ = (params = {}, headers = {}) => {
    return this.http.get<MasterDataRecords>('https://api.bitpanda.com/v1/masterdata')
    .pipe(map(p =>{ 
      return p.data.attributes.indexes;
    }))
  }
}
