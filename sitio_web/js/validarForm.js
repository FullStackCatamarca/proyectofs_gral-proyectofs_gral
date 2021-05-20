function validar(formulario) {
    if (formulario.nombre.value.length < 4) {
    alert("Escriba por lo menos 4 caracteres en el campo "Nombre".");
    formulario.nombre.focus();
    return (false);
    }
    var checkOK = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ" + "abcdefghijklmnñopqrstuvwxyzáéíóú ";
    var checkStr = formulario.nombre.value;
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
    ch = checkStr.charAt(i);
    for (j = 0; j < checkOK.length; j++)
    if (ch == checkOK.charAt(j))
    break;
    if (j == checkOK.length) {
    allValid = false;
    break;
    }
    }
    if (!allValid) {
    alert("Escriba sólo letras en el campo "Nombre".");
    formulario.nombre.focus();
    return (false);
    }
    var checkOK = "0123456789";
    var checkStr = formulario.edad.value;
    var allValid = true;
    var decPoints = 0;
    var allNum = "";
    
    {mospagebreak}
    
    
    for (i = 0; i < checkStr.length; i++) {
    ch = checkStr.charAt(i);
    for (j = 0; j < checkOK.length; j++)
    if (ch == checkOK.charAt(j))
    break;
    if (j == checkOK.length) {
    allValid = false;
    break;
    }
    allNum += ch;
    }
    if (!allValid) {
    alert("Escriba sólo dígitos en el campo "Edad".");
    formulario.edad.focus();
    return (false);
    }
    var chkVal = allNum;
    var prsVal = parseInt(allNum);
    if (chkVal != "" && !(prsVal >= "18" && prsVal <= "30")) {
    alert("Escriba un valor mayor o igual que 18 y menor o igual que 30 en el campo "Edad".");
    formulario.edad.focus();
    return (false);
    }
    if ((formulario.correo.value.indexOf (‘@’, 0) == -1)||(formulario.correo.value.length < 5)) {
    alert("Escriba una dirección de correo válida en el campo "Dirección de correo".");
    return (false);
    }
    return (true);
    }