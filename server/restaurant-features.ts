export class RestaurantFeatures {
    private _kidGames: boolean;
    private _posOrder: boolean;
    private _pickupOption: boolean;
    private _deliveryOption: boolean;

    constructor(kidGames: boolean, posOrder: boolean, pickupOption: boolean, deliveryOption: boolean) {
        this._kidGames = kidGames;
        this._posOrder = posOrder;
        this._pickupOption = pickupOption;
        this._deliveryOption = deliveryOption;
    }

    public get kidGames(): boolean {
        return this._kidGames;
    }
    public set kidGames(val: boolean) {
        this._kidGames = val;
    }

    public get posOrder(): boolean {
        return this._posOrder;
    }
    public set posOrder(val: boolean) {
        this._posOrder = val;
    }

    public get pickupOption(): boolean {
        return this._pickupOption;
    }
    public set pickupOption(val: boolean) {
        this._pickupOption = val;
    }

    public get deliveryOption(): boolean {
        return this._deliveryOption;
    }
    public set deliveryOption(val: boolean) {
        this._deliveryOption = val;
    }
}
