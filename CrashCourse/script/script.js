//alert('This is an annoying popup. Don`t use it');
// console.log('Hello World');
// console.table(
//   (a = 1),
//   (b = 2),
//   (c = 3),
//   (d = 4),
//   (e = 5),
//   (f = 6),
//   (g = 7),
//   (h = 8)
// );
// console.error('This is an error');
// console.warn('This is a warning');

console.error('Variables');
//let, const - (var)* *not used anymore

// let age = 30;
// console.log(age); //30
// age = 45;
// console.log(age); //45

// const name = 'Que';
// console.log(name); //Que
// name = 'Jacque'; //error can't reassign const

console.error('Data Types');
//Primitive Types - directly assigned to memory
//String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const name = 'Que'; //string
// const age = 45; //number
// const rating = 4.5; //number
// const hasKids = false; //Boolean
// const x = null; //Null - empty- no value
// const y = undefined; //Undefined - explicitly defined
// const bigNumber = 34043n; //bigint - extremely large number

// console.log(typeof bigNumber);

//Non-Primitive Types - Object ex. Objects & Arrays

console.error('Template Strings');

// const name = 'Que'; //string
// const age = 45; //number

// console.log(`I am ${name} and I am ${age}`);

console.error('String');

// const s = 'Hello World!';

// console.log(s.length); //12
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5)); //Hello
// console.log(s.split(''));

console.error('Arrays');
//Arrays - variables that hold multiple values

// const fruits = ['apples', 'oranges', 'pears'];

// console.log(fruits[1]); //oranges
// fruits[3] = 'grapes';
// console.log(fruits);
// fruits.push('mangos');
// console.log(fruits);
// console.log(fruits.indexOf('oranges'));//1

console.error('object literals');
//key value pairs

// const person = {
//   firstName: 'Que',
//   lastName: 'Code',
//   age: 45,
//   hobbies: ['music', 'movies', 'computers'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };

// console.log(person);
// console.log(person.firstName, person.lastName); //Que Code
// console.log(person.age); //45
// console.log(person.address.state); //MA

// console.log(person.hobbies[1]); //movies

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;
// console.log(firstName); //Que
// console.log(city); //Boston

// person.email = 'que@gmail.com'; //adds email
// console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appt',
//     isCompleted: false,
//   },
// ];
//console.log(todos[1].text); //Meeting with boss

//JSON = data format

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

console.error('For Loops');
//For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Number: ${i}`);
// }

console.error('While Loops');
//While loop
// let j = 1;
// while (j <= 10) {
//   console.log(`While Loop Number: ${j}`);
//   j++;
// }

console.error('Loop through Arrays');

//for loop - not the best
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

console.error('For of loop');
//better - but use high order array methods
// for (let todo of todos) {
//   console.log(todo.text);
// }

console.error('High Order Array Methods');
//forEach, map, filter

// todos.forEach(function (todo) {
//   console.log(todo.id);
// });
// //forEach() with arrow function
// todos.forEach((todo) => console.log(todo.isCompleted));

//map returns an array
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
//with arrow
//const todoArrText = todos.map((todo) => todo.text);
//console.log(todoArrText);//['Take out trash', 'Meeting with boss', 'Denist appt']
// console.log(todoText);//['Take out trash', 'Meeting with boss', 'Denist appt']

//filter returns certain arguments into an array
// const trueTodos = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map((todo) => todo.text); //'Take out trash', 'Meeting with boss'
// console.log(trueTodos);
// //with arrow
// const falTodosArr = todos.filter((todo) => todo.isCompleted === false);
// console.log(falTodosArr);

console.error('Conditionals');
const x = 4;
const y = 10;

if (x === 10) {
  console.log('x is 10');
} else if (x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}
