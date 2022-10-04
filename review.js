"use strict";

const name = "Joshua Herty"; // string

let age = 21; // number

const birthday = "February 14"; //string

let pineapplePizza = true; // boolean

const lifeEvents = [
  "I was born in Royal Oak, Michigan",
  "I went to Oakland Community College",
  "I participated in childrens soccer when I was 6 years old",
  "I love to be in my house",
]; // array

// [] = array
// {} = object

/* if(condition) -- decision/ fork in the road){
          if condition is true, code in this block is executed
} else if (another condition){
          if the condition is false, and this one is true, this code will be 
          executed 
} else {
          else's default condition is that all other chained conditions evaluated to false
} */

// === is for comparison
// = is for assigment or re assignment

// adding a ! at the beggining of a variable is the not operator

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

// OR -->  pineapplePizza ? console.log("first message") : console.log("second message");

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1); // random numb 1 - 10
  if (randomNumber !== 5) {
    // counter += 1;
    counter++;
    // template literal (backticks and ${})
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

// extended challenge
let hours = 50;
let wage = 10;
let paycheck = 40 * wage;
if (hours > 40) {
  let overtimeHours = hours - 40;
  console.log(overtimeHours);
  let overtimePay = overtimeHours * wage * 1.5;
  console.log(overtimePay);
  paycheck += overtimePay;
  //   shorter version:
  //   paycheck += (hours - 40) * (wage * 1.5);
}
console.log(paycheck);

let weeks = 0;
weeks = Math.ceil(1000000 / paycheck);
console.log(`It would take ${weeks} weeks to earn one million bucks!`);
