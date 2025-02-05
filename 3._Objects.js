// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(myObject.message);



// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const jegErMig = {
    navn: "Tara",
    alder: 35,
}

jegErMig.navn = "Morten"; //Kan deklarere/opdatere/ændre værdien udenfor "KEY".

console.log(jegErMig.navn, jegErMig.alder);

const hejHej = `Jeg hedder ${jegErMig.navn} og jeg er ${jegErMig.alder} år gammel`;
console.log(hejHej);


// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

// Lavet en Key-Value regl oppe ved objektet som indeholder mit navn som værdi.
//Skiftet Tara til Morten


// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

// Uden at fjerne, men bare KUN logge "about".
const about1 = thisSong.about = "Just a tribute." 
console.log(about1);


//Ferner og tilføjer som opgavebeskrivelsen siger.
const thisSong1 = { description: "The best song in the world." };

delete thisSong1.description;
thisSong1.about = "Just a tribute." 

//Viser hele objektet, og hvad den indeholder, { about: 'Just a tribute.'}
console.log(thisSong1);


// --------------------------------------


