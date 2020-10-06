let mySymbol = Symbol();

let personObject = {
    name: "Ibrahim",
    age:30,
    [mySymbol] : 'secretInformation'
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