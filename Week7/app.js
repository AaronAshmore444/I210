// Ways to create variables
//1. Using var makes a variable that can be reassigned and globally referenced
var myName = "Aaron";

//2. Using let makes a variable that can be reassigned
let myTitle = "Triple A";

//Life event
myTitle = "444";

//3. Using const makes a variable that can not be reassigned values

const ssn = 123;


// Variable Types
//Primitive Variable Types
//1. Strings
let str1 = "I like chicken nuggets";
const str2 = '123';
//Starting quote type must match ending quote type
const str4 = `String that can be broken
into multiple lines`;

//2. Number
let myAge = 52;
const isNegative = -1;
let myKids = 2.33;

//3. Boolean
let amIBald = true;
const farSun = false;


//Complex Variable

//4. Null / Undefined
let myCar;

//5. Arrays - list of stuff
const color = ["orange, purple, green"];
const random = [true, 1, "blah", -200];

//6. Objects - variables that you need to describe
const person = { 
    //property of the object
    hairColor: "black",
    //methods are like functions that belong to the object
    sayMyName() {},
};

//7. Function
function doSomething() {
    //Make your function do something
}