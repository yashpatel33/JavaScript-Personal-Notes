/* Variables In JS
 3 ways to declare a variable
 1. using var keyword
 2. using let keyword
 3. using const keyword

 var is used only for old browser
 let and const were introduced in 2015.
 value of let can be changed after declaration.
 value of const cannot be changed.

 When to use each one of them :
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

Javascript identfiers are case-sensitive

*/
var carName;    // declaration of variable before use 
let carName;    // declaration of variable before use   // let have block scope

// after declaration of variable value is undefined before assigning value

var x = 2;             // declaration of variable along with assigning value to it. Var has Global scope
const pi = 3.14;     
let person = "John Doe";
let answer = 'Yes I am!';

//You can declare many varaible in one statement using the comma operator.
let person1 = "John Doe", carName = "Volvo", price = 200;

// var can be re-declare and it would not lose it value stored.
// Let and const variable cannot be re-declare

// JS consider $ and _ sign as letter so it can be used as name of variable but not recommended.

/***********LET Variable
Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope 


	    Scope	Redeclare	Reassign	Hoisted	    Binds this
var	    No	    Yes	        Yes	        Yes 	    Yes
let 	Yes	    No	        Yes     	No	        No
const   Yes	    No	        No	        No	        No

 */



/*  FUNCTION ***********/
/*
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

*/
function myFunction(p1, p2) {
    return p1 * p2;
  }

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

/* 
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
*/

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}


/*   Array  */
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// In JavaScript, arrays always use numbered indexes.
// In JavaScript, objects use named indexes.

const array_name = [item1, item2,];

const cars = ["Saab", "Volvo", "BMW"];

//You can also create an array, and then provide the elements:
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";

//Using new keyword
const cars2 = new Array("Saab", "Volvo", "BMW");

//You access an array element by referring to the index number:
const cars3 = ["Saab", "Volvo", "BMW"];
let car = cars3[0];

//Changing an Array Element
cars3[0] = "Opel";

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.
//Objects use names to access its "members"

/* JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array: */

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

// When to use array and Objects 
/* When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
 */


//These two different statements both create a new empty array named points:
const points1 = new Array();
const points2 = [];
const points3 = new Array(40);   // Create an array with one element




/*  Objects   */
//Objects are variables too. But objects can contain many values.
//This code assigns many values (Fiat, 500, white) to a variable named car:
const car4 = {type:"Fiat", model:"500", color:"white"};

//The values are written as name:value pairs (name and value separated by a colon).

//You define (and create) a JavaScript object with an object literal:
const person3 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//The name:values pairs in JavaScript objects are called properties

//You can access object properties in two ways:
objectName.propertyName   /* or */   
 objectName["propertyName"]

/*
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

A method is a function stored as a property
*/

/*    This keyword
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used
*/
