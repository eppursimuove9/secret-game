let listaNumerosSorteados = [];
let intentos = 0;
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    intentos ++;
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');     
        }
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function mensajesIniciales() {
    asignarTextoElemento ('h1','Juego del numero secreto!');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo}`);
}
function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    mensajesIniciales();
    //generar el contenido aleatorio
    listaNumerosSorteados = []; // <- reinicia la lista
    numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    intentos = 0;
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

mensajesIniciales();
