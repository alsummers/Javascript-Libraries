alert( null || 2 || undefined ); // 2 --- is the first truthy value

alert( alert(1) || 2 || alert(3) ); // 1 and 2 -- 2 is the last truthy value so it ends there

alert( 1 && null && 2 ); // null -- the first falsy value of the operation

alert( alert(1) && alert(2) ); // 1 and then undefined -- The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

// Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

alert( null || 2 && 3 || 4 ); //3 --- && comes before || so it evaluates 2 && 3. If both are truthy values it returns the last truthy value (3). Then the expression becomes (null || 3 || 4). 3 is the first truthy value.

let age = 27;

if (age >= 14 && age <= 90){
  console.log('Congrats');
} else {
  console.log('Unidentified');
}; // "inclusively" means it can reach 14 and 90

// NOT practice (!)

if (!(age >= 14 && age <= 90)){
  console.log('Congrats');
} else {
  console.log('Unidentified');
}; // uses NOT operator for values

if (age < 14 && age > 90){
  console.log('Congrats');
} else {
  console.log('Unidentified');
}; // traditional way 
  
if (-1 || 0) alert( 'first' ); // runs
if (-1 && 0) alert( 'second' ); // && returns false statement, 0 is false and cannot run
if (null || -1 && 1) alert( 'third' ); //runs