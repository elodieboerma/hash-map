import { HashMap } from './index.js';

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dogs', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grapes', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);

test.set('apple', 'pink')
test.set('dogs', 'red')
test.set('kite', 'brown')
console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);

test.set('moons', 'silver')
console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);

test.set('elephant', 'white');
test.set('grapes', 'green');
test.set('jacket', 'red');
console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);

//for get(key)
//console.log(`get(apple): ${test.get('apple')}`);

//indexes b/f doubling capacity are same as after
//but they are printed correctly with their keys and values, just not in hashmap
//length property inside of hashmap after doubling capacity is equal to number of
//unique keys times two, plus the three values changed after doubling
//also apple no longer exists b/f or after doubling capacity

//for has(key)
console.log(`has(banana): ${test.has('banana')}`);

//for remove(key)
console.log(test.remove('carrot'));
console.log(test);
console.log(test.capacity);
console.log(test.length);

/*
//for length
console.log(test.length);

//for clear
console.log(test.clear());
console.log(test);
console.log(test.capacity);
console.log(test.length);

//for keys()
console.log(test.keys());

//for values()
console.log(test.values());

//for entries()
console.log(test.entries());
*/