// Spread Operator
 // expand any 'iterable' such as a string or array into an array
 // for passing multiple arguments to method
 // The syntax uses the ellipsis symbol (...)

function stringToArray() {
    let productNumber = "FR-R9";

    let values = [...productNumber];
    
    console.log(values); // ["F", "R", "-", "R", "9"]
    
}

// spread using for coppy array

function copyArray() {
    let arr = [1,2,3];
    let arr2 = [...arr]; // arr copied to arr2
    
}

// using spread for concatentation

let allPerson = personObj.concat(personObj2);  // using concat key

let sprPerson = [...personObj, ...personObj2]; // using spread 

// Spread in constructor

 
// Spread for shallow copy is similiar to object.assign