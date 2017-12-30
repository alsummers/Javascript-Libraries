
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }
  
  function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?') 
  }
  
  function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?')
  }
  
  ///function to return the least of the two numbers
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x; // result = result * x
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", ''); /// n? expresses a function so we can use ternary as shown ---->
  
  if (n <= 1) {
    alert(`Power ${n} is not supported,
      use an integer greater than 0`); //// using template literals
  } else {
    alert( pow(x, n) );
  }