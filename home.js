let price = 49.99; // for declaring variables use let
let name = 'Boots';
let discounted = false;

const price2 = 123.90; // for declaring constant use const

var text = ''; 
/*
 for declaring variables we can use var. 
 But it does not recommended. Because when you define variables with
 var keyword, then u can use that keyword before setted without error.
 That is a bit confusing.


  showMessage(messageName);
  var messageName = 'asasd';  // This code block will work but do not show anything but we must get error.


  showMessage(messageName);
  let messageName = 'asasd'; // this code will throw error as expected.



 */

 price = price + 1; // we can use as price +=1, also ++price can be used

 let saved = false;
 saved = !saved;


showMessage(saved);

/* Operator Precendence > mdn operator precendence*/
// let price = 2 + 3 * 3; // multiplaction and division first, addition and 


// Objects and Symbols

let person = {
    firstName : 'Ibrahim',
    lastName : 'Ates'
};

showMessage(person.firstName);

// comparing === and == 

if(1=="1"){}  // the result of if is true with == but actually is not equal
if(1==="1"){}  // the result of if is false with ===

//!! the best practice is that using === for equality check
//!! the best practice is that using !== for inequality check


// The Ternary Operator : condition ? true-statement : false-statement

let message = (price > 10) ? 'expensive' : 'cheap'

showMessage(message);  // will show expensive


// Block Scope Using let

// for() Loop
for (let i=0; i<3; i++){
    console.log(i);
}


// while() Loop
let count = 1;
while(count<5){
    count++;
}

// Looping do while() Loop
count = 1;
do{
 console.log(count);
 count++;
}while(count<2)


logMessage('first message');
myFunc();


changePercentOff(30);


console.log(personObject.name);

objectMethods.showInfo(33);

showMessage(Math.abs(-50));
