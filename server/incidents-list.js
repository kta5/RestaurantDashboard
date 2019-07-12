"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IncidentList = /** @class */ (function () {
    function IncidentList(incidents) {
        this._incidents = incidents;
    }
    Object.defineProperty(IncidentList.prototype, "incidents", {
        get: function () {
            return this._incidents;
        },
        set: function (val) {
            this._incidents = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IncidentList.prototype, "len", {
        get: function () {
            return this._incidents.length;
        },
        enumerable: true,
        configurable: true
    });
    return IncidentList;
}());
exports.IncidentList = IncidentList;
