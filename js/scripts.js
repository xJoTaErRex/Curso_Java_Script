
//Aula 1

//alerta de popup com caixa de dialogo
//alert('teste de alertas JS');
//mesagem no console do navegador
//console.log('teste de console');



//----------------------------------------------------------------------------------------------


// Aula 3 - Variaveis

// var latitude = 40.87663;
// var longitude = -8.0873;
// console.log(latitude, longitude);




//----------------------------------------------------------------------------------------------


// Aula 4 - String

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


//  Aula 5 - Numeros

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


//  Aula 6 - Boolean
// var idade = 65
// var teste = 59 == idade;

// console.log(teste);

// var vtype = true;
// console.log(typeof vtype);
// console.log(typeof vtype == "boolean");





//----------------------------------------------------------------------------------------------



//  Aula 7 - Null undefined

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


//  Aula 11 - DOM

// var conteudo_caixa_azul = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = "<H1>" + conteudo_caixa_azul + "<H1>";

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa_azul;





//----------------------------------------------------------------------------------------------


//  Aula 12 - Funções

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



//  Aula 13 - Arrays

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



//  Aula 14 - Objetos

// var funcionario = {
//     'nome' : 'Pedro Souza Gomes',
//     'ano_nasc' : '1972',
//     'cpf' : '111.111.111.11',
//     'cargo' : 'Analista de Sistemas'
// }

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de T.I";

// funcionario.cnh = "86969596";

// console.log(funcionario);


// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1].categorias[0]);

// cursos[2].categorias[1] = 'administração de empresas';

// console.log(cursos[2].categorias[1]);



//----------------------------------------------------------------------------------------------



// Aula 15 - Metodo de Objetos

// var aluno = {
//     'nome': 'Maria',
//     'sobrenome' : 'Pereira',
//     'ano_nasc': 1992,
//     'nome_completo' : function (){
//         var n_completo = this.nome + " " + this.sobrenome
//         return n_completo;
//     },
//     'idade' : function (){
//         var idade = new Date().getFullYear() - this.ano_nasc
//         return idade;
//     }
// }
// console.log(aluno.nome_completo());

// console.log(aluno.idade());

// console.log(typeof(document.getElementById('tudo_obj')));





//----------------------------------------------------------------------------------------------



//  Aula 19 - Eventos

// document.getElementById("click-me").onclick = function () {
//     alert("Você clicou no botão");
// };

// document.getElementById("hover-me").onmouseover = function () {
//     alert("Você passou com o cursor no botão");
// };

// document.getElementById("leave-me").onmouseout = function () {
//     alert("Você saiu com o cursor do botão");
// };


// document.onkeydown = function () {
//     alert("Você apertou uma tecla");
// };

// document.onkeydown = function (evento) { //evento é recebido por parametro ele contem a tecla que foi apertada 
//     alert('Você apertou a tecla espaço ' + evento.keyCode); //KeyCode informa a tecla que foi apertada 
// };

// function button_Clicked2 () {
//     alert("Você clicou no botão function");
// };




//----------------------------------------------------------------------------------------------



//  Aula 20 - Manipulação do CSS

// document.getElementById("botao_cor").onclick = function (){
//     this.style['background-color'] = "blue";
//     document.getElementById("botao_cor").style.transform = "translateX(100PX)";
// }




//----------------------------------------------------------------------------------------------




// Aula 21 - Outros métodos getElement 

// var classe_exemplo = document.getElementsByClassName("exemplo"); // trouxe um vetor de todos os componenentes com a classe exemplo no html

// console.log(classe_exemplo);

// classe_exemplo[1].innerHTML = "teste1";

// classe_exemplo[1].style['background-color'] = "blue";

// var tag_exemplo = document.getElementsByTagName("p");

// tag_exemplo[1].style['background-color'] = "blue"



//----------------------------------------------------------------------------------------------




// Aula 22 - Loops for/in

// var tag_exemplo = document.getElementsByTagName("p");

// for(var a = 0; a < tag_exemplo.length; a++){
//     tag_exemplo[a].style['background-color'] = "blue"
// }


// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for(var b = 0; b < alunos.length; b++){
//     console.log(alunos[b]);
// }

// console.log("--------------------------------------");


// var carro = {
//     'Ano' : 2002,
//     'Modelo' : "Chevrolet Corsa Sedan",
//     'Clindrada' : "1.0",
//     'Combustivel' : 'Gasolina'
// }

// for (const car in carro) {
//     console.log(car + ':' + carro[car]);
// }

// var tag_elementos = document.getElementsByClassName("exemplo");

