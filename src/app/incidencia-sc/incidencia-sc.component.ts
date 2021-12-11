import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-sc',
  templateUrl: './incidencia-sc.component.html',
  styleUrls: ['./incidencia-sc.component.scss']
})
export class IncidenciaSCComponent implements OnInit {

  listSC: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerSC();

  }

  async obtenerSC() {
    this.listSC = (await this.serviceDesk.getSC()) as any[];
  }

}
