let a = 1;
let b = 1;

let c = ++a; // 2 prefix increment by 1
let d = b++; // 1 postfix change it back to original

///// solution values

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

/// next calls for variables preserve updated values

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

//

let a = 2;
let x = 1 + (a *= 2);

alert (a); //4 *= operator assigns new value to a
alert (x); // 5 