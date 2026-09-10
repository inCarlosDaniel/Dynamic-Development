
var people = ["Eduardo","Joana","Wallace","Rosana"];

var gerente = ["Davi","Manuela"];

var people_One = people.slice(1,3);

console.log(people);
console.log(people_One);

var empresa = people.concat(gerente);
console.log(empresa);
console.log("\n");


var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

var first_Quarter = month.slice(0,3);
var second_Quarter = month.slice(3,6);
var third_Quarter = month.slice(6,9);
var fourth_Quarter = month.slice(9,13);

console.log("-----------------Months of the year-----------------\n");
console.log(month);
console.log("-----------------Quarter of the Year----------------\n");
console.log(first_Quarter);
console.log(second_Quarter);
console.log(third_Quarter);
console.log(fourth_Quarter);
console.log("----------------------------------------------------\n");


