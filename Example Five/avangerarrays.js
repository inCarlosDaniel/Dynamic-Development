
var arr1 = [1,2,3,4,5,6,7];

arr1.splice(2,2);

console.log("Remove one arrey " + arr1 + "\n");


var names = ["Roberto", "Maria", "Lucas", "Yasmin"];

var news = names.splice(1,1,"Luiz");

console.log(names);

console.log(news);


var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");

console.log(pais);


var list = ["Guilheme","Samuel","Davi","João"];

list.unshift("Monica");

console.log("add new name list: " + list + "\n");


list.splice(4,1);

console.log("remove three elemental: " + list + "\n");

console.log(list[2]);

var add_list = list.splice(2,1,"Emanuel");

console.log("add new name is list:  " + list + "\n");

console.log("last name:  " + add_list + "\n");







