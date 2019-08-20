"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestaurantAddress = /** @class */ (function () {
    function RestaurantAddress(openLocationCode, normalAddress) {
        this._openLocationCode = openLocationCode;
        this._normalAddress = normalAddress;
    }
    Object.defineProperty(RestaurantAddress.prototype, "openLocationCode", {
        get: function () {
            return this._openLocationCode;
        },
        set: function (val) {
            this._openLocationCode = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestaurantAddress.prototype, "normalAddress", {
        get: function () {
            return this._normalAddress;
        },
        set: function (val) {
            this._normalAddress = val;
        },
        enumerable: true,
        configurable: true
    });
    return RestaurantAddress;
}());
exports.RestaurantAddress = RestaurantAddress;
