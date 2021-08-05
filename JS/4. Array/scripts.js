// ARRAYS - en lista med ett eller flera värden

names2 = [];         // GÖR INTE
// var names = [];     // UNDVIK
// let names = [];     // GÖR SÅHÄR
// const names = [];   // GÖR SÅHÄR


// Det här är INTE best practice
const multiArray = ['12', 12, true, {firstName: 'Joakim'}, [1,2,3,4], null];

// Det är är bättre
const array = [0, 1, 2, 3, 4];

// innehåller bara datatypen object, också ett bra sätt!
const users = [
  {firstName: 'Kalle', lastName: 'Anka', age: 34},
  {firstName: 'Fnatte', lastName: 'Anka', age: 33},
  {firstName: 'Tjatte', lastName: 'Anka', age: 5},
]

console.log(users[0].firstName);

let names = ['Kalle', 'Fnatte', 'Tjatte'];

// hämta information från en array
// console.log(names); // hela arrayen
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// .unshift() - Lägg till i början av en array
names.unshift('Kajsa');
// console.log('Med unshift: ' + names);

// .shift() - Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// .push() - Lägg till i slutet av en array
names.push('Kajsa');
// console.log('Med push: ' + names);

// .pop() - Ta bort i slutet av en array
names.pop();
// console.log('Med pop: ' + names);

// Ändra ett specifikt värde i en array
names[1] = 'Nytt Namn';
// console.log('Ändrat: ' + names);

// delete - tar bort värdet på en specifik plats i en array, men inte platsen
delete names[1];
delete names[names.indexOf('Nytt Namn')];
// console.log(names);

// .splice() - tar bort och/eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1
// console.log(names);
names.splice(1, 0, 'Kajsa', 'Pluto'); //tar bort 0 och lägger till Colin och Jeanette
// console.log(names);
names.splice(1, 2, 'Hans'); //tar bort 2 från index plats 1 och lägger till Hans
// console.log(names);

// Hur lång är en array
// console.log(names.length);
// hur långt är någonting inne i en array
// console.log(names[0].length); // fungerar bara om det vi försöker kolla på har en längd att få ut

// Lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Jeanette']));
names = names.concat(['Colin', 'Jeanette']);
console.log(names);

// sortera en array i bokstavsordning
// names.sort();
// console.log(names);

// Vänd på arrayen så först blir sist osv.
// names.reverse();
// console.log(names);

// sortera i bokstavsordning baklänges
// names.sort().reverse();
// console.log(names);


// array.map() - returnerar en array med utvalda värden från en befinitlig array
// Selct linq
const fNames = users.map(user => {
   return user.firstName;
});


// Hämta en indexplats av ett värde
let index = names.indexOf('Hans');
// console.log(index);

// När vi vill ha en indexplats om arrayen innehåller object
let userIndex = users.findIndex(u => u.firstName.toLowerCase() === 'kalle');

// returnerar hela objektet
// First, FirstOrDefault
let nr = array.find(nr => nr === 2);

// filtrerar en array baserat på ett värde
//Where
const notKalle = users.filter(user => 
   user.firstName !== "Kalle")

   console.log(notKalle);

users.forEach(user => {
  const { firstName, lastName } = user
  // console.log(`Name: ${firstName} ${lastName}`)
  document.body.innerHTML += `
  <p>Name: ${firstName} ${lastName}</p>
  `
})
