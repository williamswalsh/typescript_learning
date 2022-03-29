var UserX = /** @class */ (function () {
    function UserX(firstName, lastName, unchangeableName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.setAtBeginning = unchangeableName;
    }
    UserX.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    // classwide property
    UserX.maxAge = 50;
    return UserX;
}());
var coWorker = new UserX('Wei', 'mal eij', 'nickname');
console.log(coWorker.getFullName());
// static member access
console.log(UserX.maxAge);
