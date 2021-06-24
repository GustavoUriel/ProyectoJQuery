//FORMA ACOTADA DE ESCRIBIR LA FUNCION .ready()
$(function(){

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

		// CLICK EN EL BOTON DE AGREGAR SERVICIO
	$("#buttonAddService").on('click', function(){
		$("#AddServiceModal").modal('show');
	})


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
		if (usuarioLogueado) {
			MostrarModalRegistro();
		}
		else {
			alert("todavía no implementado");
		}
	});

	// CLICK EN EL NAVBAR 
		$(".navbarItem").on('click', function(item){
		item.preventDefault();
		item.stopPropagation();
		item.stopImmediatePropagation();
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
		var tempUsuario= inputs[0].value;
		var tempContrasena=inputs[1].value;
		let tempFind = usuarios.find(iterator => iterator.email === tempUsuario)
	if (!(tempFind)) {
		var tempText = "(cheatmode) Emails válidos:";
		for (const iterator of usuarios) {
			tempText=tempText + " " + iterator.email ;
		}
		$("#labelFormLogIn").text(tempText)
	} else {
		if (tempContrasena==tempFind.contrasena) {
			seleccionarUsuario(tempFind.email);
			cerrarModales();
		} else {
			var tempText = "(cheatmode) La contraseña es: "+ tempFind.contrasena;
			$("#labelFormLogIn").text(tempText)
		}
	}
	} )
});


