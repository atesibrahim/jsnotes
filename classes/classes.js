'use strict'; 
(function() {
    class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
    }
    // using getter and setter
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(fullName){
        var nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}

 let ibrahim = new Person('Efra', 'Him', 30);
 ibrahim.fullName = 'Hal Ate';
 display(ibrahim.fullName);


 // class inheritance using constructor
 class Student extends Person{
     constructor(firstName, lastName, age){
         super(firstName, lastName, age);
         this._enrolledCourses = [];
     }
     enroll(courseId){
         this._enrolledCourses.push(courseId);
     }
     getCourses(){
         return this.fullName + "'s enrolled courses are: " +
         this._enrolledCourses.join(',');
     }

     // created static properties and methods
    
     static fromPerson(person){
         return new Student(person.firstName, person.lastName, person.age);
     }
 
 }

 let efra = new Student('Efra', 'Him', 30);
 efra.enroll('math');
 display(efra);

 let efraStudent = Student.fromPerson(efra);
 
 display(efraStudent);

})();