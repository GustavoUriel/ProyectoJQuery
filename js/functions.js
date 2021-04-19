	// LOCALSTORAGE.CHECKLOGUEADO ES TRUE SI HAY UN USUARIO RECORDADO
	// LOCALSTORAGE.LOGUEADO ES UN STRING DEL EMAIL DEL USUARIO RECORDADO, SI LO HAY

	function actualizar(){ // CHEQUEAR SI HAY USUARIO LOGUEADO Y SI LO HAY, CARGAR EN LA INTERFAZ SUS DATOS Y SUS CUENTAS
		deshabilitarBotones(true);
		if (JSON.parse(localStorage.checkLogueado) === true) {
		usuarioLogueado = usuarios.find(temp	=> temp.email === localStorage.usuarioLogueado);
		cuentasUsuarioLogueado = JSON.parse(localStorage.cuentas);
		cuentasUsuarioLogueado = cuentasUsuarioLogueado.filter((temp)	=> temp.dniUsuario == usuarioLogueado.id);
		vaciarUsuario();
		animacionConUsuario();
	} else {
		usuarioLogueado='';
		cuentasUsuarioLogueado = [];
		animacionSinUsuario();
	}
}

function actualizar_continuarConUsuario(){
	cargarInformaciónUsuario(usuarioLogueado);
	for (const iterator of cuentasUsuarioLogueado) {
		agregarServiciosUsuario(tiposCreditos.find(temp	=> temp.id === iterator.idTipoCredito).nombre,
		tiposCreditos.find(temp	=> temp.id === iterator.idTipoCredito).descripcion,
		otorgantes.find(temp	=> temp.id === iterator.idOtorgante).descripcion,
														"Nuestra propuesta generada por AI. La etiqueta es generada random ahora, pero debería ser calculable",
														parseInt(Math.random() * 50) + "% de ahorro"
														);
	}
	deshabilitarBotones(false);
}

function actualizar_continuarSinUsuario(){
	vaciarUsuario();
	deshabilitarBotones(false);
}

function salirDeLaCuenta(){
	localStorage.checkLogueado=JSON.stringify(false);
	actualizar();
}

function seleccionarUsuario(email){
	localStorage.setItem('checkLogueado', JSON.stringify(true));
	localStorage.setItem('usuarioLogueado',email);
	actualizar(); 
	irA("ServiciosUsuario");
	cerrarModales();
}

function borrarTodo(){
	localStorage.clear();
	tiposCreditos=[];
	otorgantes=[];
	usuarios=[];
	cuentas=[];
	usuarioLogueado=[];
	cuentasUsuarioLogueado=[];
	inicializarDatos();
	actualizar();
	cerrarModales();
}






function RegFormAvisoContrasena(){

}

function RegFormValidate (){

}