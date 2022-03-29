interface UserInterfaceY {
    getFullName(): string;
}

class UserX implements UserInterfaceY {

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

const coWorker = new UserX('Wei', 'mal eij', 'nickname');
console.log(coWorker.getFullName());

// static member access
console.log(UserX.maxAge);
