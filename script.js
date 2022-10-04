const name = "Joshua Herty";

let age = 21;

const birthday = "February 14";

let pineapplePizza = true;

const lifeEvents = [
  "I was born in Royal Oak, Michigan",
  "I went to Oakland Community College",
  "I participated in childrens soccer when I was 6 years old",
  "I love to be in my house",
];

/* Write an if/else statement that runs one of two console.log methods. Your 
   console.log methods must incorporate the variables: name, age, and birthday. */

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

/* Write a for loop that starts at 0 and iterates by increments of 1 while i is 
   less than the length of the lifeEvents array. Each iteration of the loop should
   log a new sentence from the lifeEvents array. You should only have one 
   console.log method. */

for (const events of lifeEvents) {
  console.log(events);
}

// Declare and initialize a variable named counter to the value of 0.

let counter = 0;

/* Write a while loop that loops while true.  
Declare a variable named randomNumber that is initialized to a random integer 
between 1 and 10. Google search how to do this. */
let i = true;
while (i !== true) {}
