// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

console.log(letters); // viser hele arrayet. ikke pænt dog.

//iterere igennem et for-loop

//Vi deklarerer loopen med let, i stedet for Number, som man ville havde gjort i java(int)
for (let i = 0; i < letters.length; i++) {
console.log(letters[i]);
}

// viser b i consolen:
console.log(letters[1]); //starter også på0





// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push({ navn: "Henning", alder: 67 });
friends.push({ navn: "Ilsebeth", alder: 50 });
friends.push({ navn: "Sigurd", alder: 38});

console.log(friends);

for (let g = 0; g < friends.length; g++) {
    console.log(friends[g].navn, friends[g].alder);
    
}


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

//talte ikke. :)
console.log(significantMathNumbers.indexOf(1729)); // viser index 3



// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

// vi vil gerne ændre ved index 2, og fjerne 0 elementer. 
//Så vi tilføjer bare de 3 nye elementer.
diet.splice(2, 0, "Hamburger", "Soda", "Pizza");

console.log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop();
console.log(diet); //fjerner Rocket, så det er Pizza der vises som sidstre.





// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

//haha nu forsåt jeg kommentaren i opgave 5, om at være for fuld.

// SPREAD operatøren:
//Kopirer alt fra et array til en ny array, som hedder dinnerTray
const dinnerTray = [...diet];

console.log(dinnerTray);



// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

//iterer igennem arrayet med et for-loop, ogsom så kun logger hver anden.
for (let f = 1; f < lettersExpanded.length; f += 2) {
    console.log(lettersExpanded[f]); 
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers


for (let h = 0; h < numbers.length; h++) {
    if (numbers[h] > 6 || numbers[h] < 0) {
        console.log(numbers[h]);
        
    } else {
        discardedNumbers.push(numbers[h]);
    }
    
}

console.log(discardedNumbers);

// --------------------------------------


