// public, private and protected are only exist in TS(not in JS)
// no access modifier checking at runtime
class User {
    // everything is public by default
    // could also write public before all members
    private firstName: string
    private lastName: string

    // can't change it
    readonly setAtBeginning: string;

    constructor(firstName: string, lastName: string, unchangeableName) {
        this.firstName = firstName
        this.lastName = lastName
        this.setAtBeginning = unchangeableName
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}
// Argument of type 'boolean' is not assignable to parameter of type 'string'
// const broken_user = new User(true, 'D\'allesandro');

const new_user = new User('Sofia', 'D\'allesandro', 'sophie');

// cannot access this property as it is private
// new_user.firstName