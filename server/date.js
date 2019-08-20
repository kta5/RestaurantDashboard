"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomDate = /** @class */ (function () {
    function CustomDate(month, day, year) {
        this._month = month;
        this._day = day;
        this._year = year;
    }
    Object.defineProperty(CustomDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (val) {
            this._month = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (val) {
            this._day = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (val) {
            this._year = val;
        },
        enumerable: true,
        configurable: true
    });
    return CustomDate;
}());
exports.CustomDate = CustomDate;
