//  must use dist folder as that is where the js files are placed after transcompiling
// import Point from "/Users/will/code/js/typescript/second_tutorial/dist/point.js"
// Relative path also works
import Point from "./point.js"

let message = 'abc';
console.log(message)
console.log(typeof message)

// uninitialized
// type defaults to any
let otherMessage;
console.log(otherMessage)           // undefined
console.log(typeof otherMessage)    // undefined

// typed
let typedMessage: string;
console.log(typedMessage)           // blank  - as expected
console.log(typeof typedMessage)    // string - as expected

// type assertion
// just informs TS of type for intelli-sense predictions
console.log((<string>message).indexOf('a'))
console.log((message as string).indexOf('a'))

// inline annotation
// not great works for simple code
const drawPoint = (point: {x: number, y: number}) => {}

// Not great practice to use Object literals - discouraged
const objLiteral = {x: -3, y: 8};
drawPoint(objLiteral);


// Property - looks like a field
// actually a getter and/or setter inside class.

const northPole = new Point(0, 0);
console.log(northPole.getX()) 
northPole.setX(70);

// northPole.setX(-1);          // Fails with exeception due to value being < 0
console.log(northPole.getX()) 
