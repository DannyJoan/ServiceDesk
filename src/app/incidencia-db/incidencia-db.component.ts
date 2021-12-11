import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-incidencia-db',
  templateUrl: './incidencia-db.component.html',
  styleUrls: ['./incidencia-db.component.scss']
})
export class IncidenciaDBComponent implements OnInit {

  listDB: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.obtenerDB();

  }

  async obtenerDB() {
    this.listDB = (await this.serviceDesk.getDB()) as any[];
  }

}
