import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-gc',
  templateUrl: './incidencia-gc.component.html',
  styleUrls: ['./incidencia-gc.component.scss']
})
export class IncidenciaGCComponent implements OnInit {

  listGC: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerCG();

  }

  async obtenerCG() {
    this.listGC = (await this.serviceDesk.getGC()) as any[];
  }

}
