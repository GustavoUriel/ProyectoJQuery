

// CHEQUEAR SI HAY USUARIO LOGUEADO Y SI LO HAY, CARGAR EN MEMORIA EL USUARIO Y SUS CUENTAS
function actualizar(){
  // LOCALSTORAGE.CHECKLOGUEADO ES TRUE SI HAY UN USUARIO RECORDADO
  // LOCALSTORAGE.LOGUEADO ES UN STRING DEL EMAIL DEL USUARIO RECORDADO, SI LO HAY
  if (JSON.parse(localStorage.checkLogueado) === true) {
    usuarioLogueado = JSON.parse(localStorage.usuarios).find(temp  => temp.email === localStorage.logueado);
    cuentasUsuarioLogueado = JSON.parse(localStorage.cuentas);
    cuentasUsuarioLogueado = cuentasUsuarioLogueado.filter((temp)  => temp.dniUsuario == usuarioLogueado.id);
    vaciarUsuario();
    animacionConUsuario();
    cargarServiciosUsuario(usuarioLogueado);
    for (const iterator of cuentasUsuarioLogueado) {
      agregarServiciosUsuario(otorgantes.find(temp  => temp.id === iterator.idOtorgante).descripcion,
                              tipos_creditos.find(temp  => temp.id === iterator.idTipoCredito).nombre,
                              tipos_creditos.find(temp  => temp.id === iterator.idTipoCredito).descripcion,
                              "Nuestra propuesta generada por AI. La etiqueta es generada random ahora, pero debería ser calculable",
                              parseInt(Math.random() * 50) + "% de ahorro"
                              );
    }
  } else {
    usuarioLogueado='';
    cuentasUsuarioLogueado = [];
    animacionSinUsuario();
    vaciarUsuario();
    return false
  }
}

function salirDeLaCuenta(){
  localStorage.checkLogueado=JSON.stringify(false);
  actualizar();
}

function seleccionarUsuario(nro){
  localStorage.setItem('checkLogueado', JSON.stringify(true));
  localStorage.setItem('logueado',usuarios[nro].email);
  actualizar(); 
}

function borrarStorage(){
  localStorage.clear();
  inicializarDatos();
  actualizar();
}

/* 
function funcionLogIn(txtEmail, txtContrasena){
  var txt = "Los emails válidos son:" + "\n";
  var tempUsuario =   usuarios.find(temp  => temp.email === txtEmail);
  console.log(tempUsuario)
  if (tempUsuario) {
    if ( txtContrasena===tempUsuario.contrasena){
    } else {
      alert("La contraseña es: " + tempUsuario.contrasena + "pero como es un demo podes entrar igual")        
    }
    localStorage.set(checkLogueado, JSON.stringify(true));
    localStorage.set(logueado,txtEmail);
  } else {
    for (temp of usuarios) {
      txt = temp.email + "\n";
    }
  }
} */