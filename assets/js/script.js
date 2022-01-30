//obtendo acesso aos botoes e contadores
var acesso_ao_botao_adicionar = document.querySelector("#botao-adicionar");
var acesso_ao_botao_subtrair = document.querySelector("#botao-subtrair");
var acesso_ao_span_contador = document.querySelector("#span-contador");
//todo contador tem q começar com valor zerado
valor_do_contador = 0;
//criando funções para adicionar e subtrair valores
function adicionar(){
    if(valor_do_contador >10){
       valor_do_contador=10;
    }
    valor_do_contador = valor_do_contador +1;
    if(valor_do_contador >-10 && valor_do_contador <=10){
        
        if(valor_do_contador>0){
            acesso_ao_span_contador.style.color = 'blue';
        }
            if(valor_do_contador==0){
                acesso_ao_span_contador.style.color = 'black';
            }
            acesso_ao_span_contador.innerHTML = valor_do_contador;
    }
}
function subtrair(){
    valor_do_contador = valor_do_contador -1;
   if(valor_do_contador>=-10){ 
        if(valor_do_contador<0){
            acesso_ao_span_contador.style.color = 'red';
        }
            if(valor_do_contador==0){
                acesso_ao_span_contador.style.color='black';
            }
            acesso_ao_span_contador.innerHTML= valor_do_contador;
   }
}
//agora vamos iniciar os eventos
function iniciando_eventos(){
    acesso_ao_botao_adicionar.addEventListener("click",adicionar);
    acesso_ao_botao_subtrair.addEventListener("click",subtrair);
}
//garantindo que a funcão iniciando_eventos comece apos o site ser carregando totalmente
window.addEventListener("load",iniciando_eventos);