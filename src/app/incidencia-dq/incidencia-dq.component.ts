import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-dq',
  templateUrl: './incidencia-dq.component.html',
  styleUrls: ['./incidencia-dq.component.scss']
})
export class IncidenciaDQComponent implements OnInit {

  listDQ: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerDQ();

  }

  async obtenerDQ() {
    this.listDQ = (await this.serviceDesk.getDQ()) as any[];
  }
}
