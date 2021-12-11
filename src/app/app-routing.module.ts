import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaCGComponent } from './incidencia-cg/incidencia-cg.component';
import { IncidenciaDBComponent } from './incidencia-db/incidencia-db.component';
import { IncidenciaDQComponent } from './incidencia-dq/incidencia-dq.component';
import { IncidenciaGCComponent } from './incidencia-gc/incidencia-gc.component';
import { IncidenciaLOComponent } from './incidencia-lo/incidencia-lo.component';
import { IncidenciaSCComponent } from './incidencia-sc/incidencia-sc.component';
import { IncidenciaprincipalComponent } from './incidenciaprincipal/incidenciaprincipal.component';

const routes: Routes = [
  {path: '', redirectTo: 'incidenciaprincipal', pathMatch: 'full'},
  {path:'incidenciaprincipal', component: IncidenciaprincipalComponent},
  {path:'incidenciaDQ', component: IncidenciaDQComponent},
  {path:'incidenciaGC', component: IncidenciaGCComponent},
  {path:'incidenciaDB', component: IncidenciaDBComponent},
  {path:'incidenciaCG', component: IncidenciaCGComponent},
  {path:'incidenciaSC', component: IncidenciaSCComponent},
  {path:'incidenciaLO', component: IncidenciaLOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
