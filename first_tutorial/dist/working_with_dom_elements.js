var page = '1';
var pageNumberTest = page;
// Element - generic class
// Typescript only sees data-types not the markup(html,css)
var someElement = document.querySelector(".foo");
// console.log("someElement: ", someElement.value) // Fails
// Property 'value' does not exist on type 'Element'.
// Workaround - bad practice - cast to type "any" 
// never do this!!!!
console.log("someElement: ", someElement.value);
// Succeeds, however, you lose type information from TS
// correct way
var someOtherElement = document.querySelector(".foo");
console.log("someOtherElement: ", someOtherElement.value);
// if you cast document element to any
// typescript doesn't know what type it is
// all code prediction based on the type will fail
// don't cast object to any
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
