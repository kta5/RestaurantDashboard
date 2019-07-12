"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var incidents_list_1 = require("./incidents-list");
var incident_1 = require("./incident");
var time_1 = require("./time");
// import * as express from "express";
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        var incidentOneTime = new time_1.Time(12, 12, 12);
        var incidentOne = new incident_1.Incident(1, new time_1.Time(12, 12, 12), "Android", "Crash");
        var incidentTwo = new incident_1.Incident(2, new time_1.Time(12, 12, 12), "Android", "Crash");
        var incidentThree = new incident_1.Incident(3, new time_1.Time(20, 54, 25), "Web", "Crash");
        var incidents = [];
        incidents.push(incidentOne);
        incidents.push(incidentTwo);
        incidents.push(incidentThree);
        incidents.push(new incident_1.Incident(3, new time_1.Time(10, 35, 10), "Web", "Crash"));
        this._list = new incidents_list_1.IncidentList(incidents);
        // this._list = new IncidentList([incidentOne, incidentTwo]);
    }
    Server.prototype.listIncidents = function () {
        var size = this._list.len; // finds the size using custom getter from incident-list.ts
        console.log("There are " + size + " incidents\n");
        for (var i = 0; i < this._list.incidents.length; i++) {
            var time = this._list.incidents[i].loggedTime.createTime; // creates time using custom getter from time.ts
            console.log("Incident: " + this._list.incidents[i].id);
            console.log("Time: " + time);
            console.log("Device: " + this._list.incidents[i].device);
            console.log("Type: " + this._list.incidents[i].type + "\n");
        }
    };
    return Server;
}());
var _server = new Server();
_server.listIncidents();
var app = express();
app.get("/", function (req, res) {
    // res.send({hello: 'hello world'});
    res.send(_server.listIncidents());
});
app.listen(4202, "127.0.0.1", function () {
    console.log("Typescript server currently listening on 4202");
});
