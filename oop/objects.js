// js objects created as
  // object literals,
  // constructor functions
  // classes

let mySymbol = Symbol();

let personObject = {
    name: "Ibrahim",
    age:30,
    [mySymbol] : 'secretInformation' // this line is secret and could not see when wanted to list personObject
};


// we can use personObject.age or personObject["age"] to access personObject name



// Object Methods
let objectMethods = {
    name: "Ibrahim",
    age:30,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge);
    }
};



// Passing objects to function
let personObjectPass = {
    name: "Ibrahim",
    age:30
};

function incrementAge(personObjectPass) {
    personObjectPass.age++;
}

incrementAge(personObjectPass);

showMessage(personObjectPass.age);

// Standart built-in objects > look mdn mozilla developer
// Date, Maths bla bla...

let now = new Date();
showMessage(now.toDateString());


showMessage(Math.abs(-50));

// Object Data Type / Constructor
  // All object data types inherit from Object ( not primitives )
  //  Object has constructor property
  // Returns a reference to the object itself
  // Use helper functions to return constructor

  function isArray(value){
      return value.constructor.toString.indexOf("Array") > -1;
  }

  function isDate(value){
      return value.constructor.toString.indexOf("Date") > -1;
  }

  function isNullOrUndefined(value){
      return value == null || value == undefined;
  }

  // instanceOf operators works for only objects not primitives


    /* 1> Create Object with Object Literals*/

    let person = {
        firstName : 'Ibrahim',
        lastName : 'Ates',
        age : 30,
        isAdult : function() { return person.age >= 18;}   // function can be defined as isAdult() {return person.age >= 18;} 
      }
    
      //person.age = 30; we can add new entity to object as this line
    
      //person.isAdult = function() { return this.age >= 18;} // add function to object
    
      display(person.firstName);  // 
    
      /* create object way 2 of Object Literals*/
      function createUser(firstName, lastName) {
        let user = {
          firstName,  // this assigment called shorthend 
          lastName
        };
        display(user);
        
      }
    
      createUser('Vera', 'Ates');
    
      display(Object.keys(person)); // this will list person keys
    
      for (const propertyName in person) {
        display(propertyName); // also we can use for in for list person keys
      }
    
    
      let personNew = {};
      Object.assign(personNew, person);  // assign uses for copy person object to personNew object
    
      //Object.assign({}, personNew, person); // When we use like this, this assign newObject and exist object doesnt affect
      
    
      /* 2> Create Object with Constructor Object :
          created object using constructor
      */
    
      
    
      function personWithConstructor(fName, lName, ag) {
        this.firstName = fName,
        this.lastName = lName,
        this.age = ag,
        this.isAdult = function() { return this.age >= 18;}   // function can be defined as isAdult() {return person.age >= 18;} 
      }
    
      let Ibrahim = new personWithConstructor('Ibrahim', 'Ates', 30);
      display(Ibrahim);
    
      let Ranya = new personWithConstructor('Ranya', 'Ates', 0); 
      display(Ranya);
    
    
      /* 3> Create Object with Object.create :
          but this is verbose and doesnt prefer
      */
    
    
      // Object properties to writable true or false
      Object.defineProperty(Ranya, 'firstName', {writable: true});
      Ranya.firstName = 'Vera';
    
      /* Object getter and setter */
      Object.defineProperty(person, 'fullName', {
        get : function(){
          return this.firstName + ' ' + this.lastName;
        },
        set : function(value){
          var nameParts = value.split(' ');
          this.firstName = nameParts[0];
          this.lastName = nameParts[1];
        }
    
      });
    
      person.fullName = 'Brahim Ats'; // setter fullName
      display(person.fullName);  // getter fullName from person
    
    