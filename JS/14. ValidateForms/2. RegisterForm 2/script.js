const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#output');

let users = [];

// document.querySelector('#firstName + .invalid-feedback').innerHTML = 'Heje'
// firstName.nextElementSibling.innerText = 'hej igen';

const validateText = id => {
  const input = document.querySelector('#' + id);
  const error = input.nextElementSibling;

  if(input.value === '') {
    error.innerText = 'You need to enter a name';
    input.classList.add('is-invalid');
    return false;
  } else if(input.value.length < 2) {
    error.innerText = 'The name must be at least 2 charachters long';
    input.classList.add('is-invalid');
    return false;
  } else {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  }
}

const validateEmail = id => {
  const input = document.querySelector('#' + id);
  const error = input.nextElementSibling;

  let regEx = /^\w+@[a-zA-Z]+?\.[a-zA-Z-]{2,}$/

  if(regEx.test(input.value)) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    return true;
  } else {
    error.innerText = 'Please enter a valid email address';
    input.classList.add('is-invalid');
    return false;
  }
}

const validate = () => {
  document.querySelectorAll('input').forEach(input => {
    if(input.type === 'text') {
      validateText(input.id);
    }

    if(input.type === 'email') {
      validateEmail(input.id)
    }
  })

}

const resetForm = () => {
  document.querySelectorAll('input').forEach(input => {
    input.value = '';
    input.classList.remove('is-valid');
  })
}


const createUser = (firstName, lastName, email) => {
  let user = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email
  }

  users.push(user);
  console.log(users);
}

const renderUsers = () => {

  output.innerHTML = '';

  users.forEach(user => {
    let template = `
    <div class="user d-flex justify-content-between align-items-center mb-4">
      <div class="text">
        <h3>${user.firstName} ${user.lastName}</h3>
        <small>${user.email}</small>
      </div>
      <div class="buttons">
        <button class="btn btn-primary">change</button>
        <button class="btn btn-danger">delete</button>
      </div>
    </div>
    `

    output.innerHTML += template;
  })

}


renderUsers();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate();
  // validateText('firstName');
  // validateText('lastName');
  // validateEmail('email');

  if(validateText('firstName') && validateText('lastName') && validateEmail('email')) {
    createUser(firstName.value, lastName.value, email.value);
    renderUsers();
    resetForm();
  }
})