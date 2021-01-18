import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
// Masterdata

export interface MasterDataRecords {
    data: AttributesRecords;
}

export interface AttributesRecords {
    data: any;
    attributes: ElementRecords;
}



export interface ElementRecords {
    cryptocoins: ItemCoinRecords[];
    fiats: ItemFiatRecords[];
    indexes: ItemIndexRecords[];
    commodities: ItemCommodityRecords[];
}


// Cryptocoins objects
export interface ItemCoinRecords {
    attributes: Coin;
    id: number;
    type: string;
}

export interface CoinRecords {
    logo: string;
    name: string;
    symbol: string;
    avg_price: string;
    circulating_supply: string;
    change_24h: string;
    change_24h_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1m: string;
    change_1m_amount: string;
    change_1y: string;
    change_1y_amount: string;
    color: string;
}

export class Coin implements CoinRecords {
    // Properties needs to set to null, otherwise javascript does not initialise them for the constructor
    logo: string = null;
    name: string = null;
    symbol: string = null;
    avg_price: string = null;
    circulating_supply: string = null;
    change_24h: string = null;
    change_24h_amount: string = null;
    change_1w: string = null;
    change_1w_amount: string = null;
    change_1m: string = null;
    change_1m_amount: string = null;
    change_1y: string = null;
    change_1y_amount: string = null;
    color: string = null;

    paginator: MatPaginator;
    sort: MatSort;


    // Assigning for each json element its typescript equivalent   
    constructor(input: any = {}) {
        Object.keys(this).forEach(p => this[p] = (input as any)[p]);
    }
}

// Indexes
export interface ItemIndexRecords {
    attributes: Index;
    id: number;
    type: string;
}

export interface IndexRecords {
    change_1m: string;
    change_1m_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1y: string;
    change_1y_amount: string;
    change_24h: string;
    change_24h_amount: string;
    color: string;
    avg_price: string;
    index_original_fiat_symbol: string;
    logo: string;
    name: string;
    symbol: string;

}

export class Index implements IndexRecords {
    // Properties needs to set to null, otherwise javascript does not initialise them for the constructor
    change_1m: string = null;
    change_1m_amount: string = null;
    change_1w: string = null;
    change_1w_amount: string = null;
    change_1y: string = null;
    change_1y_amount: string = null;
    change_24h: string = null;
    change_24h_amount: string = null;
    color: string = null;
    avg_price: string = null;
    index_original_fiat_symbol: string = null;
    logo: string = null;
    name: string = null;
    symbol: string = null;

    // Assigning for each json element its typescript equivalent   
    constructor(input: any = {}) {
        Object.keys(this).forEach(p => this[p] = (input as any)[p]);
    }
    
}
// Fiats

export interface ItemFiatRecords {
    attributes: Fiat;
    id: number;
    type: string;
}

export interface FiatRecords {
    logo: string;
    name: string;
    symbol: string;
    symbol_character: string;
    to_eur_rate: string;
}

export class Fiat implements FiatRecords {
// Properties needs to set to null, otherwise javascript does not initialise them for the constructor
    logo: string = null;
    name: string = null;
    symbol: string = null;
    symbol_character: string = null;
    to_eur_rate: string = null;


    // Assigning for each json element its typescript equivalent   
    constructor(input: any = {}) {
        Object.keys(this).forEach(p => this[p] = (input as any)[p]);
    }
}

// Commodities

export interface ItemCommodityRecords {
    attributes: Commodity;
    id: number;
    type: string;
}


export interface CommodityRecords {
    change_1m: string;
    change_1m_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1y: string;
    change_1y_amount: string;
    change_24h: string;
    change_24h_amount: string;
    circulating_supply: string;
    color: string;
    symbol: string;
    name: string;
    logo: string;
}

export class Commodity implements CommodityRecords {
    // Properties needs to set to null, otherwise javascript does not initialise them for the constructor

    change_1m: string= null;
    change_1m_amount: string= null;
    change_1w: string= null;
    change_1w_amount: string= null;
    change_1y: string= null;
    change_1y_amount: string= null;
    change_24h: string= null;
    change_24h_amount: string= null;
    circulating_supply: string= null;
    color: string= null;
    symbol: string= null;
    name: string= null;
    logo: string= null;
    avg_price: string = null;

    paginator: MatPaginator;
    sort: MatSort;
    // Assigning for each json element its typescript equivalent   
    constructor(input: any = {}) {
        Object.keys(this).forEach(p => this[p] = (input as any)[p]);
    }
    
}