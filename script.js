// Variables, Constants and comments

// let myAge = 25;
// let year = 2023;

// console.log(myAge, year)

// MyAge = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score)


// // Strings
// console.log('Hello World');
// let email = 'claytonsmith11@outlook.com';
// console.log(email);

// // String concatenation

// let firstName = 'Clayton';
// let lastName = 'Smith';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // String Length
// console.log(fullName.length);

// // String Methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index)



// // Common String Methods
// let email = 'claytonsmith11@outlook.com';

// let result = email.lastIndexOf('n');

// let result = email.slice(0, 7);

// let result = email.substr(4,10);

// let result = email.replace('m', 'w');

// console.log(result)


// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi)

// Math Operators +, -, *, /, **, %
// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2

// Order of operation = B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes)

// Nan - not a number

// let result = 'The blog has ' + likes + ' likes;'
// console.log(result)

// // Template Strings
// const title = 'Best reads of 2010';
// const author = 'Clayton';
// const likes = 30;

// Conccatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// Template String way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;

// console.log(html)

// Arrays
// let ninjas = ['Clayton', 'Owen', 'Regan'];
// ninjas[1] = 'Kyron'
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shawn', 'crystal', 30, 40];
// console.log(random);

// console.log(ninjas.length)

// // Array Methods

//let result = ninjas.join('-');
//let result = ninjas.indexOf('Regan');
// let result = ninjas.push('Kyron');
// result = ninjas.pop();
// console.log(ninjas);

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

// // Boolean

// console.log(true, false)

// let email = 'claytonsmith11@outlook.com';
// let names = ['regan', 'clayton', 'kyron']

// let result = email.includes('!');
// let result = names.includes('jake');

// console.log(result)

// Comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let names = 'clayton';

// console.log(names == 'clayton')
// console.log(names == 'clayton')
// console.log(names > 'regan')
// console.log(names > 'Clayton')
// console.log(names > 'Regan')

// let age = 25;

//Loose comparison (different types can be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//Strict comparison (different types can be equal)

// console.log(age === 25)
// console.log(age === '25')
// console.log(age !== 25)
// console.log(age !== '25')

//Type conversion
// let score = '100';

//score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
// let result = Boolean(0);
// let result = Boolean('')

// console.log(result, typeof result)



// // Section Three // //

// for loops

// const names = ['kyron', 'regan', 'clayton']
// for (let i = 0; i < 5; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }

// while loops
// const names = ['kyron', 'regan', 'clayton']
// let i = 0;

// while(i < 5){
//  console.log('in loop: ', i);
//  i++;
// }

// let i = 0;
// while (i < names.length) {
//     console.logh(names[i]);
//     i++
// }

// do while loops

// let i = 4;
// do {
//     console.log('val if i is ', i);
//     i++;
// } while (i < 5);

// if statements
// const age = 25

// if (age > 20) {
//     console.log('You are over 20 yrs old');
// }

// const ninjas = ['kyron', 'regan', 'clayton'];

// if (ninjas.length > 3) {
//     console.log('Thats a lot of people')
// }

// const password = 'P@ss'

// if (password.lenth >= 8){
//     console.log('that password is long')
// }

//else if statements
// const password = 'P@ss'

// if (password.lenth >= 12) {
//     console.log('that password is strong')
// } else if (password.length >= 8) {
//     console.log('that password is long')
// } else {
//     console.log('that password is not long enough')
// }


// Logical Operators - Or || and And &&

// const password = 'P@ss12'

// if (password.lenth >= 12 && password.includes('@')) {
//     console.log('that password is strong')
// } else if (password.length >= 8 || password.includes('@') && password.length > 5) {
//     console.log('that password is long')
// } else {
//     console.log('that password is not long enough')
// }

// Logical NOT (!)
// let user = false;
// if (!user) {
//     console.log('You must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){
//     if(scores[i] === 0) {
//         continue;
//     }
//     console.log('Your score: ', scores[i]);

//     if (scores[i] === 100){
//         console.log('congrats, you got full marks!');
//         break;
//     }
// }

// Switch Statemnts
// const grade = '50';

