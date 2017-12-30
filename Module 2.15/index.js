
// //retwrite functions using ternary arrows

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );




//Below here are function declarations
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    //below here are function expressions
    () => alert("You agreed.");
    () => alert("You canceled the execution."); 
  );