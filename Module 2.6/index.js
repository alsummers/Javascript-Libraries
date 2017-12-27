"" + 1 + 0 // "10" --- adds string around "1"+"0"
"" - 1 + 0 // -1 --- "-" changes string to numerical numbers
true + false // 1 ---- true = 1; false = 0
6 / "3" // 2 --- "/" changes strings to numerical value
"2" * "3" // 6 --- mathematical operators (/, *, -) convert back to numbers
4 + 5 + "px" // "9px" ---(4+5) + px
"$" + 4 + 5 // "$45" --- "$" converts "4" and "5" to strings
"4" - 2 // 2
"4px" - 2 // NaN "px" is not a numerical operator
7 / 0 // Infinity --- dividing by 0 is improbable = infinity
"  -9\n" + 5 // '-9\n5" --- + is not regarded as a mathematical operator here -- it's concatenated
"  -9\n" - 5  // -14 --- The '/n' is interpreted as a new line character. The new line character is considered white space.
            // When a string is coerced to a number, here subtracting 5 to a scring, the coercion strips leading and trailing white space, 
            //which gives the string "-9", 
null + 1 // 1 --- null = 0
undefined + 1 // NaN
