// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as a string
// Then we set a conditional to check the if the value of name is an exact true match to Mary, if so we console.log ''Hi, Mary!'
// If the conditional is not an exact true match, we console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret
// Then we make a variable called code and set it's value to 123 as a number
// Then we set a conditional to check if variable code is an exact true match to 123, 
// if so we set the value of variable secret to super as a string, and double the value of the variable code
// Then we set a conditional to check if code is greater than 250,
// if so we change the value of variable secret to duper
// Then we console.log(secret) which value would read as super


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it's value to true as a boolean
// We make a variable called age and set it's value to 34 as a number
// We make a variable called zip and set it's value to 55407 as a number
// Then we set a compound conditional to check if variable isStudent is a true exact match to true and that zip is greater than 80000,
// if so we console.log 'You're a student on the West Coast!'
// If the first conditonal is false, we have a second compound conditional to check if isStudent is a true exact match to false or 
// if variable age is less than 30,
// if so we console.log 'What are your hobbies?'
// If the first and second conditionals are false, we have a conditional to check if isStudent is a true exact match to true,
// if so we console.log 'Welcome to Prime!'
// If the first through third conditionals are all false, we have a fourth conditional that console.logs 'How about the weather!'
// In this example, the first two compund conditonals are false and the third is true, so our console.log will read 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX -- variable colorOne value is red, but the instructions say to set it to blue, variable colorTwo is set to blue,
/// but the insturctions say to set it to red
// Should be let colorOne = 'blue'; and let colorTwo = 'red';

if (mix === true) {
  colorOne = 'purple';
}

//FIX -- The conditional says if mix is a true exact match to true then colorOne becomes purple,
// However, the instructions says to when the conditonal is true to change colorOne and colorTwo to purple
// Should be if (mix === true) {
                colorOne = 'purple';
                colorTwo = 'purple';
}

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX -- Variable temp is set to 40 and a contant time is set to 4,
// the instructions say both are variables though,
// Should be let temp = 40; and let time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

// FIX --  The conditional checks if temp is greater than 39 or the time is greater than or equal to 4,
// the instructions say to check if temp is greater than 39 and time is greater than or equal to 4
// Should be if (temp > 39 && time >= 4) {
                console.log('throw away the food!');
}

*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX -- Variable age is set to 21 and constant minAge is set to 21,
// the instructions say they are both supposed to be variables,
// Should be let age = 21; and let minAge = 21;

if (minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

// FIX -- The conditional checks if minAGE is less than or equal to age and if it's true we console.log('no entry)
// if it is false we console.log('enter')
// The instructions however state to check if age is greater than or equal to minAge then console.log('enter')
// Should be if (age >= minAge) {
              console.log('enter');
              } else {
              console.log('no entry');
}

*/

