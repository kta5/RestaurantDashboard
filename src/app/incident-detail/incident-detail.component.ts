import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Incident } from 'server/incident';
import { IncidentsComponent } from '../incidents/incidents.component';
@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css'],
})
export class IncidentDetailComponent implements OnInit {

  incident$: Observable<Incident>;

  constructor( private route: ActivatedRoute, private router: Router) { }
  // displayIncident();

  /*
  displayIncident() {
    for (let i = 0; i < this.incidents.length; i++) {
      if (this.incidents[i].id === this.idNumber) {
          console.log(this.incidents[i]);
      }
      else {
        console.log('error');
      }

    }
  }
  */

  ngOnInit() {
  }

}
