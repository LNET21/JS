const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];
// const namesArray = [];

const usersArray = [
  {id: '1', name: 'Jo123akim', email: 'joakim@mail.com', age: 34, status: true},
  {id: '2', name: 'Jeane123tte', email: 'jeanette@mail.com', age: 33, status: false},
  {id: '3', name: 'Ja123ck', email: 'jack@mail.com', age: 5, status: false},
  {id: '4', name: 'Co123lin', email: 'colin@mail.com', age: 3, status: false},
  {id: '5', name: 'Vi123nce', email: 'vince@mail.com', age: 1, status: false},
  {id: '6', name: 'L123im', email: 'liam@mail.com', age: 15, status: true},
  {id: '7', name: 'Wi123lle', email: 'wille@mail.com', age: 9, status: false}
]

let numberOfUsers = 0;

// hämta ut ett specifikt värde
// console.log(usersArray[1].name);

// FOR LOOPAR

// Loopa ett givet antal gånger
// for (let i = 0; i < 5; i++) {
//   // console.log(i);
//   console.log(i, namesArray[i]);
// }

// Loopa igenom en hel array med en FOR
// console.log(namesArray.length);
// for(let i = 0; i < namesArray.length ; i++) {
//   console.log(namesArray[i]);
// }


// FOR OF - loopar igenom allt i en given array
//Foreach

// man kan själv välja vad man vill att varje sak i arrayen ska kallas
// for(let name of namesArray) {
//   console.log(name);
// }

// console.log(usersArray);

// for(let user of usersArray) {
//   console.log(user);
//   console.log(user.name);
// }

//Loopar på medlemmarna i objektet
// for(let prop in usersArray[0]){
//   console.log(prop);
// }

// WHILE

// let i = 1;
// while (i < 5) {
//   console.log('while: ' + i);
//   i++; // kom ihåg att inkrementera i! annars blir det en oändlig loop
// }

// console.log('i är ' + i);


// // DO WHILE - kommer att göra actions minst en gång

// do {
//   console.log('do while: ' + i);
//   i++; // kom ihåg att inkrementera i! annars blir det en oändlig loop
// } while(i < 7);

// console.log('i är ' + i);


/* 
  while/do-wile: vill vi använda till ett viss tillstånd är uppfyllt.

    "Är jag uppkopplad? NEJ, okej, då försäker jag koppla upp mig"
    "Så länge det är för varmt. -Kör fläkten."

  for
    
    loopa igenom ett givet antal gånger.. -Vi vill skriva ut någonting 5 gånger eller tex.
    visa dom 10 sista meddelandena.
  
  for-of

    När vi vill loopa igenom ALLA objekt oavsett hur många det är

*/


// HIGH ORDER ARRAY METHODS

// FOR EACH -loopa igenom en hel array

// namesArray.forEach(function(name) {
//   console.log('name: ' + name);
// });

// namesArray.forEach((name, i, arr) => {
//   console.log(name);
//   console.log(i);
//   console.log(arr[i + 1]);
// })

// usersArray.forEach(user => {
//   console.log(user.name, user.age);
//   numberOfUsers ++;
//   namesArray.push(user.name);
// })

// console.log(namesArray);
// console.log(numberOfUsers);


// //MAP - returnerar en ny array beroende på vad vi väljer

// const userEmails = usersArray.map(user => {
//   return user.email;
//   // return {
//   //   name: user.name,
//   //   email: user.email
//   // }
// })
// console.log(userEmails);


// FILTER

// const loggedIn = usersArray.filter(user => {
//   return user.status === true;
//   // return user.age > 14;
// })

// console.log(loggedIn);