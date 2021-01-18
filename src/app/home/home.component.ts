import { BitpandaService } from './../bitpanda.service';
import { Component, OnInit } from '@angular/core';
import { Fiat } from '../bitpandaObjects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo: string[];
  constructor(private bitpandaService: BitpandaService) { }
  ngOnInit(): void {
    this.bitpandaService.getMasterdataFiats$().subscribe(data => {
      this.logo = data.map(elt => new Fiat(elt.attributes)).map(elt => elt.logo);
    })
  }

}
