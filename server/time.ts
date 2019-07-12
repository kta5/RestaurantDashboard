import { CustomDate } from "./date";

export class Time {
    private _hour: number;
    private _minute: number;
    private _second: number;
    private _date: CustomDate;

    constructor(hour: number, minute: number, second: number, date: CustomDate) {
        this._hour = hour;
        this._minute = minute;
        this._second = second;
        this._date = date;
    }

    public get hour(): number {
        return this._hour;
    }
    public set hour(val: number) {
        this._hour = val;
    }
    public get minute(): number {
        return this._minute;
    }
    public set minute(val: number) {
        this._minute = val;
    }
    public get second(): number {
        return this._second;
    }
    public set second(val: number) {
        this._second = val;
    }

    public get date(): CustomDate {
        return this._date;
    }
    public set date(val: CustomDate) {
        this._date = val;
    }
    public createTime() {
        let n: string = +this._hour + ":" + +this._minute + ":" + +this._second + " | " + +this.date.month + "/" + +this.date.day + "/" + +this.date.year;
        // console.log(typeof n);
        return n;
    }

    /*
    public createTime() {
        let meridiem: string = "";
        if (this._hour > 12) {
            meridiem = "PM";
            this._hour = this._hour - 12;
        } else if (this._hour === 12) {
            meridiem = "PM";
        } else if (this._hour < 12) {
            meridiem = "AM";
        }

        let stringHour: string = this._hour.toString();
        let stringMinute: string = this._minute.toString();
        let stringSecond: string = this._second.toString();
        // console.log(stringHour, stringMinute, stringSecond);

        if (+stringHour < 10) {
            stringHour = "0" + stringHour;
        }
        if (+stringMinute < 10) {
            stringMinute = "0" + stringMinute;
        }
        if (+stringSecond < 10) {
            stringSecond = "0" + stringSecond;
        }

        // console.log(meridiem);
        return stringHour + ":" + stringMinute + ":" + stringSecond + " " + meridiem + " | " + this.date.month + "/" + this.date.day + "/" + this.date.year;
    }
    */

}
