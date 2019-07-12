import { Component, OnInit } from '@angular/core';
import { IncidentsComponent } from '../../../src/app/incidents/incidents.component';
import { Incident } from 'server/incident';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent extends IncidentsComponent {

  len = this.incidents.length;
  // numTodayIncidents = this.len;


  getTodayIncidents() {

  }
  IncidentComponent() {

  }

  // ngOnInit() {
  // }


}
