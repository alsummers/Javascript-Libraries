let i = 3;

while (i) {
  alert( i-- );
} // 1 -- 0 is a false value so 1 is the last true value

let i = 0;
while (++i < 5) alert( i ); // 1- 4 --- ++i is incremented with a new value until 4 (0+1 = 1, so i = 1 and starts 1<5). 5 is not less than 5 so the loop stops there

let i = 0;
while (i++ < 5) alert( i ); // 1-5 --- i++ returns old value and increments it. So (5 < 5) is essentially (4 < 5)

for (let i = 0; i < 5; i++) alert( i ); // 0-4 ---

for (let i = 0; i < 5; ++i) alert( i ); // 0-4 --- That can be easily deducted from the algorithm of for:

//    * Execute once i = 0 before everything (begin).
//     *Check the condition i < 5
//     *If true – execute the loop body alert(i), and then i++

// The increment i++ is separated from the condition check (2). That’s just another statement.

// The value returned by the increment is not used here, so there’s no difference between i++ and ++i.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
} // modluo % checks if there is a remainder of i / 2 that is = 0 --therby increment by 2

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;

while( i < 3){
  alert( `number ${i}!` );
  i++;
}


// Repeat until the input is correct. The loop will first execute the body, then check the condition and, while it’s truthy, execute it again and again.
let value;

do {
  value = prompt("Enter a number greater than 100?", 0);
} while (value <= 100 && value); // without && value, it will continue the loops


let n = 10;

//prime numbers cannot be divible by 2 evenly-- so use modulo % 2 

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime number
}
