var _this = this;
// Eg 1
var hello = "world";
// hello = true;     // Type 'boolean' is not assignable to type 'string'
// Rule: Can only change value to same type
// Eg 2
// JS - implicit type setting to string
var a = "world";
// TS - explicit
var b = "pluto";
function getR8Normal() {
    this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
}
// Arrow Function
var getR8Arrow = function () {
    _this.colour = 'white';
    console.log("BRRROOOOOOOM BRRRROOOOOOMMMMM");
};
var x = new getR8Arrow();
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
    var myArrowFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
    };
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
myEmptyFunction(); // => undefined
myEmptyFunction2(); // => undefined
// Arrow fx 
// - if only one expression
// - and the curly braces{} are removed
// -> then expression is implicitly returned
var getCarEngineDetails = function () { return getCarEngineType(); };
function getCarEngineType() {
    return 'V8';
}
console.log(getCarEngineDetails());
var Hero = /** @class */ (function () {
    function Hero(heroName) {
        var _this = this;
        this.logName = function () {
            console.log(_this.heroName);
        };
        this.heroName = heroName;
    }
    return Hero;
}());
var batman = new Hero('Batman');
// as logName is an Arrow F(x)
// then the this reference doesn't need to be bound when
// invoked indirectly like for setTimeout & setInterval
setTimeout(batman.logName, 1000); // similar to setInterval
