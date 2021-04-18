//FORMA ACOTADA DE ESCRIBIR LA FUNCION .ready()
$(function(){

	// CARGAR DATOS DE EJEMPLO, Y ALGUNOS ALEATORIOS
	documentoClickable=false;
	inicializarDatos();
	actualizar();

	// CARGA EN CARROUSEL 4 ENTIDADES ALEATORIAS (POR AHORA)
	cargaCarousel();
	// CAROUSEL TIEMPO DE ROTACION
	$("#carouselOtorgantes").carousel({
		interval: 2000
	});

	//LAMADA ASINCRONA GET PARA OBTENER EL LISTADO DE LAS PROVINCIAS
	$.get(URLJsonProvincias,callbackGetProvincias);
	// CARGAR LAS PROVINCIAS
	function callbackGetProvincias(respuesta, estado){
		$("#selectProvincia").empty();
		$("#selectProvincia").append(`<option value="999">Territorio Nacional</option>`);
		$("#selectAnonimoProvincia").empty();
		$("#selectAnonimoProvincia").append(`<option value="999">Territorio Nacional</option>`);
		if(estado === "success"){
			respuesta.provincias.sort((a,b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : ((a.nombre.toLowerCase() < b.nombre.toLowerCase()) ? -1 : 0));
			for (const provincia of respuesta.provincias) {
				//AGREGAMOS UNA OPCION AL SELECT POR USUARIO EN LA RESPUESTA, EMPLEAMOS MEJOR LA NOTACION DE TEMPLATE DE CARACTERES (EJ:`cadena${variable}cadena2`) PARA DEFINIR EL ELEMENTO AGREGAR AL DOM.
				$("#selectProvincia").append(`<option value="${provincia.id}">${provincia.nombre}</option>`);
				$("#selectAnonimoProvincia").append(`<option value="${provincia.id}">${provincia.nombre}</option>`);
			}
		}
		$("#selectProvincia").index=0;
		$("#selectAnonimoProvincia").index=0;
	}

	//	EVENTS

	// BOTONES DEL MODAL DE REGISTRO
	$('body').on('click','.paginator-button', evt => {
		const target = $(evt.target);
		const href = target.attr("href");
		$(".paginator-active").removeClass("paginator-active");
		$(href).addClass('paginator-active');
	});
	// BORRAR MODAL DE REGISTRO
	$('#RegistrarseModal').on('hidden.bs.modal', function() {
		$(':input', this).val('');
		$('.paginator-button') .first().trigger("click");
	});

	// FUNCIONES DE PLAY Y PAUSA EN EL CAROUSEL
	$("#carouselButton").on('click', function(){
			if ($("#carouselButton").children("span").hasClass('fa-pause')) {
					$("#mycarousel").carousel('pause');
					$("#carouselButton").children("span").removeClass('fa-pause');
					$("#carouselButton").children("span").addClass('fa-play');
			}
			else if ($("#carouselButton").children("span").hasClass('fa-play')){
					$("#mycarousel").carousel('cycle');
					$("#carouselButton").children("span").removeClass('fa-play');
					$("#carouselButton").children("span").addClass('fa-pause');					
			}
	});

	// CLICK EN EL BOTON DE LOG IN
	$("#LogInButton").on('click', function(){
		if (!(documentoClickable)) {return}
		if (usuarioLogueado) {
			salirDeLaCuenta();
			irA("Home");
		}
		else {
			$("#LogInModal").modal('show');
		}
	});

	// CLICK EN EL BOTON DE REGISTRARSE
	$("#RegistrarseButton").on('click', function(){
		if (usuarioLogueado) {
			irA("ServiciosUsuario");
		}
		else {
			MostrarModalRegistro();
		}
	});


	// CLICK EN EL BOTON DE INGRESO ANONIMO
	$("#AnonimoButton").on('click', function(){
			$("#AnonimoModal").modal('show');
	});

	$(".navbarItem").on('click', function(item){
		item.preventDefault();
		item.stopPropagation();
		item.stopImmediatePropagation();
		ocultarSecciones();
		irA(item.target.id);
	} )

	// CLICK EN BOTON DE USUARIO EN LOG IN
	$("#bUs00").on('click', function(){
		seleccionarUsuario(usuarios[0].email);
	});
	$("#bUs01").on('click', function(){
		seleccionarUsuario(usuarios[1].email);
	});
	$("#bUs02").on('click', function(){
		seleccionarUsuario(usuarios[2].email);
	});
	$("#bUs03").on('click', function(){
		seleccionarUsuario(usuarios[3].email);
	});
	$("#bUs04").on('click', function(){
		seleccionarUsuario(usuarios[4].email);
	});
	$("#bUs05").on('click', function(){
		seleccionarUsuario(usuarios[5].email);
	});
	$("#bUs06").on('click', function(){
		seleccionarUsuario(usuarios[6].email);
	});
	$("#bUs07").on('click', function(){
		seleccionarUsuario(usuarios[7].email);
	});
	$("#bUs08").on('click', function(){
		seleccionarUsuario(usuarios[8].email);
	});
	$("#bUs09").on('click', function(){
		seleccionarUsuario(usuarios[9].email);
	});

	// BOTON DE CLEAR STORAGE
	$("#clearStorage").on('click', function(){
		borrarTodo();
	});
	

	// CLICK EN EL BOTON DE ACEPTAR DEL LOG IN
	$("#modalLogInButton").on('click', function(){
		let inputs = $('#formLogIn :input');
		var tempusuario= inputs[0].value;
		var tempcontrasena=inputs[1].value;
		let tempfind = usuarios.find(temp => temp.email === tempusuario)
	if (!(tempfind)) {
		var tempText = "(cheatmode) Emails válidos:";
		for (const iterator of usuarios) {
			tempText=tempText + " " + iterator.email ;
		}
		$("#labelFormLogIn").text(tempText)
	} else {
		if (tempcontrasena==tempfind.contrasena) {
			seleccionarUsuario(tempfind.email);
			cerrarModales();
		} else {
			var tempText = "La contraseña es: "+ tempfind.contrasena;
			$("#labelFormLogIn").text(tempText)
		}
	}
	} )
});


