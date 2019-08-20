import { runInThisContext } from "vm";

export class RestaurantAddress {
    private _openLocationCode: string; // google's geocode system code
    private _normalAddress: string; // old-school address format

    constructor(openLocationCode: string, normalAddress: string) {
        this._openLocationCode = openLocationCode;
        this._normalAddress = normalAddress;
    }
    
    public get openLocationCode(): string {
        return this._openLocationCode;
    }
    public set openLocationCode(val: string) {
        this._openLocationCode = val;
    }

    public get normalAddress(): string {
        return this._normalAddress;
    } 
    public set normalAddress(val: string) {
        this._normalAddress = val;
    }
}
