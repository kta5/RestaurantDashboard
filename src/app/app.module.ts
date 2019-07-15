import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { MatSliderModule, MatSlider } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatSortModule, MatDatepickerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { MatTableDataSource, MatNativeDateModule  } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import * as moment from 'moment';
import { RestaurantComponent } from './restaurant/restaurant.component';
// import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { IncidentsModule } from './incidents/incidents.module';
// import {IncidentsRoutingModule} from './incidents/incidents-routing.module';


// import { MaterialModule } from './../material/material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import 'hammerjs';


const appRoutes: Routes = [
  { path: 'incidents', component: IncidentsComponent, data: { title: 'Incident List' } },
  { path: 'home', component: HomeComponent, pathMatch: 'full', data: { title: 'Dine Brands Monitoring System'}},
  { path: 'features', component: FeaturesComponent, pathMatch: 'full', data: {title: 'Features List'}},
  { path: 'restaurant', component: RestaurantComponent, pathMatch: 'full', data: {title: 'Restaurant List'}},
  // { path: 'incident-detail', component: IncidentDetailComponent, pathMatch: 'full', data: {title: 'Incident Detail'}}
   { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IncidentsComponent,
    PageNotFoundComponent,
    HomeComponent,
    FeaturesComponent,
    RestaurantComponent,
    // IncidentsRoutingModule
    // IncidentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSliderModule,
    MatTableModule, MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatDatepickerModule, MatNativeDateModule,
    RouterModule.forRoot( // for navigation routes
      appRoutes,
      { enableTracing: true } // debug purposes
    ),
    IncidentsModule
  ],
  exports: [
    MatSortModule,
    MatFormFieldModule,
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
