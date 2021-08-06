class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  loggedIn = false
  login() {
    this.loggedIn = true;
    console.log(`${this.firstName} has logged in`)
  }
}

const user1 = new User('Kalle', 'Anka');
const user2 = new User('Kajsa', 'Anka');
const user3 = new User('Joakim', 'Von Anka');

let users = [user1, user2, user3];
user1.login();


class Admin extends User {
  removeUser(user) {
    users = users.filter(_user => {
      return _user.firstName != user.firstName
    })
  }
}

const admin = new Admin('Kalle', 'Anka');
admin.removeUser(user1);
console.log(users);


class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return `${this.name} makes a generic sound!`
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}


class Cat extends Animal {
  constructor(name, race) {
    super(name)
    this.race = race
  }
  pur() {
    return `${this.name} is purring!`
  }
  makeSound(){
    let sound = super.makeSound()
    console.log(`${this.name} is purring!`, sound)
  }
}

const dog = new Dog('fido', 3);
const cat = new Cat('diva', 'nork skogskatt');
console.log(dog.makeSound());
console.log(dog.age);
console.log(cat);
cat.makeSound();
console.log(cat.pur());