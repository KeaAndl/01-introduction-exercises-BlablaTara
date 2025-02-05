// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

//Number kan bruges både til heltal, og decimaler.
console.log(Number(numberOne) + Number(numberTwo));


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals
console.log("Opgave 4");

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log(anotherNumberOne + anotherNumberTwo); // bliver 1.12.30
console.log(parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)); // 3.4

// .toFixed(x) - sætter hvor mange decimaler man vil have efter.
console.log((parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average
console.log("Opgave 5");

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avg = 10 + 45 + 98 / 3;
console.log(avg); //uden 5 decimaler
console.log(avg.toFixed(5)); // med 5 decimaler.


// --------------------------------------
// Exercise 6 - Get the character by index
console.log("Opgave 6");

const letters = "abc";
// Get me the character "c"

//charAt() 
console.log(letters.charAt(2)); //Virker fordi vi ved hvilke plads den har.
// []
console.log(letters[2]); // Smart, igen hvis man kender indexet.

//Første gang bogstavet kommer i Stringen.
console.log(letters.indexOf("c")); // printer ikke "c", men indexet hvor "c" er.





// --------------------------------------
// Exercise 7 - Replace
console.log("Opgave 7");

const fact = "You are learning javascript!";

// capitalize the J in Javascript

//Replace.
const lilleTilStor = fact.replace("j", "J");
console.log(lilleTilStor);


const jIndex = fact.indexOf("j"); // giver 17.
const LilJToBigJ = fact.charAt(jIndex).toUpperCase() + fact.slice(18);
// med slice, kommer resten af ordet, men ikke orende før.
// ikke et godt resultat.
console.log(LilJToBigJ);




// --------------------------------------



