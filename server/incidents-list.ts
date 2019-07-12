import { Incident } from "./incident";

export class IncidentList {
    private _incidents: Incident[];

    constructor(incidents: Incident[]) {
        this._incidents = incidents;
    }

    public get incidents(): Incident[] {
        return this._incidents;
    }
    public set incidents(val: Incident[]) {
        this._incidents = val;
    }
    public len(): number {
        return this._incidents.length;
    }

}
