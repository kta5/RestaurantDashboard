import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentsComponent } from '../incidents/incidents.component';
import { IncidentDetailComponent } from '../incident-detail/incident-detail.component';

const incidentRoutes: Routes = [
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/:id', component: IncidentDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(incidentRoutes),
    // IncidentsComponent
  ],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
