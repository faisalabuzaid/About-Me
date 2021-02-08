'strict';

let userName=prompt('What\'s your name ?');
console.log(userName)

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

alert('welcome to my simple website page '+userName)