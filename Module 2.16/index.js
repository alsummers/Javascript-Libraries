///Tasks and Reviews from Javascript module///
"use strict";
//1 

console.log("Hello World!");

//2 

let name = "John";
let admin = name;
console.log(admin);

let ourPlanet = "Earth";
let currentVisitor = "John";

//3

let name = "Ilya"; 

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

//4 

"" + 1 + 0 // "10"
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //"$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinite
"  -9\n" + 5 // "-9n5"
"  -9\n" - 5 // -14
null + 1 //1
undefined + 1 //NaN

//5

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let a = 2;

let x = 1 + (a *= 2);

a//4
x//5

//6 

5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

//7
const name = prompt("What is your name?")

alert(name);

// 8 
let answer = prompt('What is the "official" name of JavaScript?');

if (answer == "EMCAScript"){
  alert("Right");
} else {
  alert("Try 'EMCAScript'")
}

// 9 
let num = prompt("");

if (num > 0){
  console.log(1);
} else if (num < 0){
  console.log(-1);
} else {
  console.log(0);
}

// 10

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == null) {
    alert( 'Canceled.' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

// 11

result = (a + b < 4) ? 'Below' : 'Over';

// 12

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  //13

//   || OR  && AND ! NOT 

//   && goes before ||

//