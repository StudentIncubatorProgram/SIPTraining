/*ES6+ Features*/ 
//ArrowFunction
//Arrow Function with no parameters
const hello = () => {
    console.log("Hello");
}
hello();

//Arrow Function with single parameter
const hello1 = n =>{
    n=5;
    console.log(n+8);
}
hello1();

//Arrow Function with multiple parameters
const hello2 = (a,b) => {
    a=5;
    b=10;
    console.log(a+b);
}
hello2();

//Spread Operator
const numbers={"one":1,"two":2,"three":3,"four":4};
const numbers1={...numbers,"five":5,"six":6};
console.log(numbers1);

//Destructuring
const values=["hello","hola","bonjuor"];
const [english,spanish,french]=values;
console.log(english);

//Template Strings
let greet="hello";
let name="tharun";
let greetMessage=`${greet} ${name} How are you?`
console.log(greetMessage);