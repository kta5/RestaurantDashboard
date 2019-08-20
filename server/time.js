"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time(hour, minute, second, date) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
        this._date = date;
    }
    Object.defineProperty(Time.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (val) {
            this._hour = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (val) {
            this._minute = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "second", {
        get: function () {
            return this._second;
        },
        set: function (val) {
            this._second = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (val) {
            this._date = val;
        },
        enumerable: true,
        configurable: true
    });
    Time.prototype.createTime = function () {
        var n = +this._hour + ":" + +this._minute + ":" + +this._second + " | " + +this.date.month + "/" + +this.date.day + "/" + +this.date.year;
        // console.log(typeof n);
        return n;
    };
    return Time;
}());
exports.Time = Time;
