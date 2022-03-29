// Eg 1
let hello = "world";
// hello = true;     // Type 'boolean' is not assignable to type 'string'
// Rule: Can only change value to same type

// Eg 2
// JS - implicit type setting to string
let a = "world";
// TS - explicit
let b: string = "pluto";


function getR8Normal() {
    this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
}

// Arrow Function
const getR8Arrow = () => {
    this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
};
const x = new getR8Arrow();


// can use arguments variable
function myRegularFunction() {
  console.log(arguments);
}
// Arrow Fx -> can't use arguments variable
// can use args
// function myRegularFunction2() {
//   const myArrowFunction = () => {
//     console.log(arguments);
//   }
//   myArrowFunction('c', 'd');
// }
// myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

// Can use "rest of params" "...args" to capture arguments to method
// as arguments doesn't work
function myRegularFunctionX(x, y) {
  const myArrowFunction = (...args) => {
    console.log(args);
  }
  myArrowFunction('c', 'd');
}
myRegularFunctionX('a', 'b'); // logs ['c', 'd']


// Implicit returns
// Regular fx - if no return statement/no expression after return keyword - return undefined
function myEmptyFunction() {
  42;
}
function myEmptyFunction2() {
  42;
  return;
}
myEmptyFunction();  // => undefined
myEmptyFunction2(); // => undefined

// Arrow fx 
// - if only one expression
// - and the curly braces{} are removed
// -> then expression is implicitly returned
const getCarEngineDetails = () => getCarEngineType();

function getCarEngineType() {
    return 'V8';
}
console.log(getCarEngineDetails())

class Hero {
    heroName: string;
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman');
// as logName is an Arrow F(x)
// then the this reference doesn't need to be bound when
// invoked indirectly like for setTimeout & setInterval
setTimeout(batman.logName, 1000);       // similar to setInterval