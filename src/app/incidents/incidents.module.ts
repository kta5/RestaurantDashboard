import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
// import {IncidentsComponent} from './incidents.component';
import { IncidentDetailComponent } from '../incident-detail/incident-detail.component';

import { IncidentsRoutingModule } from './incidents-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    FormsModule
  ],
  declarations: [
    // IncidentsComponent,
    IncidentDetailComponent
  ]
})
export class IncidentsModule { }
