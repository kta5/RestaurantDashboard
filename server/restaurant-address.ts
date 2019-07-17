export class RestaurantAddress {
    private _openLocationCode: string; // google's geocode system code
    private _normalAddress: string; // old-school address format

    constructor(openLocationCode: string, normalAddress: string) { this._openLocationCode = openLocationCode; this._normalAddress = normalAddress; }

}
