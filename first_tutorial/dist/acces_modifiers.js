// public, private and protected are only exist in TS(not in JS)
// no access modifier checking at runtime
var User = /** @class */ (function () {
    function User(firstName, lastName, unchangeableName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setAtBeginning = unchangeableName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User;
}());
// Argument of type 'boolean' is not assignable to parameter of type 'string'
// const broken_user = new User(true, 'D\'allesandro');
var new_user = new User('Sofia', 'D\'allesandro', 'sophie');
// cannot access this property as it is private
// new_user.firstName
