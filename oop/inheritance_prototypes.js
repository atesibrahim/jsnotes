'use strict'; 
(function() {
    let myFunction = function() { }

    display(myFunction.prototype);


    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    Person.prototype.age= 30; // access via prototype and change

    let ibrahim = new Person('Ibrahim', 'Ates');
    let vera = new Person('Vera', 'Ates');
    vera.age=0;  // access to set directly. this will override prototype age

    display(ibrahim.__proto__);
    display(vera.__proto__);

    display(vera.age); // when you access any properties via prototype that because of sharable it will first definition 
                       // but when you set properties direct and access directly, then just instance will be changed.

    display(vera.hasOwnProperty('age'));  // we define age for vera object, that is why vera has own property

    // A function's prototype : The object instance that will become the prototype for all objects created using this function as a constructor
    // A object's prototype : The object instance from which the object is inherited

})();