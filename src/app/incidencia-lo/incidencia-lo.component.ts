import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-lo',
  templateUrl: './incidencia-lo.component.html',
  styleUrls: ['./incidencia-lo.component.scss']
})
export class IncidenciaLOComponent implements OnInit {

  listLO: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerLO();

  }

  async obtenerLO() {
    this.listLO = (await this.serviceDesk.getLO()) as any[];
  }

}