// for(var a = 0; a < tag_elementos.length; a++){
//     tag_elementos[a].style.color = "blue";
//     tag_elementos[a].style['font-weight'] = "bold";
// }





//----------------------------------------------------------------------------------------------




//  Aula 23 - Loops While e Do/While

// var count = 0;

// while (count < 5) {
//     console.log(count);
//     count++
// }

// var tag_elementos = document.getElementsByClassName("exemplo");

// while (count < tag_elementos.length) {
//     tag_elementos[count].style.color = "blue";
//     tag_elementos[count].style['font-weight'] = "bold";
//     count++
// }

// do {
//     console.log(count);
//     count++
// } while (count < tag_elementos.length);



//----------------------------------------------------------------------------------------------



// Aula 24 - If, elseif, else

// var idade = 17;

// if (idade  < 18){
//     console.log("Menor de Idade");
// }
// else if(idade == 18){
//     console.log("Tem 18 anos");
// }
// else {
//     console.log("Maior de idade");
// }

//var nota = 8;
//var faltas = 5;

// if(nota < 7 || faltas > 4) {
//     console.log("Aprovado");
// }
// else{
//     console.log("Reprovado");
// }

// if(nota >= 7 && faltas <= 4) {
//     console.log("Aprovado");
// }
// else{
//     console.log("Reprovado");
// }

// var nome = "Ivan"

// if (nome){
//     console.log("Nome: " + nome);
// } else {
//     console.log ("Nome não informado");
// }




//----------------------------------------------------------------------------------------------




//  Aula 25 - Alinhamento de Loops e Condicionais (neting);

// var socio = false;
// var idade = 17;

// if (socio == true || idade >= 65){
//     console.log("O ingresso é gratis")
// }else{
//     if (idade < 18){
//         console.log("Preço a pagar = R$ 6,00");
//     }
//     else{
//         console.log("Preço a pagar = R$ 12,00");
//     }
// }


// var funcionarios = [
        
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': ['João Pedro Pereira de Souza']
        
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     },

//     {
//         'nome': 'Blob de Sousa',
//         'idade': 39,
    
//     }

// ];

// var listahtml = document.getElementById('filhos');

// listahtml.innerHTML = "";

// for(var f = 0;f < funcionarios.length; f++) {

//     if(funcionarios[f].filhos){

//         var listf = funcionarios[f].filhos;

//         for(var fi= 0;fi < listf.length; fi++) {
//             listahtml.innerHTML += "<li>" + listf[fi] + " - filho de: " +  funcionarios[f].nome + "</li>";
//         }
//     }
//     else 
//     {
//         listahtml.innerHTML += "<li>" + funcionarios[f].nome + " não tem filhos </li>"
//     }
// } 



//----------------------------------------------------------------------------------------------



// Aula 36 - BOM


// window.onmousemove = function(e) {

//     if (e.pageY < 5){
//        alert('Não perca os descontos exclusivos');
//     }
// };




//----------------------------------------------------------------------------------------------



// Aula 37 - BOM Local Storage

//window.localStorage.setItem('nome', 'João');

//console.log(localStorage['nome']);

//localStorage.removeItem('nome');

// document.getElementById("enviar-nome").onclick = function (){

//     //Guardar o nome digitado em localstorage
//     var nomeUser = document.getElementById("nome-usuario").value;
//     window.localStorage.setItem('nome', nomeUser);
//     console.log(localStorage['nome']);
//     alert("Nome Preenchido com sucesso");

//     //esconder o formulario
//     document.getElementById("name-field").style.display = "none";
     
//     //Mostrar o nome de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Ola " + nomeUser + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + nomeUser;
//     document.getElementById("welcome-area").style.display = "initial";

// }

// if (localStorage.nome){
//     //esconder o formulario
//     document.getElementById("name-field").style.display = "none";
     
//     //Mostrar o nome de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Ola " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome;
//     document.getElementById("welcome-area").style.display = "initial";

// }

// document.getElementById("not-me").onclick = function (){

//     //remove localstorage
//     localStorage.removeItem('nome');
//     document.getElementById("welcome-area").style.display = "none";
//     document.getElementById("name-field").style.display = "initial";

// }




//----------------------------------------------------------------------------------------------



//  Aula 38 - data e hora

// var data_aleatoria = new Date(2021,8,7 ,15,05,06);
// var data_hoje = new Date();

// var data_nascimento = new Date('1998-4-27');
// var ano_nascimento = new Date(data_nascimento).getFullYear()
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nascimento;

// console.log(idade);

// var data = new Date()

// console.log(data.getTime());

