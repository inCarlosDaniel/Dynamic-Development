var value = [8,1,7,2,9]

console.log(value[0]);

console.log(value[3]);

console.log("\n");

for (var pos = 0; pos < value.length; pos++){

    console.log("Posição:  " + pos + " Valor: " + value[pos] );

}

console.log("\n");

var cars = [];

cars[0] = "Volvo";

cars[1] = "Jeep";
 
    console.log("Cars: " + cars + "\n");

var motos = new Array("Honda","Yamaha","&MW");

    console.log("Motos: " + motos + "\n");

var soma = 0;
var num = [1,2,3,4,5];

for (var numT = 0; numT < num.length; numT++){

    soma += num[numT];
    
    console.log("Posição:  " + numT + " Valor: " + num[numT]);
    

}

total = soma / value.length;

    console.log("Total is: " + total + "\n");   

city = ["Brasilia","Rio","São Paulo","Amazona","Minas Gerais", "Goias"];

var maior = city[0];

for (var numC = 0; numC < city.length; numC++){

    if (city[numC].length > maior.length) {

        maior = city[numC];

    }

    console.log("Cada cidade = " + city[numC]); 
   
}

     console.log("A cidade que tem o maio numero de letra: " + maior + "\n"); 
    



    

