import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { IncidenciaprincipalComponent } from './incidenciaprincipal/incidenciaprincipal.component';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { IncidenciaDQComponent } from './incidencia-dq/incidencia-dq.component';
import { IncidenciaCGComponent } from './incidencia-cg/incidencia-cg.component';
import { IncidenciaGCComponent } from './incidencia-gc/incidencia-gc.component';
import { IncidenciaDBComponent } from './incidencia-db/incidencia-db.component';
import { IncidenciaLOComponent } from './incidencia-lo/incidencia-lo.component';
import { IncidenciaSCComponent } from './incidencia-sc/incidencia-sc.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidenciaprincipalComponent,
    IncidenciaDQComponent,
    IncidenciaCGComponent,
    IncidenciaGCComponent,
    IncidenciaDBComponent,
    IncidenciaLOComponent,
    IncidenciaSCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [HttpClient,
    ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
