// An iterator lets you iterate through a collectiopn's contents
// one at a time pausing at each item

/* 
An array is a built-in iterable
There are other built-in iterables
Iterables implement the @@iterator method
Symbol.iterator a well known symbol in js
*/

/*
For of Loops
this type of loop only works with iterable objects
*/

const arr = [0,3,4,6];
const arrIterator = arr[Symbol.iterator]();  

for(let item of arr)
{
    console.log(arr.next())
}


const map = new Map();
map.set("name", "Ibrahim");
map.set("number", 123);
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);

for(const [key, value] of map){
    console.log(`${key} and ${value}`);
}


const mySet = new Set();
mySet.add('one');
mySet.add('two');

const setIterator = mySet[Symbol.iterator]();

for(const setItem of mySet){
    console.log(`${mySet}`);
}


// for creating custom iterators please look readFile.js under json folder

// generator functions
  //executing the generator function alone does not execute its containing code
function* timeStampGenerator(){
    console.log(Date.now());
}

timeStampGenerator(); // If you type this only, the generator code inside wont be execute

//
function* timeStampGenerator2(){
    console.log(Date.now());
}
const it2 = timeStampGenerator2(); // Instead above we must use iterator
it2.next();


for(const val of it2){
  console.log(val);
}

// Yield : signals the pause point of a generator func
function* timeStampGenerator3(){
    console.log(Date.now());
    yield;
    console.log('execution continued')
}
const it3 = timeStampGenerator3(); // Instead above we must use iterator
it3.next();
it3.next();
