const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');

const changeText = () => {
    div1.innerText = "Ny text";
}


// btn.addEventListener('click', function() {
//       let nextSibling = this.nextElementSibling;
//       console.log(nextSibling);
//        this.nextElementSibling.innerText = 'Banan';
//        var h1 = document.createElement('h1');
//        h1.innerText = 'Paj';
//        nextSibling.append(h1);
//     });

btn.addEventListener('click', (event) => {
    console.log(this);
    console.log(event.target);
    // div2.style.backgroundColor = '#cecece';
    //div2.classList.add('upper');
    //div2.classList.remove('upper');
  
    if(div2.classList.contains('upper')) {
     // div2.classList.remove('upper');
      btn.innerText = 'Gör texten Stor';
    } else {
     // div2.classList.add('upper');
      btn.innerText = 'Gör texten Liten';
    }

    div2.classList.toggle('upper');
  
    // div2.innerText = `
    // <ul>
    // <li>asd</li>
    // <li>asdasf</li>
    // <li>asasfd</li>
    // </ul>
    // `
    div2.innerHTML += `
    <ul>
      <li>asd</li>
      <li>asdasf</li>
      <li>asasfd</li>
    </ul>
    `
    
  })