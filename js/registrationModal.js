//FORMA ACOTADA DE ESCRIBIR LA FUNCION .ready()
var modalRegInputs 

$(function(){
	// AL ABRIR EL MODAL DE REGISTRO
	$('#RegistrarseModal').on('show.bs.modal', function() {
		modalRegInputs = $('#RegFormUsuario :input');
		console.log(modalRegInputs);
	});

	// AL CERRAR MODAL DE REGISTRO
	$('#RegistrarseModal').on('hidden.bs.modal', function() {
		modalRegBorrar();
	});

	// AL CLICK EN EL BOTON DE SIGUIENTE/REGISTRAR
    $("#RegFormBotonAceptar").on('click', function(){
        if ( $("#RegFormBotonAceptar").text()=="Siguiente") {
			var ok=true;
			console.log(ok);
			ok= (ok && RegFormValidateEmail());
			console.log(ok);
			ok= (ok && RegFormValidatePasswords());
			console.log(ok);
			if (ok) {
				$('#modalRegTab li:nth-child(2) a').tab('show');
				$("#RegFormBotonAceptar").text("Registrarse");
			} else {
				return;
			}
		} else {
			if (RegFormValidate()) {
				RegFormRegistrarUsuario()
			} else {
				cerrarModales();
			}
		}
	} );

	$("#RegFormPassword2").on("focusout", function(){
		RegFormValidatePasswords();

	})

	$("#RegFormEmail").on("focusout", function(){
		RegFormValidateEmail();
	})


	// CLICK EN EL BOTON DE REGISTRARSE
/* 	$("#RegistrarseButton").on('click', function(){
		if (usuarioLogueado) {
			irA("ServiciosUsuario");
		}
		else {
			MostrarModalRegistro();
		}
	});
 */

});

$('.popover-dismiss').popover({
	trigger: 'focus'
})


function RegFormValidate(){
	return
}

function RegFormValidatePasswords(){
	if (modalRegInputs[1].value != modalRegInputs[2].value)
		{RegFormMensaje("Las contraseñas no coinciden");
		console.log("pw con error");
		return false
	}
	console.log("pw sin error");
	return true;
}

function RegFormValidateEmail(){
	if (modalRegInputs[0].validationMessage=="") {
		console.log("email sin error");
		return true;
	} else {
		RegFormMensaje("El email no es válido");
		console.log("email con error");
		return false;
	}
}
function modalRegBorrar(){
	for (const iterator of modalRegInputs) {
		iterator.value="";
	}
	$("#RegFormBotonAceptar").text("Siguiente");
	$('#modalRegTab li:nth-child(1) a').tab('show');
}

function RegFormMensaje(msg) {
	$("#labelModalRegMensaje").slideUp(1000)
	$("#labelModalRegMensaje").text(msg)
	$("#labelModalRegMensaje").slideDown(1000)
} 
