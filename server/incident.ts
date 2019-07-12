import { Time } from "./time";

export class Incident {
    private _id: number;
    private _loggedTime: Time;
    private _device: string;
    private _type: string;
    private _brand: string;

    constructor(id: number, loggedTime: Time, device: string, type: string, brand: string) {
        this._id = id;
        this._loggedTime = loggedTime;
        this._device = device;
        this._type = type;
        this._brand = brand;
    }

    public get id(): number {
        return this._id;
    }
    public set id(val: number) {
        this._id = val;
    }
    public get loggedTime(): Time {
        return this._loggedTime;
    }
    public set loggedTime(val: Time) {
        this._loggedTime = val;
    }
    public get device(): string {
        return this._device;
    }
    public set device(val: string) {
        this._device = val;
    }
    public get type(): string {
        return this._type;
    }
    public set type(val: string) {
        this._type = val;
    }
    public get brand(): string {
        return this._brand;
    }
    public set brand(val: string) {
        this._brand = val;
    }

}
