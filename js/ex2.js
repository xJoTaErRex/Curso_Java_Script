// Ex1
var num1 = parseInt(document.getElementById('num_1').innerHTML);
var num2 = parseInt(document.getElementById('num_2').innerHTML);
var resultado = num1+num2
document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';


//Ex2
function  conversao_fahrenheit(celsius) {
     var F = ((9 * celsius) / 5) + 32;
     return F;
}


var gcelsius = parseInt(document.getElementById('caixa_azul').innerHTML);
document.getElementById('caixa_amarela').innerHTML = conversao_fahrenheit(gcelsius);

//Ex3
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

var gruposnew = [grupos[1], grupos[2]];

gruposnew.push(['Mariana', 'Felipe', 'Carla']);

console.log(gruposnew);


//Ex4

//a 
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

document.getElementById('categoria_principal').innerHTML = curso.categoria[0];

//b
function aval_total (n1,n2,n3,n4,n5){
    var total = n1+n2+n3+n4+n5;
    return total;
}

function media_total (n1,n2,n3,n4,n5){
    var media = ( ( 5 * n5 ) + ( 4 * n4)  + ( 3 * n3)  + ( 2 * n2)  + ( 1 * n1) ) / ( n1+n2+n3+n4+n5 );
    return media.toFixed(2);
}

var total_aval = aval_total(curso.n_aval_1_estrela, curso.n_aval_2_estrelas, curso.n_aval_3_estrelas, curso.n_aval_4_estrelas, curso.n_aval_5_estrelas);

var media_aval = media_total(curso.n_aval_1_estrela, curso.n_aval_2_estrelas, curso.n_aval_3_estrelas, curso.n_aval_4_estrelas, curso.n_aval_5_estrelas);

console.log(total_aval);
console.log(media_aval);

document.getElementById('total_aval').innerHTML = total_aval;
document.getElementById('media_aval').innerHTML = media_aval;


// Ex5
 var pessoa = {
     'nome': 'Junior',
     'sobrenome' : 'Freitas',
     'email' : 'jr13freitas@hotmail.com',
     'nome_completo' : function (){
         var nome_completo = this.nome + " " + this.sobrenome;
         return nome_completo;
     }
 }

 function retorna_tabela (p){
     var stringhtmltabela = '<div class="tableBox">'
                                +'<table>'

                                    +'<tr>'
                                        +'<th>Nome Completo</th>'
                                        +'<th>Email</th>'
                                    +'</tr>'
                                    +'<tr>'
                                        +'<td>'+ p.nome_completo() +'</td>'
                                        +'<td>'+ p.email +'</td>'
                                    +'</tr>'
                                    
                                +'</table>'
                                
                            +'</div>';

    return stringhtmltabela;
 }

 document.getElementById('tabela').innerHTML = retorna_tabela(pessoa);
