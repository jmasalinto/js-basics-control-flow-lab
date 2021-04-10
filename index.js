function scuberGreetingForFeet(feet){
  let greeting;
  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }
  return greeting
} 

function ternaryCheckCity(city){
  let phrase = (city === "NYC") ? 'Ok, sounds good.' : 'No go.';

  return phrase;
}

function switchOnCharmFromTip(tip){

  let response;

  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  } 
  return response;
}