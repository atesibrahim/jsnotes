// refers to an object
// that object in which current code is running
// sometimes the object can be changed


let  person =  {
    firstName : "Ibrahim",
    lastName : "Ates",
    fullName : function(){
        return this.firstName + "" + this.lastName;
    }
}// this = person object literal


// using this keyword
   // Diferent value based on execution context
   // In a method : owner project
   // In a function : global object
   // In an event : element that received the event
   // call() / apply methods refers to object passed in
   // 'use strict' also affects 'this'


// call / apply

let  personObj =  {
    firstName : "Ibrahim",
    lastName : "Ates",
    fullName : function returnFullName(){
        return
        this.firstName + "" + this.lastName;
    }
}

let personObj2 = {
    firstName : "Halil",
    lastName : "Ats"
}

// Call using reference to 'personObj' properties
console.log(personObj.returnFullName.call(personObj));

// Call using reference to 'personObj2' properties
console.log(personObj.returnFullName.call(personObj2));

console.log("");


// Call using reference to 'personObj' properties
console.log(personObj.returnFullName.apply(personObj));

// Call using reference to 'personObj2' properties
console.log(personObj.returnFullName.apply(personObj2));