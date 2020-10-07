// In js we have 8 data types
// Boolean > primitives
// Null > primitives
// Undefined > primitives
// Number > primitives
// BıgInt > primitives
// String > primitives
// Symbol > primitives
// Objects > value in memory which could be referenced by an identifier


// Sets
// sets enables you to store unique values of any type, whether primitive values oor object references

const setDef = new Set();

function addSet() {
  setDef.add(5);
  setDef.add(10);
}

// second way to add to set
setDef.add(7).add(9);


function deleteFromSet() {
  setDef.delete(5);
}

// Iterating a Sets
for (let item of setDef) console.log(item);


// Differense between set and weakSet
// WeakSet > 
//   only contain objects
//   no primitive data types
//   objects are held weakly
//   not iterable
//   no access to size property
//   garbage collected
//   just add(), delete() and has() methods

const categories = new WeakSet();
let asus = { category: 'Computer' };
categories.add(asus);


// Maps
// map uses key-value pairs and keeps the original insertion order of the keys.
// Any value(objects and primitive types) may be used as either a key or a value.

const mapInro = new Map();

mapInro.set(1, 'one');
mapInro.set(2, 'two');

// find in map
mapInro.get(1);

// deleted in map
mapInro.delete(2);

// has method
mapInro.has(1); // will return true if has that key, if not then return false

// modify map
mapInro.set(1, 'modified one')

// Iterating thorugh a map
// used forEach and for of as using in set 

for (const [key, value] of mapInro) {
  console.log(key + ' ' + value)
}


// Differences between map and objects
 // map is faster
 // map's key can be any data type but object not.
 // Object's key must be simple data types as Integer, String, Symbols. But map key would be any type.
 // map is element order. Guarantied insertion order
 // functional differencies like creating, checking, adding, getting



// Differences between map and weakmap
 // weakmap's key must be object
 // not iteratable
 // garbace collected
 // weakmap is not enumarable
 // weakmap has delete, get, set, has method