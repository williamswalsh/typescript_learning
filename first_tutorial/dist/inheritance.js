var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserYY = /** @class */ (function () {
    function UserYY(firstName, lastName, unchangeableName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setAtBeginning = unchangeableName;
    }
    UserYY.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    // classwide property
    UserYY.maxAge = 50;
    return UserYY;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(UserYY));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(UserYY));
// constructor passed from parent class??
var manager = new Manager('Wojtek', 'Spunzar', 'polski');
console.log(manager.getFullName());
console.log(manager.setAtBeginning);
// constructor still passed from parent class??
var adminUser = new Admin('Wojtek', 'Spunzar', 'polski');
console.log(adminUser.getFullName());
console.log(adminUser.setAtBeginning);
// static member access
console.log(UserYY.maxAge);
