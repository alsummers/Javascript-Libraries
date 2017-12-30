//Will alert be shown?

if ("0") {
    alert( 'Hello' );
  } /// yes -- it is a string value not a numerical one -- 0, null, undefined, and NaN are otherwise false statments
  
  //In the name of Javascript
  
  let inputResponse = prompt ('What\'s the "official" name of Javascript?')
  
  if (inputResponse === "EMCAScript"){
    alert ("Right!");
  } else {
    alert ('You don\'t know? Try "EMCAScript!"');
  }
  
  //Show the sign exercise
  
  let value = prompt ('Type a number')
  
  if (value > 0){
    alert (1);
  } else if (value < 0){
    alert (-1);
  } else {
    alert(0);
  }
  
  //Login exercise
  
  let userName = prompt("Who's there?")
  
  if (userName == 'Admin'){
    let passWord = prompt('Password?');
    
    if (passWord == 'TheMaster'){
      prompt('Welcome!');
    } else if(passWord == null){
      prompt('Canceled');
    }else {
      prompt('Wrong Password')
    }
  } else if (userName == null){
    prompt('Canceled');
  } else {
    prompt('I don\'t know you');
  }
  
  //ternary characters -- Rewrite this if using the ternary operator '?'
  
  // if (a + b < 4) {
  //   result = 'Below';
  // } else {
  //   result = 'Over';
  // }
  
  result = (a + b < 4) ? "Below" : "Over";
  
  // if...else ternary
  
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
  (login == '') ? 'No login' : '';
  