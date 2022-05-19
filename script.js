// ## Question 1 of 25
// ---
// ​
// Create a function named getLength which takes a string as an argument and returns the length of the string.
// ​
// **For example:**

// getLength('foo') should return 3
// getLength('hello') should return 5

 
// ---
// ​
// ## Question 2 of 25
// ​
// Create a function named concatenate which takes two strings as arguments and returns a single string composed of those two strings without spaces.
 
// **For example:**

// concatenate('foo','bar') should return 'foobar'
// concatenate('hello','world') should return 'helloworld'

// ---
// ​
// ## Question 3 of 25
// Create a function named difference which takes two integers as arguments and returns the absolute value of the difference.
 
// **For example:**

// difference(1, 2) should return 1
// difference(-5, 5) should return 10

// ---
// ​
// ## Question 4 of 25
// Create a function named isOdd which accepts an integer as an argument and returns true if the value is odd. An odd integer is not wholly divisible by two.
 
// **For example:**

// isOdd(4) should return false
// isOdd(5) should return true

// ---
// ​
// ## Question 5 of 25
// Create a function named addTwo which takes an array of integers as an argument and returns an array where each value has been incremented by two.
 
// **For example:**

// addTwo([1, 2, 3]) should return [3, 4, 5]
// addTwo([0, 0]) should return [2, 2]

// ---
// ​
// ## Question 6 of 25
// Create a function named convertHexadecimal which takes as an argument a string representing a hexadecimal integer (base-16) and returns a decimal integer (base-10).
 
// **For example:**

// convertHexadecimal('10') should return 16
// convertHexadecimal('af') should return 175

// ---
// ​
// ## Question 7 of 25
// Create a function named onlyTruthy which takes as an argument an array of values and returns an array consisting of only those values which are truthy (equivalent to true).
 
// **For example:**
// ​

// onlyTruthy([false, true, true]) should return [true, true]
// onlyTruthy([0, 1, '', 'a']) should return [1, 'a']
 
// ---
​
// ## Question 8 of 25
// Create a function named sum which takes as an argument a non-empty array of integers and returns the sum of those integers.
 
// **For example:**

// sum([1, 2, 3]) should return 6
// sum([0, 4, 4, 4]) should return 12

// ---
​
// ## Question 9 of 25
// Create a function named removeVowels which takes a string as an argument and returns that string with all vowels removed.
 
// Vowels are considered the following characters: `a, e, i, o, u, A, E, I, O, U`
 
// **For example:**

// removeVowels('Hello World') should return 'Hll Wrld'
// removeVowels('FOOBAR') should return 'FBR'

// ---
// ​
// ## Question 10 of 25
// Create a function removeDuplicates which takes a non-empty array as a value and returns an array with only one copy of any of the original array's values.
 
// **For example:**

// removeDuplicates([0, 0, 1, 2, 2]) should return [0, 1, 2]
// removeDuplicates(['a', 'a', 'a']) should return ['a']

// ---
// ​
// ## Question 11 of 25
// Create a function named join which takes two arrays as argument and returns a single array consisting of all the values of those two arrays.
 
// **For example:**

// join([0, 1], [1, 2]) should return [0, 1, 1, 2]
// join(['a', 'b'], ['c']) should return ['a', 'b', 'c']

// ---
// ​
// ## Question 12 of 25
// Create a function named getLast which takes a non-empty array of unspecified length and returns the last element of the array.
 
// **For example:**

// getLast([1, 2, 3]) should return 3
// getLast([9, 7, 5]) should return 5

// ---
// ​
// ## Question 13 of 25
// Create a function named reverse which takes a non-empty array as an argument and returns a reversed array without mutating the input.
 
// **For example:**

// reverse([1, 2, 3]) should return [3, 2, 1]
// reverse([1, 0]) should return [0, 1]

// ---
// ​
// ## Question 14 of 25
// Created a function named toArray which takes an unspecified number of arguments and returns an array with those arguments as values.
 
// **For example:**

// toArray(1, 2, 3) should return [1, 2, 3]
// toArray('a') should return ['a']
 
// ---
// ​
// ## Question 15 of 25
// Create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.
 
// **For example:**

// allGreaterThanThree(1, 3, 5) should return false
// allGreaterThanThree(4, 6) should return true

// ---
// ​
// ## Question 16 of 25
// Create a function named anyGreaterThanThree which accepts an unspecified number of integer arguments and returns true if any passed argument is greater than 3.
 
// **For example:**

// anyGreaterThanThree(2, 3) should return false
// anyGreaterThanThree(2, 3, 4) should return true

// ---
// ​
// ## Question 17 of 25
// Create a function named getValues which takes an object and returns an array of the enumerable property values of the object.
 
// **For example:**

// getValues({ a: 1, b: 2}) should return [1, 2]
// getValues({ c: 'foo' }) should return ['foo']

// ---
// ​
// ## Question 18 of 25
// Create a function named arity which takes a function as an argument and returns the number of defined arguments the function accepts.  
 
// **For example:**

// If,
 
// const add = (a, b) => a + b
// const addOne = (a) => a + 1
 
// Then,
 
// arity(add) should return 2
// arity(addOne) should return 1

// ---
// ​
// ## Question 19 of 25
// Create a function called functionalize which takes a value and returns a function, which when executed, returns that value.
 
// **For example:**

// functionalize('a')() should return 'a'
// functionalize(false)() should return false
 
// ---
// ​
// ## Question 20 of 25
// Create a function named compose which accepts an unspecified number of single-argument functions as arguments and returns a function which executes those functions from left to right.
 
// **For example:**

// If,
 
// const addOne = (a) => a + 1;
// const multiplyByTwo = (b) => b * 2;
 
// Then,
 
// compose(addOne, multiplyByTwo)(3) should return 8.
 
// ---
// ​
// ## Question 21 of 25
// Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault.
 
// **For example:**

// setDefault(72)(true) should return true
// setDefault('foobar')(false) should return 'foobar'

// ---
// ​
// ## Question 22 of 25
// Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter.  The function should return the value found after treating each string as a key traversing the object.  If the path does not exist, the function should return undefined.
 
// **For example:**

// safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2
// safelyTraverse({}, ['a', 'b']) should return undefined

// ---
// ​
// ## Question 23 of 25
// Create a function named throwOn2 which accepts an integer as an argument and returns the integer if it is not 2.  If it is 2, the function should throw an error with message "2 is not allowed."
 
// **For example:**

// throwOn2(3) should return 3
// throwOn2(2) should throw an error and error.message should be "2 is not allowed"

// ---
// ​
// ## Question 24 of 25
// Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.
 
// **For example:**

// await promisify(2) should return 2
// await promisify(3).then(val => val + 1) should return 4

// ---
// ​
// ## Question 25 of 25
// Create a function named promisifyFunction which takes a synchronous function fn with an unspecified argument signature as an argument and returns a function with the same argument signature that returns a promise which resolves to the output of fn with passed arguments.
 
// **For example:**

// If,
 
// const add = (a, b) => a + b
// const multiplyByTwo = (c) => c * 2
 
// Then,
 
// await promisifyFunction(add)(1, 1) should return 2
// await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7