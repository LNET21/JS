const btn = document.querySelector('#btnAlert');
const form = document.querySelector('#loginForm');


  // btn.addEventListener('click', function() {
  //   alert('eventet gick')
  // })

  // btn.addEventListener('dblclick', function() {
  //   alert('eventet gick')
  // })
  
  // btn.addEventListener('mousedown', function() {
  //   alert('eventet gick')
  // })
  
  // btn.addEventListener('mouseup', function() {
  //   alert('eventet gick')
  // })
  
  // btn.addEventListener('mouseenter', function() {
  //   alert('eventet gick')
  // })
  
  // btn.addEventListener('mouseleave', function() {
  //   alert('eventet gick')
  // })



//   form['firstName'].addEventListener('keyup', e => {
//     console.log(e.key)
//   })


  // form['firstName'].addEventListener('keydown', e => {
  //   console.log(e.key)
  // })


//   form['firstName'].addEventListener('focus', function(e) {
//     console.log('skriv i ditt namn');
//     this.classList.add('focus')
//   })

  // form['firstName'].addEventListener('focus', e => {
  //   console.log(e);
  //   console.log('skriv i ditt namn   FOCUS');
  //   e.target.classList.add('focus')
  // })


  // form['firstName'].addEventListener('blur', function(e) {
  //   console.log('gick ifrån inputen    BLUR');
  //   this.classList.remove('focus')
  // })


  // form['select'].addEventListener('change', function() {
    
  //     console.log(this.value)
  // })


  form.addEventListener('submit', e => {
    e.preventDefault();
    
    console.log('validerar formuläret');
    console.log('validering klar! skickar till databasen')
    form.reset();
  })

  // const formBtn = document.querySelector('#formBtn');

  // formBtn.addEventListener('click', e => {
  //   e.preventDefault();

  //   console.log('validerar formuläret');
  //   console.log('validering klar! skickar till databasen')
  //   form.reset();
  // })