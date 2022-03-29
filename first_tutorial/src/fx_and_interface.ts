// Eg 1
let hello = "world";
// hello = true;     // Type 'boolean' is not assignable to type 'string'
// Rule: Can only change value to same type

// Eg 2
// JS - implicit type setting to string
let a = "world";
// TS - explicit
let b: string = "pluto";

// Create functions
// ES6 - arrow functions
// add type for parameters and return ": string"
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};
// console.log(getFullName(true, ["foo"])); // type error
console.log(getFullName("Liam", "Breathnach"));


// Complex arrangement of simple components
// Must create enough interfaces
// communication between interfaces
// Create Object
// all properties declared in interface are mandatory
// optional property use ? question mark
// Capital U for interface
// Should add I at start for interface
interface UserInterface1 {
    name: string;
    age?: number;   // Optional
    getMessage(): string;
}

const user1: UserInterface1 = {
    name: "Tom Sharpe",
    age: 30,
    getMessage() {
        return "Hello " + this.name;
    }
}
const user2: UserInterface1 = { 
    // Property 'age' is missing in type '{ name: string; }', 
    // but required in type 'User' 
    name: "Tom Sheehan",
    getMessage() {
        console.log(typeof this);
        return "Hello " + this.name;
    }
}
console.log(user2.getMessage())