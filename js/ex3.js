//ex1

 function  conversao_fahrenheit() {
    var celsius = document.getElementById('temp_celsius').value;
    var F = ((9 * celsius) / 5) + 32;
     document.getElementById('temp_fahr').innerHTML = F;
 }



//ex2

for (let ano = 1930; ano <= 2018; ano += 4) {
    document.getElementById('anos_copa').innerHTML += "<li>" + ano + "</li>";
}


//ex3

function  calculo_media_aluno() {
    var nota1 =  parseInt(document.getElementById('nota1').value);
    var nota2 =  parseInt(document.getElementById('nota2').value);
    var n_faltas = document.getElementById('n_faltas').value;
    var resultado =  document.getElementById('result');
    var media = ((nota1 + nota2) / 2);
    
    if (n_faltas < 14 && media >= 6.5) {
        resultado.innerHTML = "Aluno aprovado";
    }
    else if (n_faltas > 14 && media <= 6.5){
        resultado.innerHTML = "Aluno reprovado por notas e faltas" ;
    }
    else if (n_faltas > 14) {
        resultado.innerHTML = "Aluno reprovado por faltas" ;
    }
    else if (media < 6.5) {
        resultado.innerHTML = "Aluno reprovado por notas" ;
    }
 }
