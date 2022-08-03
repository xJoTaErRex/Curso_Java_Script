
//ex1
var estados = document.getElementById('estados')

if (localStorage.estado_indice) {
   estados.options.selectedIndex = localStorage.estado_indice;
}

estados.onchange = function(){
    var estado_indice_selecionado = estados.options.selectedIndex
    window.localStorage.setItem('estado_indice',estado_indice_selecionado);
}

//ex2

document.getElementById("confirmar_pedido").onclick = function(){
    var indice_envio_selecionado = document.getElementById("envios").options.selectedIndex;
    var dt_pedido = document.getElementById("data_pedido");
    var dt_entrega = document.getElementById("data_entrega");

    var data_atual = new Date();
    var data_entrega = new Date();

    var data_atual_mls = data_atual.getTime();
    var entrega1_mls = (86400000 * 18);
    var entrega2_mls = (86400000 * 12);
    var data_entrega_mls;
    
    if (indice_envio_selecionado != 0) {
        if (indice_envio_selecionado == 1) {
            data_entrega_mls = data_atual_mls + entrega1_mls;
        }
        else {
            data_entrega_mls = data_atual_mls + entrega2_mls;
        }
        data_entrega.setTime(data_entrega_mls)
        dt_pedido.innerHTML = data_atual.toLocaleString();
        dt_entrega.innerHTML = data_entrega.toLocaleString();
    }
}

//ex3

var cronometro = document.getElementById('cronometro');
var btn_comecar_parar = document.getElementById('comecar_parar');
var inter;

function format_data(time){
    if(time < 10){
        return '0' + time;
    }
    return time;
}

btn_comecar_parar.onclick = function(){
    if (btn_comecar_parar.innerHTML == 'Começar') {
        btn_comecar_parar.innerHTML = 'Parar'
        inter = window.setInterval(function(){
            var data_atual_cronometro = new Date(2020, 03, 18, 00, 00, 00, 00);
            cronometro.innerHTML = format_data(data_atual_cronometro.getHours()) + ':'
                                   + format_data(data_atual_cronometro.getMinutes()) + ':'
                                   + format_data(data_atual_cronometro.getSeconds()) + '  '
                                   + data_atual_cronometro.getMilliseconds();
        },1)
    }
    else{
        window.clearInterval(inter);
        btn_comecar_parar.innerHTML = 'Começar'
    } 
}

document.getElementById('zerar').onclick = function(){
    window.clearInterval(inter);
    cronometro.innerHTML = '00:00:00 000'
    btn_comecar_parar.innerHTML = 'Começar'
}