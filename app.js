let amigos = []; //Array de nombres


//Función para agregar nombres
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    
    if (nombre == ''){                          //Verificar que se escriba un nombre
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre);                    //Agrega el nombre al array
        actualizarLista();
        limpiarCaja();
    }
    return;
}

// Función para actualizar la lista que se muestra
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    return;
}


//Función para sortear amigos
function sortearAmigo() {
    if (amigos.length == 0){                    //Verifica que haya algun valor en el array
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


// Función para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}