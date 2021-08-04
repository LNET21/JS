
/* 
    DOM - Document Object Model
*/

//  console.log(window);
//   console.log(document);
//   console.log(document.body);
//   console.log(document.body.children);

let p1 = document.getElementsByTagName('p');
//console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
// console.log(p2);

let p3 = document.getElementById('para');
 //console.log(p3);



 // med query selector

let q1 = document.querySelector('p');
 //console.log(q1);

let q2 = document.querySelector('.paragraph');
// console.log(q2);

let q3 = document.querySelector('#para');
// console.log(q3);

let q4 = document.querySelector('div.paragraph');
// console.log(q4);

let q5 = document.querySelectorAll('p');
 console.log(q5);

 q5.forEach(node => {
    // console.log(node);
 });



 for(let i = 0; i < p1.length; i++){
     //console.log(p1[i]);
 }


let list = document.querySelector('#list');
console.log(list);
console.log(list.children); //Htmlcollection

list.childNodes.forEach(li => {
    console.log(li);
})

for(let i = 0; i < list.children.length; i++){
    console.log(list.children[i]);
}

// console.log(list.parentNode);
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.children[0]);
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);
// console.log(list.previousSibling);
// console.log(list.previousElementSibling);

let item3 = document.querySelector('#list > li:nth-child(3)');
console.log(item3);