//Creating and Initializing Arrays
// Array is objects that holds multiple value or objects

// Create an Array > let values = [] ;

// Create an Array and intiialize > let values = [1, 2, 3] ;

// Initialize an array 2.nd way > let values = Array.of(1,2,3); 

let arrayDefinition = [];

let arrayDefinitionAndInitializing = Array.of(3,4,5);


const values = ['a','b','c'];


// Accessing array items

console.log(values[0]);

// Manipulating arrays
// 1. push() : add elements to the end of arrays

values.push('d', 'e');


// 2. pop() : remove elements from end of arrays
const last = values.pop();

// 3. shift() : remove elements from begin of arrays
const first = values.shift();

// 4. unshift() : add elements to the begining of arrays
values.unshift('a');

//slice()
const newValues = values.slice(1,2); // newValues will be 'b'

// splice() for deleting
values.splice(1,1);
console.log(values); // ac

// splice() for inserting
values.splice(1,0, 'foo');
console.log( values ); // a foo b c

// fill all values values will be 0 with following code
values.fill(0);

// Array searching and looping
// indexOf()
// filter()
const arrayV = ['a','t','e'];
const set = arrayV.filter(function(item){
  return item> 'a';
});

console.log(set) ; // set result will be t, 2


// find() : when find first element to proper with criteria it will done
const set = arrayV.find(function(item){
  return item > 'a';
});

console.log(set) ; // set result will be t, 2


function findOverFour(){
  let over4 = arrayDefinitionAndInitializing.find(element => element > 4)
  return over4;
}


// Methods for Iterating through arrays
// forEach()

values.forEach(function(item) {
    console.log(item);
}); // a b c


let years = Array.of(2010,2020,2022);
let yearNum = 0;

function sumYearNum(x){
  yearNum = yearNum + x;
}

years.forEach(sumYearNum);


// Arrays in DOM
const containers = document.getElementsByClassName('container');
containers[2].classList.add('d-none'); // hide d-none

// Hoisting : called value or function before declared

// Undeclared variables and strict mode : if we dont declare variables then if we donot 'use strict' on above our class, we could not our faults


// Using spread(...) operators to passing array values 
  // If we dont use spread operators we cannot pass array values to the function
let monthSales = Array.of(1,4,7);


function addYearlyTotal(a,b,c){
  return a+b+c;
}

let yearlyTotal = addYearlyTotal(...monthSales);


let numArray1 = Array.of(120, 200, 300);
let numArray2 = Array.of(220, 100, 150);
let numArray3 = Array.of(210, 130, 300);

let totalNum = Array.of(...numArray1, ...numArray2, ...numArray3);


// Exploring Typed Arrays
 // Typed Arrays : Array-like objects that provide a mechanism for accessing raw binary data
 // Benefits of Typed Arrays >
    // accessing raw binary data
    // faster performance
    // strictly controlled data
    // APIs that supported typed arrays

 // Standard Arrays vs. Typed Arrays
    // standard arrays accept most data types but typed arrays restricted data types
    // standard arrays has standard variable storage but typed array has binary data
    // typed array has faster processing
    // typed array once in View, acts like array
    // using in native APIs

// Creating typed arrays buffer

let testBuffer = new ArrayBuffer(16);

if(testBuffer.byteLength == 16){
  console.log("Yes");
}

let view1 = new Int8Array(testBuffer);

view1[0] = 32;
console.log(view1);

let view2 = new DataView(testBuffer);
view2.setInt8(2, 42);



