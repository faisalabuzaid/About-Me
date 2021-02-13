'use strict';

let userName=prompt('What\'s your name ?');
// console.log(userName)
function questionOne (){
  let questionOne=prompt('Am I a Developer ?');
  // console.log(questionOne);
  switch (questionOne.toLowerCase()) {
  case 'no':
  case 'n':
    alert('Thats true, I\'m a Mechatronics Engineer');
    break;
  case 'yes':
  case 'y':
    alert('False, but I hope so after I finish this course');
    break;
  default:
    break;
  }
}
questionOne ();


function questionTwo (){
  let questionTwo=prompt('Am I Jordanian ?');
  // console.log(questionTwo);
  switch (questionTwo.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Thats true I am Jordanian and I\'m 29 years old');
    break;
  case 'no':
  case 'n':
    alert('False');
    break;
  default:
    break;
  }
}
questionTwo ();

function questionThree(){
  let questionThree=prompt('You think that I have any experience ?');
  // console.log(questionThree);
  switch (questionThree.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Thats true, I have 3 years experience in my field');
    break;
  case 'no':
  case 'n':
    alert('False');
    break;
  default:
    break;
  }
}
questionThree();

function questionFour(){
  let questionFour=prompt('Do I like coding ?');
  // console.log(questionFour);
  switch (questionFour.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Thats true so I\'m here');
    break;
  case 'no':
  case 'n':
    alert('False');
    break;
  default: 
    break;
  }
}
questionFour();

function questionFive(){
  let questionFive=prompt('Am I your friend ?');
  // console.log(questionFive);
  switch (questionFive.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Thats true we all are friends here');
    break;
  case 'no':
  case 'n':
    alert('False, we all are friends here');
    break;
  default:
    break;
  }
}
alert('welcome to my simple website page '+userName);
questionFive();

function questionSix(){
  let questionSix=prompt('Enter a number please beween 1 and 10');
  let myNumber = '7';
  let attempts=3;
  myLooop: while (attempts) {
    if (questionSix===myNumber){
      alert('Correct Answer');
      break myLooop;
    } else if(questionSix<7){
      alert('Answer is too low ');
      questionSix=prompt('Enter a number again');
    } else if(questionSix>7){
      alert('Answer is too High ');
      questionSix=prompt('Enter a number again');
    } attempts-=1;
  } if(!attempts){
    alert('You run out of attempts True answer is 7');
  }
}
questionSix ();

function questionSeven(){
  let progLangs=['fifth','laidback','c-','lithp','rene','sartre'];
  let attemptsTwo=0;
  let questionSeven=prompt('Guess one of the most rare programming languages ?');
  myLoop: while(attemptsTwo<6) {
    for(let i=0;i<progLangs.length;i++){
      if(questionSeven===progLangs[i]){
        alert('Correct Answer');
        break myLoop;
      }
    }
    questionSeven=prompt('enter name again');
    attemptsTwo++;
  } if(attemptsTwo===6){
    alert('you run out of attempts answers are display on my page');
  }

  for(let i=0;i<progLangs.length;i++){
    let correctAnswer=progLangs[i];
    document.write(' ',correctAnswer,' ' );
  }
}
questionSeven ();
