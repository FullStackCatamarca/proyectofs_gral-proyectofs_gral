
function enviarSaludo(){
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    var saludo = document.querySelector("#saludo");
    

   /* if ((apellido1 == " ") || (nombre1 == " " )) {
        alert ("Ingrese su ???")
        return
    }*/
   
    var texto = "hola " + nombre.value + " "+ apellido.value +", gracias por rellenar el formulario";
    saludo.innerHTML= texto;
}