// switch (grade) {
//     case '50':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('Not a valid grade')
// }

// // Variable and block scope

// const age = 30

// if (true) {
//     const age = 40;
//     const name = 'Clayton'
//     console.log('inside 1st code block: ', age, name)

//     if (true) {
//         const age = 50;
//         console.log('inside 2nd code block: ', age);
//     }
// }

// console.log('Outside code block: ', age, name);

//function declaration

// function speak() {
//     console.log('Hello there')
// }

//function expression
// greet()
// greet()
// greet()

// speak()

//function declaration

// function greet() {
//     console.log('Hello there')
// }

// Arguments and Parameters
// const speak = function (name = 'clayton', time = 'night') {
//     console.log(`good ${time} ${name}`);
// }

// // speak();
// speak('Clayton');

//  RETURNING VALUES
// const speak = function (name = 'clayton', time = 'night') {
//     console.log(`good ${time} ${name}`);
//};

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

//Arrow Functions
// const greet = function () {
//     return 'hello world';
// };

// const greeet = () => 'hello world';
// const result = greet();
// console.log(result);
 
// const bill = function (products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10, 15, 30], 0.2));

// // FUNCTIONS AND METHODS
// const name = 'clayton';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo)

// callbacks and foreach

// let people = ['kyron', 'regan', 'clayton']
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };
// people.forEach(logPerson);

//Callback functions in action
// const ul = document.querySelector('.people');
// const people = ['kyron', 'regan', 'clayton'];
// let html = ``;
// people.forEach(person => {
//     //create html template
//     html += `<li style="color; purple">${person}</li>`;
// });
// console.log(html);
// ul.innerHTML = html;

// //Object Literals
// //creating an object literal
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'claytonsmith11@outlook.com',
//     location: 'United Kingdom',
//     blogs: ['Why mac and cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// console.log(user.age);
// console.log(user['location']);
// user['name'] = 'clayton';
// console.log(user['name']);
// console.log(typeof user);

// // Adding methods
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'claytonsmith11@outlook.com',
//     location: 'United Kingdom',
//     blogs: ['Why mac and cheese rules', '10 things to make with marmite'],
//     login: function () {
//         console.log('The user logged in');
//     },
//     logout: function () {
//         console.log('The user logged out');
//     },
//     logBlogs: function() {
//     }
// };

// user.login();
// user.logout();
// const name = 'clayton';
// name.toUpperCase();

// 'This' Keyword

// Adding methods
// let user = {
//     name: 'clayton',
//     age: 30,
//     email: 'claytonsmith11@outlook.com',
//     location: 'United Kingdom',
//     blogs: ['Why mac and cheese rules', '10 things to make with marmite'],
//     login: function () {
//         console.log('The user logged in');
//     },
//     logout: function () {
//         console.log('The user logged out');
//     },
//     logBlogs: function () {
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);

// Objects Literals
// const blogs = [
//     { title: 'Why mac and cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// let user = {
//         name: 'clayton',
//         age: 30,
//         email: 'claytonsmith11@outlook.com',
//         location: 'United Kingdom',
//         blogs: [
//             { title: 'Why mac and cheese rules', likes: 30 },
//             { title: '10 things to make with marmite', likes: 50 }
//         ],
//         login: function () {
//             console.log('The user logged in');
//         },
//         logout: function () {
//             console.log('The user logged out');
//         },
//         logBlogs: function () {
//             // console.log(this.blogs);
//             console.log('this user has written the following blogs: ');
//             this.blogs.forEach(blog => {
//                 console.log(blog.title, blog.likes);
//             })
//         }
// };

// user.logBlogs();

// Math Objects
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// //random numbers
// const random = Math.random();
// console.log(random)

// Primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Values
// const userOne = { name: 'Regan', age: 30 };
// const userTwo = userOne;
// console.log(userOne, userTwo);
// userOne.name = 40;
// console.log(userOne, userTwo);

//DOM Explained
//get an element by id
// const title = document.getElementById('page-title');
// console.log(title)

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// adding and changing page content

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Clayton is awesome';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2 </h2>';

// const people = ['kyron', 'regan', 'clayton'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });
