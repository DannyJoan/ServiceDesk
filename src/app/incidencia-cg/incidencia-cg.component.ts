import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-cg',
  templateUrl: './incidencia-cg.component.html',
  styleUrls: ['./incidencia-cg.component.scss']
})
export class IncidenciaCGComponent implements OnInit {

  listCG: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerCG();

  }

  async obtenerCG() {
    this.listCG = (await this.serviceDesk.getCG()) as any[];
  }

}
