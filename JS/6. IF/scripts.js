

let number = 13;
let string = '13';

// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 10);
// större eller lika med
// console.log(number >= 13);

// mindre än
// console.log(number < 10);
// mindre eller lika med
// console.log(number <= 13);


//  två = tecken jämför bara värdet
 console.log(number == string);
// tre = jämför värdet OCH datatyp
 console.log(number === string);


 console.log(number != string);

 console.log(number !== string);


// IF SATSER

if(string == number) {
    // Jämför värder
    // console.log('Påståendet är sant: string == number')
}

if(string === number) {
    //Jämför värdet och datatyp 
    // console.log('Påståendet är sant: string === number')
}

/*
 .   !=     om det inte är lika med
 .   !==    om det inte är lika med och inte har samma datatyp 
*/

if(string != number) {
    // console.log('Påståendet är sant: string != number')

}

if(string !== number) {
    // console.log('Påståendet är sant: (string !== number)')
}

/*
    <       mindre än
    >       större än
    <=      mindre eller lika med
    >=      större eller lika med
*/

/*
    &&      och
    ||      eller
.   !       inte
*/

let st = '15';
let nr = 13;

if(st > nr) {
    // console.log('st är större än nr');
}
if(typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}
if(st > nr && typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}
if(st > nr || typeof st == typeof nr) {
    // console.log('st är större är nr men dom har inte samma datatyp');
}
if(st > nr && typeof st != typeof nr) {
    // console.log('st är större än nr OCH det är INTE samma datatyp, Allt måste vara sant')
}
if(st > nr || typeof st != typeof nr) {
    // console.log('st är större än nr ELLER det är INTE samma datatyp, Ett av påståendena måste vara sant')
}



if(typeof st == typeof nr) {
    // console.log('st är samma datatyp som nr');
}else if(typeof st != typeof nr) {
    // console.log('st är INTE samma datatyp som nr')
}


//Ternary
//condition ? expression : expression;

let res = st < nr ? 1 : {name: 'kalle'} ;
console.log(res);