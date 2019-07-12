import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {IncidentList} from '../../../server/incidents-list';
import {Incident} from '../../../server/incident';
import {Time} from '../../../server/time';
import { CustomDate } from 'server/date';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';
import * as moment from 'moment';
// import {RepositoryService} from '@angular' ;
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],

  /* WORKING TEMPLATE CODE (DO NOT EDIT)
  template: `
    <h2>List of Current Incidents:</h2>
    <p> There are {{list.len}} incidents</p>
      <body id = s *ngFor="let incident of incidents">
        Incident: {{incident.id}} <br>
        Time: {{incident.loggedTime.createTime}} <br>
        Device: {{incident.device}} <br>
        Type: {{incident.type}} <br> <br>
      </body>
  `
  */
})
export class IncidentsComponent implements OnInit, AfterViewInit {

public incidents = [
    new Incident(1, new Time(22, 45, 55, new CustomDate(12, 24, 2018)), 'Android', 'Order Error', 'IHOP'), // PM
    new Incident(2, new Time(8, 50, 30, new CustomDate(8, 5, 2016)), 'IOS', 'Crash', 'APPB'), // AM
    new Incident(3, new Time(20, 54, 25, new CustomDate(10, 20, 2015)), 'Web', 'Crash', 'APPB'), // PM
    new Incident(4, new Time(3, 4, 5, new CustomDate(6, 15, 2019)), 'Web', 'Order Error', 'IHOP'), // AM
    new Incident(5, new Time(7, 20, 5, new CustomDate(3, 24, 2017)), 'IOS', 'Order Error', 'IHOP'), // AM
    new Incident(6, new Time(10, 40, 17, new CustomDate(1, 5, 2016)), 'Mobile Web', 'Crash', 'APPB'),
    new Incident(7, new Time(23, 40, 17, new CustomDate(2, 23, 2015)), 'Android', 'Crash', 'APPB'),
    new Incident(8, new Time(14, 40, 17, new CustomDate(10, 30, 2018)), 'Mobile Web', 'Order Error', 'APPB'),
    new Incident(9, new Time(17, 50, 15, new CustomDate(7, 8, 2019)), 'Android', 'Crash', 'IHOP')
  ];
  public displayedColumns = ['id', 'time', 'device', 'type', 'brand'];

  dataSource: MatTableDataSource<Incident>;


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) {

    const incidentData: Incident[] = [];

    for (let i = 0; i < this.incidents.length; i++) {
      incidentData.push(this.incidents[i]);
    }
    this.dataSource = new MatTableDataSource(incidentData);

  }

  ngOnInit() {
    console.log('init');
    }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log('View Init Enabled');
    const day: string = moment('2018/07/09').format('l');

    if (day === '2018/07/09') {
      console.log('We Got One!');
    }
    console.log(day);
  }

  onIncidentClick() {
    const s = 'lucky';
  }


  public goToProductDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
}

public doFilter(value: string) {
  // m = moment('2013-03-01', 'YYYY-MM-DD');
  console.log('filtering results');
    this.dataSource.filter = value.trim().toLocaleLowerCase();

    if (value === 'Applebees'.trim().toLocaleLowerCase()) {
      this.dataSource.filter = 'appb';
    }
    if (value === 'Iphone'.trim().toLocaleLowerCase()) {
      this.dataSource.filter = 'IOS';
    }
      // this.dataSource.filter = (value.substring(value.indexOf('|') + 1));
      // this.doFilter(value.substring(value.indexOf('|')));
    // if (value.includes('|')) {
    //   this.doFilter(value.substring(value.indexOf('|')));
    //   // this.dataSource.filter = moment('12', 'MM') as;
    // }


    console.log(this.dataSource.filter);
  }
}
