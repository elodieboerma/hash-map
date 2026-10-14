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

/*
test.set('apple', 'pink')
test.set('dogs', 'red')
test.set('kite', 'brown')
*/

/*
test.set('moons', 'silver')
*/

/*
test.set('elephant', 'white');
test.set('grapes', 'green');
test.set('jacket', 'red');
*/

/*
//for get(key)
console.log(`get(apple): ${test.get('apple')}`);
*/

//indexes b/f doubling capacity are same as after
//but they are printed correctly with their keys and values, just not in hashmap
//length property inside of hashmap after doubling capacity is equal to number of
//unique keys times two, plus the three values changed after doubling
    //not sure if this matters, but it doesn't affect any tested code

//also apple no longer exists b/f or after doubling capacity

/*
//for has(key)
console.log(`has(banana): ${test.has('banana')}`);
*/

/*
//for remove(key)
console.log(`carrot removed: ${test.remove('carrot')}`);
/*

/*
//for clear
test.clear();
console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);
*/

/*
console.log(`keys: ${test.keys()}`);
console.log(`values: ${test.values()}`);
console.log(`entries: ${test.entries()}`);
*/

console.log(test);
console.log(`capacity: ${test.capacity}`);
console.log(`lengthOfArray: ${test.lengthOfArray()}`);
