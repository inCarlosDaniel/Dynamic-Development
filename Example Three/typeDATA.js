var Name = require('readline-sync');
var n = 20;

var name = Name.question("What is your name?\n");

if(isNaN(name) == "string" ) {

console.log(name.toLocaleUpperCase());
console.log(`You name is ${name}`);

} else {

console.log("You have use String!");

}

console.log(typeof(n));
console.log(typeof(name));
