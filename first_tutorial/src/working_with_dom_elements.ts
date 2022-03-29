let page: any = '1';
let pageNumberTest = page as number;

// Element - generic class
// Typescript only sees data-types not the markup(html,css)
const someElement = document.querySelector(".foo");
// console.log("someElement: ", someElement.value) // Fails
// Property 'value' does not exist on type 'Element'.
// Workaround - bad practice - cast to type "any" 
// never do this!!!!
console.log("someElement: ", (someElement as any).value) 
// Succeeds, however, you lose type information from TS

// correct way
const someOtherElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someOtherElement: ", someOtherElement.value)
// if you cast document element to any
// typescript doesn't know what type it is
// all code prediction based on the type will fail
// don't cast object to any


someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value)
})
