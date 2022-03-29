class UserYY implements UserInterfaceY {

    private firstName: string
    private lastName: string
    readonly setAtBeginning: string;
    
    // classwide property
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string, unchangeableName) {
        this.firstName = firstName
        this.lastName = lastName
        this.setAtBeginning = unchangeableName
    }
    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

class Admin extends UserYY {}
class Manager extends UserYY {
    private editor: string;

}

// constructor passed from parent class??
const manager = new Manager('Wojtek', 'Spunzar', 'polski');
console.log(manager.getFullName());
console.log(manager.setAtBeginning);

// constructor still passed from parent class??
const adminUser = new Admin('Wojtek', 'Spunzar', 'polski');
console.log(adminUser.getFullName());
console.log(adminUser.setAtBeginning);

// static member access
console.log(UserYY.maxAge);
