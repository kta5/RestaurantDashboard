"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
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
    Object.defineProperty(Time.prototype, "createTime", {
        get: function () {
            var meridiem = "";
            if (this._hour > 12) {
                meridiem = "PM";
                this._hour = this._hour - 12;
            }
            else if (this._hour === 12) {
                meridiem = "PM";
            }
            else if (this._hour < 12) {
                meridiem = "AM";
            }
            var stringHour = this._hour.toString();
            var stringMinute = this._minute.toString();
            var stringSecond = this._second.toString();
            console.log(stringHour, stringMinute, stringSecond);
            if (+stringHour < 10) {
                stringHour = "0" + stringHour;
            }
            if (+stringMinute < 10) {
                stringMinute = "0" + stringMinute;
            }
            if (+stringSecond < 10) {
                stringSecond = "0" + stringSecond;
            }
            console.log(meridiem);
            return stringHour + ":" + stringMinute + ":" + stringSecond + " " + meridiem;
        },
        enumerable: true,
        configurable: true
    });
    return Time;
}());
exports.Time = Time;
