 function scuberGreetingForFeet(ride){
  // Write your code here!
    if (ride <= 400) {
      return 'This one is on me!';
    } else if (1000 <= ride && ride <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else {
      return "No can do.";
    }
  }

console.log(scuberGreetingForFeet(400));

function ternaryCheckCity(city){
  // Write your code here!
   return (city==='NYC')?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
    return 'Thank you so much.';
    break;

    case 'not as generous':
    return "Thank you."

    default:
      return "Bye."
  }
}
// console.log(switchOnCharmFromTip());