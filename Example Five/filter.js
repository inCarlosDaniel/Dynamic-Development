  
  var num = [1,2,3,4,5,6,7,8,9,10];

  var resultado = num.filter(item => item % 2 == 0);

  console.log("Os numeros são: " + num + "\n");
  console.log("Os item divido por 2 são: " + resultado + "\n");


  var numFiltrado = num.filter (

    function(valor){

        return valor >  5;


    }


  );

  console.log("Os numeros maiores filtrado são: " + numFiltrado + "\n");


  function buscarValores(valor){

    return valor < 5;

  }

  var numEncontrado = num.filter(buscarValores);

  console.log("Os numeros encontrado na busca são: " + numEncontrado + "\n");


  var r1 = num.filter((valor) =>{

    return valor < 5;

  } );

  console.log("Os numeros menores filtrado são: " + r1 + "\n");

  var r2 = num.filter((valor) => valor < 5);

  console.log("Os numeros menores filtrado são: " + r2 + "\n");

  var funcionario = [

    { Nome: "João", Idade: 62 },
    { Nome: "Davi", Idade: 40},
    { Nome: "Lucas", Idade: 34},
    { Nome: "Arthur", Idade: 51},

  ];

  var peopleListe = funcionario.filter(
    
    function(valor){

      console.log(valor.Nome + "\n");

  });

   var peopleListe = funcionario.filter(
    
    function(valor){

      return valor.Nome.length < 5;

  });

  console.log(peopleListe);
  console.log("\n");


  var Eletronic = [


    { ID: 1, Marca: "Iphone", Descrição:"Celular", Preco:2864},
    { ID: 2, Marca: "Dell", Descrição: "Notebook", Preco: 1154},
    { ID: 3, Marca: "Philco", Descrição: "Microorda", Preco: 835},
    { ID: 4, Marca: "Mondial", Descrição: "Geladeira", Preco: 5400},
    { ID: 5, Marca: "Inox", Descrição: "Churraqueira Eletrica", Preco: 500}
    
  ];

  var valorDesc = Eletronic.filter(desc => desc.Preco < 2000 );

  console.log(valorDesc);
  console.log("\n");

  var listeEletronic = Eletronic.filter(valor => valor.Preco > 0);

  console.log(listeEletronic);
  console.log("\n"); 

  var marcaEletronic = Eletronic.filter(valor => valor.Marca == "Philco");

  console.log(marcaEletronic);
  console.log("\n"); 