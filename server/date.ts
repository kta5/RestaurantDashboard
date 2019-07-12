export class CustomDate {
    private _month: number;
    private _day: number;
    private _year: number;

    constructor(month: number, day: number, year: number) {
        this._month = month;
        this._day = day;
        this._year = year;
    }

    public get month(): number {
        return this._month;
    }
    public set month(val: number){
        this._month = val;
    }

    public get day(): number {
        return this._day;
    }
    public set day(val: number){
        this._day = val;
    }

    public get year(): number {
        return this._year;
    }
    public set year(val: number){
        this._year = val;
    }


}