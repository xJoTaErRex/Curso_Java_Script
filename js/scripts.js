
//Aula 1

//alerta de popup com caixa de dialogo
//alert('teste de alertas JS');
//mesagem no console do navegador
//console.log('teste de console');

//----------------------------------------------------------------------------------------------


//Aula 3 - Variaveis

// var latitude = 40.87663;
// var longitude = -8.0873;
// console.log(latitude, longitude);

//----------------------------------------------------------------------------------------------


//Aula 4 - String

// var nome = "João";
// var sobrenome = "Gomes";
// var cpf = '111.111.111-11';
// var telefone = "970855254";
// var ddd = "21";
// var email = 'joao@mail.com';
// var biografia = "João começou sua carreira como desenvolvedro web em 2010 e ja participou  de importantes projetos, como...";

//  console.log("Nome Completo :" + nome + " " + sobrenome);
//  console.log("(" + ddd + ")" + telefone);
//  console.log ('Primeira letra do nome: ' + nome[0]);
//  console.log ('Ultima letra do nome: ' + nome[3]);
//  console.log ('Tamanho telefone: ' + telefone.length);


//----------------------------------------------------------------------------------------------

// // Aula 5 - Numeros

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = soma/2;

// console.log("Resultado da Media: " + media);

// console.log(Math.pow(2,4));
// console.log(Math.pow(num1,4));

// var increment = 20;
// // increment = increment + 5;
// increment +=22;
// console.log(increment);

// increment -=5;
// console.log(increment);


// var telefone = "970855254";
// var ddd = "21";

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log(ddd_string + tel_string);

// idade = '17';

// idade = parseInt(idade);
// idade++;
// console.log(idade);

//----------------------------------------------------------------------------------------------

// // Aula 6 - Boolean
// var idade = 65
// var teste = 59 == idade;

// console.log(teste);

// var vtype = true;
// console.log(typeof vtype);
// console.log(typeof vtype == "boolean");



//----------------------------------------------------------------------------------------------

// // Aula 7 - Boolean

// var undf;

// console.log(undf);

// var nome = "Pedro"

// console.log(nome[0] + nome[10]);

// var temperatura = 35;
// console.log(temperatura);

// temperatura = null;
// console.log(temperatura);

// console.log(typeof temperatura === "undefined");



//----------------------------------------------------------------------------------------------

// // Aula 10 - Boolean

var conteudo_caixa_azul = document.getElementById("caixa_azul").innerHTML;

document.getElementById("caixa_azul").innerHTML = "<H1>" + conteudo_caixa_azul + "<H1>";

document.getElementById("caixa_amarela").innerHTML = conteudo_caixa_azul;