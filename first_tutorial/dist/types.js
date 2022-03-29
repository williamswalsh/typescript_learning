// Void type
// void = undefined and or null
// When no return - function returns void
var doSomething = function () {
    console.log("Do something");
};
// explicitly state return type
var doSomethingExplicitReturn = function () {
    console.log("Do something");
};
// not very useful
var foo = undefined;
// "any" type
// just turns off typescript
var bar = 'bad practice don\t use the \'any\' type';
// never
// function that returns never
// function that never ends
var throwException = function () {
    throw Error("Problem");
};
// type unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; // works
// doesn't work
// let s2: string = vUnknown; 
// doesn't work as you are stating to TS that type is unknown
// This is used when you are assigning variable to another variable
// but you don't know the type
// Type Assertions
// convert one type to another
// Type Unknown
// convert vUnkown to string type
// then assign to s2
var s2 = vUnknown;
// another conversion
var pageNumber = '1';
//let numericPageNumber: number = pageNumber; // this fails
// let numericPageNumber: number = pageNumber as number; // this fails - ts blocks us
var numericPageNumber = pageNumber;
