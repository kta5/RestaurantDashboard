"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant = /** @class */ (function () {
    function Restaurant(id, address, manager, features, brand) {
        this._id = id;
        this._address = address;
        this._manager = manager;
        this._features = features;
        this._brand = brand;
    }
    Object.defineProperty(Restaurant.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (val) {
            this._id = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (val) {
            this._address = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (val) {
            this._manager = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "features", {
        get: function () {
            return this._features;
        },
        set: function (val) {
            this._features = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (val) {
            this._brand = val;
        },
        enumerable: true,
        configurable: true
    });
    return Restaurant;
}());
exports.Restaurant = Restaurant;