// console.log(data.getTime() / 31.530000000);

// var data_envio = new Date(2018, 2, 20);

// var data_entrega = new Date(2018, 3, 06)

// var dias_entrega = data_entrega.getTime() - data_envio.getTime()

// console.log(dias_entrega / 86400000);




//----------------------------------------------------------------------------------------------



//  Aula 39 - Metodos de tempo 

// console.log('Mensagem 1');

// window.setTimeout(function(){
//     console.log('mensagem 2')
// },3000)


// var spiner  = document.getElementById("spinner-loader")


// document.getElementById("mostrar-loader").onclick = function() {
//     spiner.style.display = "initial"
//     window.setTimeout(function(){
//         spiner.style.display = "none"
//     },5000)
// }

// var count = 0;
// var inter = window.setInterval(function(){
//          console.log(count);
//          count++
//          if (count > 10){
//              window.clearInterval(inter);
//          }

// },1000)

// window.setInterval(function(){
//     var relogio_brasilia = new Date()

//     function format_time(time){
//         if(time < 10){
//             return "0" + time.toString();
//         }
//         return time.toString();
//     }
    
//     document.getElementById("relogio").innerHTML = format_time(relogio_brasilia.getHours()) + ":" 
//                                                    + format_time(relogio_brasilia.getMinutes()) + ":" 
//                                                    + format_time(relogio_brasilia.getSeconds())
// },1000)



//----------------------------------------------------------------------------------------------



//  Aula 41 - Comando Switch

// function valor_pedagios(tipo) {

//     switch (tipo) {
//         case '1':
//             return 11.22
//             break;
//         case '2':
//             return 22.45
//             break;
//         case '3':
//             return 16.88
//             break;
//         case '4':
//             return 33.65
//             break;
//         default:
//             return "Categoria não encontrada"
//             break;
//     }
// }

// console.log(valor_pedagios("4"));




//----------------------------------------------------------------------------------------------


//  Aula 42  Break e continue

// var x = 0;

// while (x < 10) {
//     console.log(x)
//     x++;
//     if(x == 5){
//         break;
//     }
// }

// var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

// for (let a = 0; a < lista.length; a++) {
//     if(lista[a] == 33){
//         console.log("Valor encontrado");
//         break
//     }
//     console.log('Tentativa '+a);
// }

// var num = 0;
// while (num < 20){
//     num++
//     if(num % 2 == 0){
//         continue
//     }  
//     console.log(num);  
// }


//----------------------------------------------------------------------------------------------


//  Aula 43 - Fomularios

//Select Box
// document.getElementById('mostrar_opcao').onclick = function(){
//     // var campo_select = document.getElementById('options');
//     // var indice_selecionado = campo_select.options.selectedIndex;
//     // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     // document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
    
//     var valor_selecionado = document.getElementById('options').value;
//     document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
// }


//Radio Buttons
// document.getElementById('mostrar_radio').onclick = function(){
//    var elementos = document.getElementsByName('genero');
//    var radio_selected;
   
//    for (let index = 0; index < elementos.length; index++) {
//       if(elementos[index].checked){
//         radio_selected = elementos[index].value
//         break
//       }
//    }

//    document.getElementById('radio_selecionado').innerHTML = radio_selected;
// }


//Check Boxes
// document.getElementById('mostrar_check').onclick = function(){

//    var check = document.getElementsByName('interesse');
//    var check_selected;

//    document.getElementById('check_selecionado').innerHTML = "";

//    for (let index = 0; index < check.length; index++) {
//       if(check[index].checked){

//         document.getElementById('check_selecionado').innerHTML += '<li>' + check[index].value + '</li>'

//       }
//    }
//  }

//Date
// document.getElementById('mostrar_data').onclick = function(){
   
//   var data_select = document.getElementById("data_evento").value 
//   var data_completa = new Date(data_select);
//   document.getElementById("data_selecionada").innerHTML = data_completa;

//  }


//----------------------------------------------------------------------------------------------


//  Aula 44 - Onchange


// document.getElementById('escolaridade').onchange = function(){
   
//     var campo_select = document.getElementById('escolaridade');
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById('escolaridade_selecionada').innerHTML = valor_selecionado;

//  }

var check = document.getElementsByName('lanche');

for (let index = 0; index < check.length; index++) {
    

    check[index].onchange = function(){

        document.getElementById('check_selecionado').innerHTML = "";
        

        for (let a = 0; a < check.length; a++) {
            if(check[a].checked){

                document.getElementById('check_selecionado').innerHTML += '<li>' + check[index].value + '</li>'
        
            }   
        }
    } 
}