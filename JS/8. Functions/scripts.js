namnetPåFunc();

//Named function
//Hoisting (läggs först i filen)
function namnetPåFunc() {
    //här skriver vi den kod vi vill ska köras när vi kallar på funktionen.
    console.log('hej på dig du');
}

//Function expression
//Vi kommer inte åt funktionen före den är deklarerad
let greet = function() {
    console.log('hej hej')
}

greet();
greet = 34;
console.log(greet);



const greet2 = name => {
    return `Hej ${name}`
  }

const greet3 = name => `Hej ${name}`

const greet4 = function(){
    return `Hej ${name}`
}

let result = greet4();
console.log(result);

// Callback functions

const func1 = callback => {
    let value = 'test';
    callback(value);
  }

  func1(vadSom => { 
    //här har jag automatiskt tillgång till parametern som skickas från den första functionen
    // Här kan jag välja vad jag vill göra med den parametern
    console.log(vadSom);
  })

  // Exempel på en callback funktion
//let names = ['Kalle', 'Kajsa', 'Joakim', 'Lucas']

// names.forEach(name => {
//   console.log(name)
// })

let user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    fullName: function() {   //this är objektet. Använd en vanlig funktion i det här fallet
      console.log(this);
      return this.firstName + ' ' + this.lastName;
    },
    fullName2: () => {
      console.log(this)     //Med arrow funktion är this i det här fallet window objektet
      return this.firstName + ' ' + this.lastName;
    }
  }

  console.log(this);
  console.log(user.fullName());
  console.log(user.fullName2());


 //arguments är en array av argumenten metoden tar emot när den kallas på
  //bra att använda när man skickar in för många argument! Enda sättet att "fånga" dessa
  let result = argumentsExample('Kalle', 'Kajsa', 'Fnatte');
  
  function argumentsExample() {
     for(let para of arguments){
       console.log(para);
     }
  }