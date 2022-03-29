// Eg 1
var hello = "world";
// hello = true;     // Type 'boolean' is not assignable to type 'string'
// Rule: Can only change value to same type
// Eg 2
// JS - implicit type setting to string
var a = "world";
// TS - explicit
var b = "pluto";
// Create functions
// ES6 - arrow functions
// add type for parameters and return ": string"
var getFullName = function (name, surname) {
    return name + " " + surname;
};
// console.log(getFullName(true, ["foo"])); // type error
console.log(getFullName("Liam", "Breathnach"));
var user1 = {
    name: "Tom Sharpe",
    age: 30,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    // Property 'age' is missing in type '{ name: string; }', 
    // but required in type 'User' 
    name: "Tom Sheehan",
    getMessage: function () {
        console.log(typeof this);
        return "Hello " + this.name;
    }
};
console.log(user2.getMessage());
