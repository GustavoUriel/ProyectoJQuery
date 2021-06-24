	// localStorage.checkLogueado ES TRUE SI HAY UN USUARIO RECORDADO
	// localStorage.usuarioLogueado ES UN STRING DEL EMAIL DEL USUARIO RECORDADO, SI LO HAY

	function actualizar(){ // CHEQUEAR SI HAY USUARIO LOGUEADO Y SI LO HAY, CARGAR EN LA INTERFAZ SUS DATOS Y SUS CUENTAS
		deshabilitarBotones(true);
		if (localStorage.checkLogueado == "true") {
			usuarioLogueado = usuarios.find(iterator => iterator.email == localStorage.usuarioLogueado);
			cuentasUsuarioLogueado = JSON.parse(localStorage.cuentas);
			cuentasUsuarioLogueado = cuentasUsuarioLogueado.filter((iterator)	=> iterator.idUsuario == usuarioLogueado.id);
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
		if (typeof iterator !== 'undefined'){
			agregarServiciosUsuario(iterator);
		}
	}
	deshabilitarBotones(false);
	irA("ServiciosUsuario");
	//	id="buttonDeleteService" name=${servicio.id}
	$(".buttonDeleteService").on('click', function(e){
		var nro;
		nro = e.target.id;
		nro = parseInt(nro.replace('servicio', ''));
		borrarServicio(nro);
	})
}


function borrarServicio(id){

	cuentas = cuentas.filter(item => item.id !== id);
	cuentasUsuarioLogueado = cuentasUsuarioLogueado.filter(item => item.id !== id);
	localStorage.setItem("cuentas",JSON.stringify(cuentas));
	$("#head"+id).slideUp(constSpeed, ()=> {
		$("#head"+id).remove();
	})
	$("#body"+id).slideUp(constSpeed, ()=> {
		$("#body"+id).remove();
	})
}

function actualizar_continuarSinUsuario(){
	vaciarUsuario();
	deshabilitarBotones(false);
}

function salirDeLaCuenta(){
	localStorage.checkLogueado="false";
	actualizar();
}

function seleccionarUsuario(email){
	localStorage.checkLogueado="true";
	localStorage.usuarioLogueado=email;
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
	cerrarModales();
}


