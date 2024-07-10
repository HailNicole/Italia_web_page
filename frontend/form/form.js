//arreglo que contiene las respuestas correctas
let correctas = [3,1,3,2,3];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida = [];
let cantidad_correctas=0;
let nombre="";
let apellido="";

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta]=seleccionada.value;

    //el siguiente codigo es para poner en color blanco el fondo de
    //los inputs para cuando elige otra opción armo el id para seleccionar
    //la section correspondiente
    id="p" + num_pregunta;
    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //doy color al label/opcion seleccionada
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//function para pedir el nombre y apellido antes de dar la nota
function nombres(){
    var content=`
                <div class="require-nombres">
                <div class="item-form">
                    <label class="label-nombre" for="nombre">Ingrese su Nombre</label>
                    <input id="nombre" name="nombre" type="text" require>
                </div>
                <div class="item-form">
                    <label class="label-nombre" for="apellido">Ingrese su Apellido</label>
                    <input id="apellido" name="apellido" type="text" require>
                </div>
                    <button id="mostrar-nota" class="boton" onclick="corregir()">Mostrar Calificación</button>
                </div>`;
    document.getElementById("contenido-nombres").innerHTML=content;
}

//funcion que compara los arrelgos para saber cuantas estuvieron correctas
function corregir(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    if(nombre=="" || apellido==""){
        alert("Debe ingresar su nombre y apellido");
    }else{
        cantidad_correctas = 0;
        for(i=0; i<correctas.length; i++){
            if(correctas[i]==opcion_elegida[i]){
                cantidad_correctas++;   
            }
        }
        var content=`
        <h2>Cantidad Acertadas: <span id="resultado"></span></h2>
        <h2 class="mensaje-final">Gracias por Participar!!</h2>`
        document.getElementById("contenido-respuesta").innerHTML=content;
        document.getElementById("resultado").innerHTML=cantidad_correctas;
        guardarNota();
    }
}

function guardarNota()
{
    let nota = {
        nombre: nombre,
        apellido: apellido,
        calificacion: cantidad_correctas
    };

        // Enviar el resultado al servidor
        fetch('http://localhost:3000/agregar-nota', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nota)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Aquí puedes trabajar con la respuesta del servidor
                console.log('Datos enviados correctamente:', data);
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
        });

        document.getElementById("nombre").disabled=true;
        document.getElementById("apellido").disabled=true;
        document.getElementById("mostrar-contenido").disabled=true;
        document.getElementById("mostrar-nota").disabled=true;
}