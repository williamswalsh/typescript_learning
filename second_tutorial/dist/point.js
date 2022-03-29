export default class Point {
    // if you prefix parameter with an access modifier it will
    // automatically make the fields properties of the class.
    // ? -> optional
    // no need to execute this.x = x
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getX() {
        return this._x;
    }
    setX(value) {
        if (value < 0)
            throw new Error("The x point co-ordinates must be greater than 0");
        this._x = value;
    }
    set y(value) {
        if (value < 0)
            throw new Error("The y point co-ordinates must be greater than 0");
        this._y = value;
    }
}
