//alert('hej');

//document.body.innerText = 'från script';

console.log(document);
console.log(document.body);

//afafafagfa; //Error koden avbryts


// skriver ut i consolen
console.log('Här skriver vi ut någonting in konsolen');
console.warn('Detta är en varning!');
console.error('Detta är ett felmeddelande!');

let age = 54; //globalt scope

//console.log(window.age);

const y = {
    name : 'kalle'
}

y.name = 'nisse';
console.log(y.name);


// SCOPE

/* 
  global scope - accessbar överallt i koden

  local scope - accessbar inom det givna området, innanför ett kodblock {}

*/

let name = 'nisse';

if(true) {
    let name = 'Kalle'     // local scope
    let age = 50;           //skapar en ny lokal age variabel
    // age = 2000;          // Ändrar på den globala age variabeln
    console.log('inne i första kodblocket ', age);
    console.log('inne i första kodblocket ', name);
  
    if(true) {
      let age = 100;
      let name = 'Hans';
      let lokal = 'hej';
      var globalt = 'var';
      console.log('inne i kodblock 1.2', age, name);
      console.log('inne i kodblock 1.2', globalt);
    }
  }

  globalt = "hej";

  //lokal = 5;
  
  let x = 'hej';
  x = [];
  x= 5;
  x = {};
  x = null;

  


 // console.log(lokal);
  console.log(globalt);

  tryIt();
  
  function tryIt(){
      var u = 34;
      console.log(u);
    }
    
//console.log(u);

//let vs var
function withVar(){
    console.log(i);
    var i = 20;
    console.log(i);
}

withVar();

function withLet(){
   // console.log(p);
    let p = 20;
    console.log(p);
}

withLet();

var var1 = 2;
let let1 = 2;

console.log(window.var1);
console.log(window.let1);