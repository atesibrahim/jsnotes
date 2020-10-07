// Function is a block of organized, reusable code that is used to perform a single, related action.

   // Argument : is a value that we pass to the function when we invoke it
   // Parameter : is a variable that we list as part of a function definition

function logMessage(logMessaging) {
    console.log(logMessaging)
}

let myFunc = function loggingMessage() {
    console.log('here is my function message')
}

// Functions return values

function getSecretCode(value){
    let code = value + 5;
    return code;
}

// Function Scope
/*

let key = 42;
function getSecretCode(value){
 
    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
    
}
*/


// The arguments object
function printAll(){
    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
printAll(1,2,3); // 1 2 3


// IIFE : Immediately Invoked Function Expression 
// Function Expression define a function and assign it to a variable

/* IIFE example is like following

(function(){
    console.log('hello');
})();

*/

// Closures

/*
let greeting = (function(){
    let message = 'Hello';
    let getMessage = function(){
        console.log('hello');
    };
    return {
        getMessage : getMessage,
    };
})();

console.log(greeting.getMessage());

*/


// Arrow functions like java lambda expressions

// Regular Func

let greetRegular = function greetingsRegular(name){
    return 'Hello' + name;
}

let sumRegular = function sumR(num1, num2){
    return num1 + num2;
}

console.log(sumRegular(10,5));

// Arrow Func

let greetingsArrow = name => 'Hello ' + name;

let sumArrow = (name1, name2) => num1 + num2;


// Behavior of This keyword
// this refers to the owner of the function we are executing
// arrow function does not have own value



// Function Context and Built-in Functions

 // call()
 let person1 = {name: 'Ibr', age:30};
 let person2 = {name: 'Ahim', age:30};

 let sayHi = function(){
     console.log('Hi, '+this.name);
 }

 sayHi.call(person1); // Will print Hi, Ibr
 sayHi.call(person2); // Will print Hi, Ahim

 // apply()
 function intro(name, profession){
     console.log('My name is ' + name + 'and my profession is '+ profession);
     console.log(this);
 }

 intro('Vera', 'Baby');
 intro.apply(undefined, ['Ranya', 'Baby']);
 intro.call(undefined, 'Ranya', 'Baby');


 // call vs apply
   //  call  > individual arguments of varying type
   //  apply > array input with similar elements


// bind()

// Built-in functions
  // eval
  let x = 1;
  let y = 3;
  console.log(eval(x+y+1)); // will print 5

  // parseInt
  // parseFloat
  // escape
  // unescape


  // Default Parameters : Be aware of that default parameters always should come after regular parameters of functions
  function sayHi(message, name='Ibrahim'){
      console.log(message + name);
    }

    sayHi('Hello'); // will print Hello Ibrahim
    sayHi('Hello', 'Halil'); // will print Hello Halil


// Rest Parameters
function sayHi2(...names){
    names.forEach(name=>console.log('hi'+name));
  }

sayHi2('Ibr', 'Ahim'); // will print Hi Ibr and Hi Ahim

// Spread Operator
function sayHi3(name1, name2){
    console.log('hi '+name1 + ' and ' + name2);
  }
let namesS = ['Ibr', 'Ahim'];
sayHi2(...namesS); // will print hi Ibr and Ahim



function displayLetters(char1, char2, char3, char4){
    console.log(char1, char2, char3, char4);
  }
let letters = 'abcd';
displayLetters(...lettters); // will print a b c d