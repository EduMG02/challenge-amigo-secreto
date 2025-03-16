// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
// lo agregarán a una lista visible al hacer clic en "Adicionar".

//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta 
// pidiendo un nombre válido.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    //console.log(amigos);
    if (nombre == ''){
        alert('Por favor, inserte un nombre');
    }
    else {
        amigos.push(nombre);
        //console.log(amigos);
        actualizarLista();
        limpiarCaja();
    }
    return;
    //asignarTextoElemento('p', amigos);
}

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo 
// de entrada.
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    return;
}


//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
// un nombre de la lista y se mostrará en la página.
function sortearAmigo() {
    if (amigos.length == 0){
        alert('Agrega amigos primero')
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);

        let amigoSorteado = amigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
        amigos.splice(indiceAleatorio, 1);
        actualizarLista();
    }
}


