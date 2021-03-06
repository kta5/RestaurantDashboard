"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Incident = /** @class */ (function () {
    function Incident(id, loggedTime, device, type, brand) {
        this._id = id;
        this._loggedTime = loggedTime;
        this._device = device;
        this._type = type;
        this._brand = brand;
    }
    Object.defineProperty(Incident.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Incident.prototype, "loggedTime", {
        get: function () {
            return this._loggedTime;
        },
        set: function (val) {
            this._loggedTime = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Incident.prototype, "device", {
        get: function () {
            return this._device;
        },
        set: function (val) {
            this._device = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Incident.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Incident.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (val) {
            this._brand = val;
        },
        enumerable: true,
        configurable: true
    });
    return Incident;
}());
exports.Incident = Incident;
