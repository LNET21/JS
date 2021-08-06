class Book {

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;
  }

  summary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }

  bookAge() {
    const years = new Date().getFullYear() - this.year

    switch (years) {
      case 0:
        return `${this.title} is less then 1 year old.`
      case 1:
        return `${this.title} is 1 year old.`
      default:
        return `${this.title} is ${years} years old.`
    }
  }

  revise(year) {
    this.year = year;
    this.revised = true;
  }
}


const book1 = new Book('book1', 'Kalle', 2020);
const book2 = new Book('book2', 'Jeanette', 1997);
const book3 = new Book('book3', 'Hans', 2010);

console.log(book2.bookAge());
book2.revise(2020);
console.log(book2.bookAge());


//Get och Set samt private fields och metoder, # = private
class Person {

  //Private
  #firstName;
  #lastName;

  constructor(firstName = 'KalleAnka', lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`
  }

  get name() {
    return this.#lastName.toUpperCase();
  }

  set fullName(value) {
    const parts = value.split(' ')
    this.#firstName = parts[0];
    this.#lastName = parts[1];
  }

  PublicFunc() {
    this.#privateFunc();
  }

  #privateFunc() {
    console.log('Inne i private funktion');
  }
}

const person = new Person('Kalle', 'Anka');
console.log(person.fullName);

person.fullName = 'John Doe';
console.log(person.fullName);

person.PublicFunc();

const p = new Person();
console.log(p.fullName);

console.log(p.firstName);

p.firstName = "newname";
console.log(p.firstName);

console.log(p.fullName);
