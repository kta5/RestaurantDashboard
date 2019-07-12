export class Restaurant {
    private _id: number;
    private _address: string;
    private _features: string;
    private _brand: string;

    constructor(id: number, address: string, features: string, brand: string) {
        this._id = id;
        this._address = address;
        this._features = features;
        this._brand = brand;
    }

    public get id(): number {
        return this._id;
    }
    public set id(val: number) {
        this._id = val;
    }

    public get address(): string {
        return this._address;
    }
    public set address(val: string) {
        this._address = val;
    }

    public get features(): string {
        return this._features;
    }
    public set features(val: string) {
        this._features = val;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(val: string) {
        this._brand = val;
    }

}
