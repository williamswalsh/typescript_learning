// Void type
// void = undefined and or null

// When no return - function returns void
const doSomething = () => {
    console.log("Do something");
};

// explicitly state return type
const doSomethingExplicitReturn = (): void => {
    console.log("Do something");
};

// not very useful
let foo: void = undefined;


// "any" type
// just turns off typescript
let bar: any = 'bad practice don\t use the \'any\' type';


// never
// function that returns never
// function that never ends
const throwException = (): never => {
    throw Error("Problem")
};

// type unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; // works

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
let s2: string = vUnknown as string; 

// another conversion
let pageNumber: string = '1';
//let numericPageNumber: number = pageNumber; // this fails
// let numericPageNumber: number = pageNumber as number; // this fails - ts blocks us
let numericPageNumber: number = (pageNumber as unknown)as number; 