/*window.alert("te saludo")
window.alert("te saludo otra vez por si no te has percatado")
*/
function changecolor(code) { 
    document.bgColor=code }


var compas = [];  /* compas [0] compas [1] compas [2]*/

function guardarDato() {
    event.preventDefault();
    
    var nombre = document.getElementById('txtNombre').value;

    if (nombre == '') {
        alert('Debe ingresar un valor');
        return;
    }
    else{
        alert (nombre);

        compas.push(nombre);
    }

}

function mostrar() {
    let nodos = document.getElementById('compas');
    let nodo = "";



    for (var i=0; i< compas.length; i++)
    {
        if (i==0){
            nodo += "<tr> <td>" + "<strong>Amigos</strong>" + "</td> </tr>"
        }
        nodo += "<tr> <td>" + compas [i] + "</td> </tr>"
    }

    nodos.innerHTML = nodo;
}

function ingresar() {
    var input = ""
    var input = window.prompt("escribe un contenido","*");
    document.write =("input");

   
}