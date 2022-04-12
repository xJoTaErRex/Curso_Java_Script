//ex1

//  function  conversao_fahrenheit() {
//     var celsius = document.getElementById('temp_celsius').value;
//     if (celsius == '') {
//         document.getElementById('temp_fahr').innerHTML = 0;
//     }
//     else{
//         var F = ((9 * celsius) / 5) + 32;
//         document.getElementById('temp_fahr').innerHTML = F;
//     }
//  }

 document.getElementById('converter').onclick = function(){
    var celsius = document.getElementById('temp_celsius').value;
    if (celsius == '') {
        document.getElementById('temp_fahr').innerHTML = 0;
    }
    else{
        var F = ((9 * celsius) / 5) + 32;
        document.getElementById('temp_fahr').innerHTML = F;
    }
 }




//ex2

document.getElementById('anos_copa').innerHTML = "";
for (let ano = 1930; ano <= 2018; ano += 4) {
    document.getElementById('anos_copa').innerHTML += "<li>" + ano + "</li>";
}


//ex3

// function  calculo_media_aluno() {
//     var nota1 =  parseInt(document.getElementById('nota1').value);
//     var nota2 =  parseInt(document.getElementById('nota2').value);
//     var n_faltas = document.getElementById('n_faltas').value;
//     var resultado =  document.getElementById('result');
//     var media = ((nota1 + nota2) / 2);
    
//     if (n_faltas < 14 && media >= 6.5) {
//         resultado.innerHTML = "Aluno aprovado";
//     }
//     else if (n_faltas > 14 && media <= 6.5){
//         resultado.innerHTML = "Aluno reprovado por notas e faltas" ;
//     }
//     else if (n_faltas > 14) {
//         resultado.innerHTML = "Aluno reprovado por faltas" ;
//     }
//     else if (media < 6.5) {
//         resultado.innerHTML = "Aluno reprovado por notas" ;
//     }
//  }

 document.getElementById('calcular').onclick = function(){
    var nota1 =  parseFloat(document.getElementById('nota1').value);
    var nota2 =  parseFloat(document.getElementById('nota2').value);
    var n_faltas = document.getElementById('n_faltas').value;
    var situacao;

    var resultado =  document.getElementById('result');
    var media = ((nota1 + nota2) / 2);
    
    if (n_faltas < 14 && media >= 6.5) {
         situacao = "Aluno aprovado";
    }
    else if (n_faltas > 14 && media <= 6.5){
        situacao = "Aluno reprovado por notas e faltas" ;
    }
    else if (n_faltas > 14) {
        situacao = "Aluno reprovado por faltas" ;
    }
    else if (media < 6.5) {
        situacao = "Aluno reprovado por notas" ;
    }
    resultado.innerHTML = situacao;
 }


 //ex4
 var vendas_cursos = [
    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }
];

var tabela = document.getElementById('vendas_cursos');
var totalVendas = document.getElementById('total_vendas');
var x = 0;
var total = 0;

tabela.innerHTML = '';
while (x < vendas_cursos.length) {
    if (vendas_cursos[x].reembolso == null) {
        tabela.innerHTML +=
                            '<td>' + vendas_cursos[x].aluno + '</td>' +
                            '<td>' + vendas_cursos[x].valor + '</td>' +
                            '<td>' +vendas_cursos[x].data + '</td>';
        total += parseFloat(vendas_cursos[x].valor);
    }
    x++
}
totalVendas.innerHTML = '<td>' + total + '</td>';