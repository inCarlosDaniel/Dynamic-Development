var value = [8,1,7,2,9]

console.log(value[3]);

console.log("Array invertido: " + value.reverse() + "\n");


var valueOne = [1,2,3,4,5,6];

console.log(valueOne.join("|") + "\n");

var retirado = valueOne.shift();

console.log("Removido: " + retirado + "\n" + valueOne.join("|") + "\n");

console.log("Posição do numero 3: " + valueOne.indexOf(3) + "\n");

valueOne.push(7);

console.log(valueOne.join("|") + "\n");

valueOne.pop();

console.log(valueOne.join("|") + "\n");

var array = [-5,10,19,20,-3,89];

for ( positivo = 0; positivo < array.length; positivo++ ){

      if (array[positivo] < 0) {

        console.log("Número negativo: " + array[positivo]);

    } else {

        console.log("Número positivo: " + array[positivo]);

    }

}



