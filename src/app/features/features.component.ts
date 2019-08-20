import { Component, OnInit } from '@angular/core';
import {restaurants} from '../restaurant/mock-restaurant';
import { RestaurantFeatures } from 'server/restaurant-features';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  enableOrDisable: boolean;
  returnSelectString = '';

  // event handler for the select element's change event
  selectGamesHandler (event: any) {
    // update the ui
    this.enableOrDisable = event.target.value;

    console.log(this.enableOrDisable);
    if (this.enableOrDisable === true) {
      this.returnSelectString = 'Enabled';
      console.log("At first if: " + this.returnSelectString);
    }
    else {
      this.returnSelectString = 'Disabled';
      console.log("At else: " + this.returnSelectString);
    }
    console.log(this.returnSelectString);
    this.returnSelectString = '';
  }

  selectPickupHandler (event1: any) {
    // update the ui
    this.enableOrDisable = event1.target.value;

    console.log(this.enableOrDisable);
    if (this.enableOrDisable === true) {
      this.returnSelectString = 'Enabled';
      console.log("At first if: " + this.returnSelectString);
    }
    else {
      this.returnSelectString = 'Disabled';
      console.log("At else: " + this.returnSelectString);
    }
    console.log(this.returnSelectString);
    this.returnSelectString = '';
  }

  selectDeliveryHandler (event2: any) {
    // update the ui
    this.enableOrDisable = event2.target.value;

    console.log(this.enableOrDisable);
    if (this.enableOrDisable === true) {
      this.returnSelectString = 'Enabled';
      console.log("At first if: " + this.returnSelectString);
    }
    else {
      this.returnSelectString = 'Disabled';
      console.log("At else: " + this.returnSelectString);
    }
    console.log(this.returnSelectString);
    this.returnSelectString = '';
  }

  constructor() { }


}
