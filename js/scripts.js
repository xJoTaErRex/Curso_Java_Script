
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

// // Aula 7 - Null undefined

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

// // Aula 11 - DOM

// var conteudo_caixa_azul = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = "<H1>" + conteudo_caixa_azul + "<H1>";

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa_azul;



//----------------------------------------------------------------------------------------------



// // Aula 12 - Funções

// function soma_numeros_estatica() {  
//     var a = 10;
//     var b = 15;
//     soma = a+b;
//     console.log(soma)
// }

// function soma_numeros(numero1, numeor2) {
//     soma = numero1+numeor2;
//     console.log(soma)
// }
// var n1 = 6
// var n2 = 9
// soma_numeros(n1,n2);


// function soma_numeros_return(numero1, numeor2) {
//     soma = numero1+numeor2;
//     return soma;
// }
// console.log(soma_numeros_return(6,8));


// function valor_imc(p, a) {
//     resultado = p/ (a * a);
//     return resultado;
// }


// var peso = parseInt(document.getElementById("peso").innerHTML);
// var altura = parseFloat(document.getElementById("altura").innerHTML);


// document.getElementById("imc").innerHTML = valor_imc(peso, altura).toFixed(2); // Tofixed configura as casas decimais;


//----------------------------------------------------------------------------------------------


// // Aula 13 - Arrays

// var alunos = ["João", "Maria", "José"];

// var num_primos = [2, 3, 5, 7, 11, 13];

// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);


// var grupos =[
//     ["João", "Maria", "José"],
//     ["Pedro", "Joana", "André", "Julio"],
//     ["Carolina", "Helena", "Marcelo"]
// ] 
// console.log(grupos.length);
// console.log(grupos [2]);
// console.log(grupos [2][1]);


// var cursos = ["HTML", "Python", "PHP"];

// cursos.push("JavaScript"); 
// console.log(cursos);

// cursos.unshift("Bootstrap");
// console.log(cursos);

// cursos.pop();
// console.log(cursos);

// cursos.shift();
// console.log(cursos);

// var ingredientes = ["pão branco", "queijo", "presunto"];
// ingredientes[0] = "pão integral";

// ingredientes[3] = "maionese";

// alunos = ["Pedro", "Joana", "André", "Julio", "Maria", "Fernanda"];

// console.log(alunos.slice(1,5)); //pegar parte de array

// console.log(alunos.slice(0,-1));



//----------------------------------------------------------------------------------------------

// // Aula 14 - Objetos

var funcionario = {
    'nome' : 'Pedro Souza Gomes',
    'ano_nasc' : '1972',
    'cpf' : '111.111.111.11',
    'cargo' : 'Analista de Sistemas'
}

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

funcionario.cargo = "Gerente de T.I";

funcionario.cnh = "86969596";

console.log(funcionario);


var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = 'administração de empresas';

console.log(cursos[2].categorias[1]);