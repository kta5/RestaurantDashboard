"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestaurantFeatures = /** @class */ (function () {
    function RestaurantFeatures(kidGames, posOrder, pickupOption, deliveryOption) {
        this._kidGames = kidGames;
        this._posOrder = posOrder;
        this._pickupOption = pickupOption;
        this._deliveryOption = deliveryOption;
    }
    Object.defineProperty(RestaurantFeatures.prototype, "kidGames", {
        get: function () {
            return this._kidGames;
        },
        set: function (val) {
            this._kidGames = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestaurantFeatures.prototype, "posOrder", {
        get: function () {
            return this._posOrder;
        },
        set: function (val) {
            this._posOrder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestaurantFeatures.prototype, "pickupOption", {
        get: function () {
            return this._pickupOption;
        },
        set: function (val) {
            this._pickupOption = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestaurantFeatures.prototype, "deliveryOption", {
        get: function () {
            return this._deliveryOption;
        },
        set: function (val) {
            this._deliveryOption = val;
        },
        enumerable: true,
        configurable: true
    });
    return RestaurantFeatures;
}());
exports.RestaurantFeatures = RestaurantFeatures;
