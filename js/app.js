// 'use strict';

// //greeting
// var userName = prompt('What\'s your name?');
// while (userName == '' || userName == null) {
//   userName = prompt('Please wirte your name first!');
// }
// alert('Glad to have you ' + userName + ' here with us');
// alert('Today we will play gussing game about me, have fun ;)');
// //declare some usefull variables
// var wrongeAnswerCounter = 0, index = 0, correctAnswerCounter = 0, input, userInput, convertedUserInput, myNumber = 7;
// //creating array hold all my Favorite Movies
// var myFavoriteMovies = ['hancock','matrix','mr.Robot','spiderman','paranormal'];
// //creating array hold all my questions
// var question = ['Do you know Ahmad?','Is his age 31?','Is his major Engineer?','Do you know what his favorite color?','Do you know how tall Ahmad is?'];
// //making a loop for asking all the questions
// while(index != question.length){  
//   checkingAnswer();
//   theAnswers();
// }

// wrongeAnswerCounter = 0;
// alert('Now you have to know what is the number that i have in my mind! ;)\nbe ready.');
// alert('Notice that you have only 4 chances to answer.\nPlease click OK to start.\nGood Luke');
// while (wrongeAnswerCounter < 4) {
//   userInput = prompt( 'Your attempt will be:');
//   while(userInput==null || userInput==""){
//     userInput = prompt( 'Please you should enter at least one number:');
//   }
//   checkUserInput();
   
// }
// if (wrongeAnswerCounter >= 4 || userInput != myNumber) {
//   alert("Sorry, You had 4 wrong attempts,\nMy Number was 7 ;)");
//   wrongeAnswerCounter = 0;
// }

// for(var i=0;i<3;i++){
//   input = prompt('could you mention one of my favorite movies?');
//   while (input == '' || input == null) {
//     input = prompt('could you mention one of my favorite movies?\nPlease enter one name at least.');
//   }
//   convertedUserInput = input.toLowerCase();
//   switch (convertedUserInput) {
//     case 'hancock':
//     case 'matrix':
//     case 'mr.robot':
//     case 'spiderman':
//     case 'paranormal':
//       alert("Well Done, you 100% right.\nYou got " + ++correctAnswerCounter + " points");
//       i=3;
//       break;
//     default:
//       alert("Thats not correct.\nTry again.");
//       wrongeAnswerCounter++;
//   }
// }
// if(correctAnswerCounter >= 4){
//   alert(userName + ', You got ' + correctAnswerCounter + ' out of 7 questions.\nBe ready for the next game soon.\n\nThank you :D');
// }else{
//   alert(userName + ', You got ' + correctAnswerCounter + ' out of 7 questions.\nSorry we can\'t have you in the next game.\n\nThank you :D');
// }








// // all my functions

// //declare a function to check the answers that the user wrote, also give a massege as a reply
// function theAnswers(){
//   if (convertedUserInput === 'yes' || convertedUserInput === 'y') {
//     //console.log('Great, keep going :)\nPlease click OK for the next question:');
//     alert('Great, keep going :).\nYou got ' + ++correctAnswerCounter + ' points\nPlease click OK for the next question:');
//     // correctAnswerCounter++;
//     index++;
//   } else if (convertedUserInput === 'no' || convertedUserInput === 'n') {
//     //console.log('You should try harder to know Ahmad well\nPlease click OK for the next question:');
//     alert('You should try harder to know Ahmad well\nPlease click OK for the next question:');
//     index++;
//   } else if (wrongeAnswerCounter == 3) {
//     alert('You wrote 3 wrong answers!, No hell you have knew Ahmad before\nYou can Try again');
//     wrongeAnswerCounter = 0;
//   }
// }
// //declare function to be sure of the user input yes/no or y/n as an answer for the questions
// function checkingAnswer() {
//   userInput = prompt( question[index] + '\nYou should write yes/no or y/n as an answer.');
//   convertedUserInput = userInput.toLowerCase();
//   wrongeAnswerCounter++;
//   while ( convertedUserInput !== 'yes' && convertedUserInput !== 'y' && convertedUserInput !== 'no' && convertedUserInput !== 'n') {
//     userInput = prompt(question[index] + '\nPlease answer either yes/no or y/n!');
//     convertedUserInput = userInput.toLowerCase();
//     wrongeAnswerCounter++;
//     if (wrongeAnswerCounter == 3) {
//       wrongeAnswerCounter = 0;
//       break;
//     }
//   }
// }

// //declare function to ckeck the user input and answer him
// function checkUserInput(){

//   if(userInput == myNumber){
//     alert("Right in the spot, well done\nYou got " + ++correctAnswerCounter + " points");
//     break;
//   }else if(5 <= userInput && userInput <= 10 ){
//     alert("You too close,\nTry again");
//     wrongeAnswerCounter++;
//   }else if( (5 > userInput && userInput >= 1) || (13 >= userInput && userInput > 10) ){
//     alert("You a little bit away,\nTry again");
//     wrongeAnswerCounter++;
//   }else if( 1 > userInput || userInput > 13 ){
//     alert("You far away :( ,\nTry again");
//     wrongeAnswerCounter++;
//   } 

// }