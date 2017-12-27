// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equality check is written as a == b (please note the double equation sign '='. A single symbol a = b would mean an assignment).
// Not equals. In maths the notation is ≠, in JavaScript it’s written as an assignment with an exclamation sign before it: a != b.


// String comparison
// To see which string is greater than the other, the so-called “dictionary” or “lexicographical” order is used.

// In other words, strings are compared letter-by-letter. "a" == "a", "b" > "a", "b" < "z"

5 > 4 // true
"apple" > "pineapple" // false -- "p" is greater than "a" since it's further down the alphetical string (ex "Z" > "A")
"2" > "12" // true --- in the first string "2" is greater than "1"
undefined == null // true
undefined === null // false --- === is strict; undefined isn't null; can only be equal to itself
null == "\n0\n" // false -- null and undefined cannot equal anything but each other
null === +"\n0\n" // false