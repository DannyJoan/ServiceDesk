import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidenciaprincipal',
  templateUrl: './incidenciaprincipal.component.html',
  styleUrls: ['./incidenciaprincipal.component.scss']
})
export class IncidenciaprincipalComponent implements OnInit {

  listIncidencia: any[] = [];

  constructor(private serviceDesk: ServiceService,
    private primengConfig: PrimeNGConfig,
    private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.obtenerDatos();
  }


  async obtenerDatos() {
    this.listIncidencia = (await this.serviceDesk.getObtenerIncidencias()) as any[];
  }

  gotoDQ(){
    this.router.navigate(['/incidenciaDQ']);
  }

  gotoGC(){
    this.router.navigate(['/incidenciaGC']);
  }

  gotoCG(){
    this.router.navigate(['/incidenciaCG']);
  }

  gotoLO(){
    this.router.navigate(['/incidenciaLO']);
  }

  gotoSC(){
    this.router.navigate(['/incidenciaSC']);
  }

  gotoDB(){
    this.router.navigate(['/incidenciaDB']);
  }


}
