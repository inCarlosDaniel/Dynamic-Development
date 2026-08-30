let realName = require('readline-sync');  

let name = realName.question("What is your name?\n ");  

console.log(`Your name is ${name}`); 

let age = realName.question("what is your age?\n ");

console.log(`You are ${age} years old`);