// console.log("hey");
// // alert

// //assigning a variable
// var name = "John";
// counter = 0;

// truthStatement = true;

// console.log(truthStatement);

// var object = {
//     name: "anil",
//     phone: 10000,
//     isMember: true
// }

// console.log(object.name);

// Array_number =[ 100, 200, 300];

// console.log(typeof Array_number)
// console.log(Array_number [0]);

//  sum =( a, b) =>{
//     return a +b;
// }

// console.log(sum (1,2));

// today = new Date();

// console.log(today);

// console.log(typeof today);

// console.log(typeof Array_number);

// console.log(typeof sum);

// console.log(Math.PI);

// const grade = 49;

// if (grade >= 80){
//     console.log("A grade")
// } else if(grade >= 60){
//     console.log("B grade")
// } else if(grade >= 40){
//     console.log("C grade")
// }else{
//     console.log("F grade")
// }

// var ternary = 9;
// var temporaryVariable = 0;

// temporaryVariable =  ternary == 10 ? ternary : ternary ==9? 90 : 100;

// console.log(temporaryVariable);

// a = 9;
// b = 5;

// y = a < 10 ? a * 4 : b==5 ? b * 3 : 0;

// console.log(y);

// let variable = 10;

// try{
//     let variable = 10;

// }
// catch (error){
//     console.log(error());
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// i =0 ;
// while (i<10) {
//     console.log(i);
//     i++;
// }

// i=8;
// do {
//     console.log("Do while")
//     i++;
// } while (i<10);

// var object ={
//     name: "john",
//     phone: 1000,
//     lastname: "doe",
// };

// for (let element in object) {
//     console.log(element +" = " + object[element]);
// }

// Reverse a String
// Input a String and display its reverse
let string = "Hello";
let reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reverseString = reverseString.concat(string[i]);
}
console.log("The reverse of " + string + " is " + reverseString);

/*
Get Sum of Array Elements
Example input : [1, 2, 3, 4, 5]
output : 15
*/

let input = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < input.length; i++) {
  const element = input[i];
  sum = sum + element;
}
console.log("The sum of an array [" + input + "] is " + sum);

// check if a given string is a palindrome
// input : racecar
// output : true

let palindromeInput = "racecar";
let palindrome = "";

for (let i = palindromeInput.length - 1; i >= 0; i--) {
  palindrome = palindrome.concat(palindromeInput[i]);
}
if (palindrome == palindromeInput) {
  console.log("The word " + palindromeInput + " is palindrome");
} else {
  console.log("The word " + palindromeInput + " is not palindrome");
}

// Input a number and display all of its factors
// Input: 10
// Output : 1, 2, 5

let inputFactorial = 10;
console.log("Factor of " + inputFactorial + " are as follows:");
for (let i = 1; i < inputFactorial; i++) {
  const element = inputFactorial % i;
  if (element == 0) {
    console.log(i);
  }
}

// Find Largest Number in an Array
// [100, 20, 300, 10, 60]
// Output: 300

let number = [100, 620, 300, 10, 60];
let number1 = Math.max(100, 15, 10, 0);
let largestNumber = 0;
for (let i = 0; i < number.length; i++) {
  if (largestNumber < number[i]) {
    largestNumber = number[i];
  }
}
console.log(
  "The largest number in an array [" + number + "] is " + largestNumber
);
console.log(Math.max(...number));
console.log(number1);
// console.log("Alternative method, The largest number in an array [" + number1 + "] is " + Math.min(...number1));
// Count Vowels in a String
// Input: Hello World
// Output: 3

let inputString = "hello world";
let Vowels = "aeiou";
let vowelsCount = 0;
for (let i = 0; i < Vowels.length; i++) {
  for (let j = 0; j < inputString.length; j++) {
    if (Vowels[i] == inputString[j]) {
      vowelsCount++;
    }
  }
}
console.log("Total count of vowels are: " + vowelsCount);
// Alternative
let vowelCount = (inputString.match(/[aeiou]/gi) || []).length;
console.log(vowelCount);

// Remove duplicates from an Array
// [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9]
// Output: [1,2,3,4,5,6,7,9]

let inputDuplicate = [9, 9, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9];
let count = 0;
let removedDuplicate = [];
for (let i = 0; i < inputDuplicate.length; i++) {
  for (let j = i + 1; j < inputDuplicate.length; j++) {
    if (inputDuplicate[j] == inputDuplicate[i]) {
      count++;
    }
  }
  if (count < 1) {
    removedDuplicate.push(inputDuplicate[i]);
  }
  count = 0;
}
console.log(
  "array [" +
    inputDuplicate +
    "] after removed duplicates [" +
    removedDuplicate +
    "]"
);

// Factorial of a Number
// Input: 5
// Output: 120

let inputNumber = 5;
let factorial = 1;
for (let i = 1; i <= inputNumber; i++) {
  factorial = factorial * i;
}

console.log("The factorial of input " + inputNumber + " is " + factorial);

// Check for Prime Number
// Input :  7
// Output : Prime

let inputPrimeNuber = 18;
let c = 0;

for (let i = 1; i <= inputPrimeNuber; i++) {
  if (inputPrimeNuber % i == 0) {
    c++;
  }
}
if (c <= 2) {
  console.log("The input number " + inputPrimeNuber + " is Prime number");
} else {
  console.log("The input number " + inputPrimeNuber + " is Composite number");
}

// Temperature Converter
// Get temperature in Celsius and Output Temperature in Fahrenheit
// Input : 0
// Output : 32

let temperatureC = 16;
// let temperatureF = 0;

function temperatureF(temperatureC) {
  return (temperatureC * 9) / 5 + 32;
}

console.log(
  "Temperature Converted of " +
    temperatureC +
    " celuius to " +
    temperatureF(temperatureC) +
    " fahrenheit"
);

// Count Occurance of a character in a String
// String : ‘hello world’
// Character : ‘l’
// Output : 3

let OccuranceString = "hello world";
let character = "l";
let Occurance = 0;
for (let i = 0; i < OccuranceString.length; i++) {
  if (character == OccuranceString[i]) {
    Occurance++;
  }
}
console.log(
  "The count occurance of '" +
    character +
    "' in a string '" +
    OccuranceString +
    "' is " +
    Occurance
);

// Write a function that takes a value as argument. Return the type of the value.
function myFunction1(a, b) {
  if (a == b && a === b) {
    return 1;
  } else {
    return false;
  }
}

console.log(myFunction1("3", "3"));

// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
function myFunction2(a, n) {
  return a[n - 1];
}

console.log(myFunction2("hello", 1));

// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function myFunction3(a) {
  return a.substring(3, a.length);
}
console.log(myFunction3("hello world"));

// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

function myFunction4(a) {
  return a.slice(0, 3);
}

console.log(myFunction4("world"));

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

function myFunction5(a, b, c, d, e, f) {
    
  return (Math.pow(((((a + b) - c) * d) / e), f));
}
console.log(myFunction5(6,2,1,4,2,3));


// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function myFunction6( a , b){

    // return a.contain(b);
}

console.log(myFunction6("cheese", "cake"))