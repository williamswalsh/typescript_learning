export default class Point {
    // if you prefix parameter with an access modifier it will
    // automatically make the fields properties of the class.
    // ? -> optional
    // no need to execute this.x = x
    constructor(private _x?: number, private _y?: number) {}

    getX(): number {
        return this._x;
    }
    setX(value: number) {
        if(value < 0)
            throw new Error("The x point co-ordinates must be greater than 0");
        this._x = value;
    }

    set y(value: number) {
        if(value < 0)
            throw new Error("The y point co-ordinates must be greater than 0");
        this._y = value;
    }
}
