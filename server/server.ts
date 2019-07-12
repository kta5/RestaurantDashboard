// console.log('My first typescript server'); //debug purposes
// do not use ts-node! Use "node ..."
// import * as express from 'express'; //commented due to import error
/*
import express = require('express');
// import INC = require("./incident");
// import INC = require("c:/Users/Kta/Documents/firstAngularApp/server/incident");

import { setDefaultService } from 'selenium-webdriver/edge';
import { Incident } from './incident';

const app = express();

// var incidents = new Array();
let date = new Date();
// incidents[0] = new incident(10, [date.getHours(), date.getMinutes(), date.getSeconds()], "bla", "bla");// initialize incident

// incidents.push(new incident(10, [11, 23, 32], "bla", "bla"));
// var length = incidents.push(INCobj); //return length of incidents array (may not use)

app.get('/', (req, res) =>{
    // res.send({hello: 'hello world'});
    res.send(incidents);
})

app.listen(4202, '127.0.0.1', function(){
    console.log('Typescript server currently listening on 4202');
})
*/

import {IncidentList} from "./incidents-list";
import {Incident} from "./incident";
import { Time } from "./time";
// import * as express from "express";
import express = require("express");
class Server {
    private _list: IncidentList;

    constructor() {
        const incidentOneTime: Time = new Time(12, 12, 12);
        const incidentOne: Incident = new Incident(1, new Time(12, 12, 12), "Android", "Crash");
        const incidentTwo: Incident = new Incident(2, new Time(12, 12, 12), "Android", "Crash");
        const incidentThree: Incident = new Incident(3, new Time(20, 54, 25), "Web", "Crash");
        const incidents = [];
        incidents.push(incidentOne);
        incidents.push(incidentTwo);
        incidents.push(incidentThree);
        incidents.push(new Incident(3, new Time(10, 35, 10), "Web", "Crash"));
        this._list = new IncidentList(incidents);
        // this._list = new IncidentList([incidentOne, incidentTwo]);
    }
    public listIncidents(): void {
        const size = this._list.len; // finds the size using custom getter from incident-list.ts
        console.log(`There are ${size} incidents\n`);

        for (let i = 0; i < this._list.incidents.length; i++) {
            const time = this._list.incidents[i].loggedTime.createTime; // creates time using custom getter from time.ts
            console.log(`Incident: ${this._list.incidents[i].id}`);
            console.log(`Time: ${time}`);
            console.log(`Device: ${this._list.incidents[i].device}`);
            console.log(`Type: ${this._list.incidents[i].type}\n`);
        }
    }
}

const _server: Server = new Server();
_server.listIncidents();
const app = express();
app.get("/", (req, res) => {
    // res.send({hello: 'hello world'});
    res.send(_server.listIncidents());
});

app.listen(4202, "127.0.0.1", function() {
    console.log("Typescript server currently listening on 4202");
});
