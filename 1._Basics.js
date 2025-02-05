// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(firstName, lastName);
console.log("First name is: ", firstName);
console.log("Last name is: ", lastName);

const introduction = `My full name is ${firstName} ${lastName}`;
console.log(introduction);

console.log("My name is....: " + firstName, lastName);


// ASI - Automatic semicolon insertion. 
//man beøver ikke semi-kolon til slut. 
// hvad du vælger skal du holde dig til, hele vejen igennem en applikation. 
//viser hvad een statement er eller eks. en funktion. 





// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

// Add the year plus the increment

console.log(Number(year) + increment); // giver NaN, hvis der er bogstaver i.
console.log(parseInt(year) + increment);

//for at konvertere en string til et number hvis man lægger plus foran.
console.log(+year + increment);

const isItANumber = "345445gfd7"

//forskellen for disse.

console.log(Number(isItANumber)); //fejler med NaN = Not A Number.
console.log(parseInt(isItANumber));// forcerer tallene frem, uden at fejle. (tager ikke 7-tallet med til slut)

// The result should be 2025
// You cannot touch the first or the second line





// --------------------------------------
