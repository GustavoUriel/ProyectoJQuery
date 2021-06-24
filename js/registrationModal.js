//FORMA ACOTADA DE ESCRIBIR LA FUNCION .ready()
var modalRegInputsUsuario ;
var modalRegInputsDatosPersonales ;
var modalRegDataEmail;
var modalRegDataPass1;
var modalRegDataPass2;
var modalRegDataApellido;
var modalRegDataNombres;
var modalRegDataProvincia;
var modalRegDataCiudad;
var modalRegDataSueldoBlanco;
var modalRegDataSueldoAutonomo;
var modalRegDataSueldoNegro;
var modalRegDataSoyEstatal;
var modalRegDataTengoCasa;
var modalRegDataTengoAuto;

$(function(){
	modalRegInputsUsuario = $('#RegFormUsuario :input');
	modalRegInputsDatosPersonales = $('#RegFormDatosPersonales :input');
	modalRegDataEmail = modalRegInputsUsuario[0];
	modalRegDataPass1 = modalRegInputsUsuario[1];
	modalRegDataPass2 = modalRegInputsUsuario[2];
	modalRegDataApellido = modalRegInputsDatosPersonales[0];
	modalRegDataNombres = modalRegInputsDatosPersonales[1];
	modalRegDataProvincia= modalRegInputsDatosPersonales[2]; //selectedIndex: 
	modalRegDataCiudad= modalRegInputsDatosPersonales[3]; //selectedIndex: 
	modalRegDataSueldoBlanco = modalRegInputsDatosPersonales[4];
	modalRegDataSueldoAutonomo = modalRegInputsDatosPersonales[6];
	modalRegDataSueldoNegro = modalRegInputsDatosPersonales[8];
	modalRegDataSoyEstatal = modalRegInputsDatosPersonales[5]; //checked: 
	modalRegDataTengoCasa = modalRegInputsDatosPersonales[7]; //checked: 
	modalRegDataTengoAuto = modalRegInputsDatosPersonales[9]; //checked: 
})

	// AL ABRIR EL MODAL DE REGISTRO
	$('#RegistrarseModal').on('show.bs.modal', function() {
		if (usuarioLogueado){
			modalRegCargarUsuario(usuarios.find(iterator => localStorage.usuarioLogueado === iterator.email));
		} else {
			modalRegBorrar();
		}
	})

	$('#RegFormSProvincia').on('change', function (e) { 

		//CADA VEZ QUE CAMBIA EL VALOR DEL SELECT SE REALIZAR UNA LLAMADA AL API PARA CARGAR LOS MUNICIPIOS CORRESPONDIENTES.
		let idProvincia = $(this).val();
		//LA LLAMADA AL API PARA LOS MUNICIPIOS SE REALIZA MEDIANTE UNA FUNCIÒN. ASI PUEDE UTILIZARSE EN LA CARGA INICIAL TAMBIEN.
		let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`;
		//SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
	$.get(apiMunicipios,callbackGetMunicipios);
	// CARGAR LOS MUNICIPIOS
	});
	function callbackGetMunicipios(respuesta, estado){
		$("#RegFormSCiudad").empty();
		if(estado === "success"){
			respuesta.municipios.sort((a,b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : ((a.nombre.toLowerCase() < b.nombre.toLowerCase()) ? -1 : 0));
			for (const iterator of respuesta.municipios) {
				//AGREGAMOS UNA OPCION AL SELECT POR USUARIO EN LA RESPUESTA, EMPLEAMOS MEJOR LA NOTACION DE TEMPLATE DE CARACTERES (EJ:`cadena${variable}cadena2`) PARA DEFINIR EL ELEMENTO AGREGAR AL DOM.
				$('#RegFormSCiudad').append(`<option value="${iterator.id}">${iterator.nombre}</option>`)
			}
		}
		$("#RegFormSProvincia").index=0;
	}


	// AL CERRAR MODAL DE REGISTRO
	$('#RegistrarseModal').on('hidden.bs.modal', function() {
		modalRegBorrar();
	});

	// AL CLICK EN EL BOTON DE SIGUIENTE/REGISTRAR
    $("#RegFormBotonAceptar").on('click', function(){
        if ( $("#RegFormBotonAceptar").text()=="Siguiente") {
			var ok=true;
			ok= (ok && RegFormValidateEmail());
			ok= (ok && RegFormValidatePasswords());
			if (ok) {
				RegFormAPag(2);
				$("#RegFormBotonAceptar").text("Registrarse");
			} else {		
				return;
			}
		} else {		
			var ok;
			ok= RegFormValidateDatosUsuario();
			if (ok) {
				RegFormRegistrarUsuario();
				/* cerrarModales(); */
			} else {
				return;
			} 
		}
	} );

	$("#RegFormPassword2").on("focusout", function(){
		RegFormValidatePasswords();
	})

	$("#RegFormEmail").on("focusout", function(){
		RegFormValidateEmail();
	})

$('.popover-dismiss').popover({
	trigger: 'focus'
})

function RegFormValidateEmail(){
	if ((modalRegInputsUsuario[0].validationMessage=="")&&(modalRegInputsUsuario[0].value!="")) {
		return true;
	} else {
		RegFormMensaje("El email no es válido");
		RegFormAPag(1);
		return false;
	}
}

function RegFormValidatePasswords(){
	if (modalRegInputsUsuario[1].value != modalRegInputsUsuario[2].value)
		{RegFormMensaje("Las contraseñas no coinciden");
		RegFormAPag(1);
		return false
	}
	if (modalRegInputsUsuario[1].value <4 )
		{RegFormMensaje("La contraseña tiene que tener más de 4 caracteres");
		RegFormAPag(1);
		return false
	}
	modalRegInputsUsuario[1].value
	return true;
}

function RegFormValidateDatosUsuario(){
	if (modalRegInputsDatosPersonales[0].text=="" || modalRegInputsDatosPersonales[1].text=="" ){
		RegFormMensaje("Es necesario nombre y apellido");
		RegFormAPag(2);
		return false;
	}
	return true;
}

function modalRegBorrar(){
	for (const iterator of modalRegInputsUsuario) {
		iterator.value="";
		iterator.selectedIndex=0;
		iterator.checked=false;
	}
	for (const iterator of modalRegInputsDatosPersonales) {
		iterator.value="";
		iterator.selectedIndex=0;
		iterator.checked=false;
	}
	$("#RegFormBotonAceptar").text("Siguiente");
	RegFormAPag(1);
}

function RegFormMensaje(parameter) {
	$("#labelModalRegMensaje").slideUp(constSpeed, ()=> {
		$("#labelModalRegMensaje").text(parameter);
		$("#labelModalRegMensaje").slideDown(constSpeed)
	})
} 
function RegFormAPag(parameter){
	$(`#modalRegTab li:nth-child(${parameter}) a`).tab('show');
}

function RegFormRegistrarUsuario(){
	var usuarioAGuardar;
	var txtProv;
	var txtCiudad;
	var txtId;
	for (const iterator of modalRegDataProvincia.options) {
		if (iterator.selected){txtProv=iterator.text}
	}
	for (const iterator of modalRegDataCiudad.options) {
		if (iterator.selected){txtCiudad=iterator.text}
	}
	usuarioAGuardar=UsuarioPorEmail(modalRegInputsUsuario[0].value);
	if (typeof usuarioAGuardar === 'undefined') {
		txtId=usuarios.length;
		usuarioAGuardar= new Usuario();
	} else {
		txtId=usuarioAGuardar.id;
	}
	usuarioAGuardar.id=txtId;
	usuarioAGuardar.nombre=modalRegDataNombres.value;
	usuarioAGuardar.apellido=modalRegDataApellido.value;
	usuarioAGuardar.email=modalRegDataEmail.value;
	usuarioAGuardar.contrasena=modalRegDataPass1.value;
	usuarioAGuardar.provincia=txtProv;
	usuarioAGuardar.ciudad=txtCiudad;
	usuarioAGuardar.ingresosSueldo=modalRegDataSueldoBlanco.value;
	usuarioAGuardar.ingresosAutonomo=modalRegDataSueldoAutonomo.value;
	usuarioAGuardar.ingresosNegro=modalRegDataSueldoNegro.value;
	usuarioAGuardar.tipoDeIngresos=modalRegDataSoyEstatal.checked;
	usuarioAGuardar.casaPropia=modalRegDataTengoCasa.checked;
	usuarioAGuardar.vehiculo=modalRegDataTengoAuto.checked;
		

	usuarios.push(usuarioAGuardar);
	localStorage.setItem("checkLogueado", "true");
	localStorage.setItem("usuarioLogueado", usuarioAGuardar.email);
	localStorage.setItem("usuarios",JSON.stringify(usuarios));
	cerrarModales();
	actualizar();
}
function UsuarioPorEmail(parameter){
	return usuarios.find(iterator => parameter === iterator.email)
}

function modalRegCargarUsuario(item){
	modalRegDataEmail.value = item.email;
	modalRegDataPass1.value ="";
	modalRegDataPass2.value ="";
	modalRegDataApellido.value = item.apellido;
	modalRegDataNombres.value = item.nombre;
	for (const iterator of modalRegDataProvincia.options) {
		if (iterator.text == item.provincia){iterator.selected=true}
		else {iterator.selected=false}
	}
	for (const iterator of modalRegDataCiudad.options) {
		if (iterator.text == item.ciudad) {iterator.selected=true}
		else {iterator.selected=false}
	}
	modalRegDataSueldoBlanco.value= item.ingresosSueldo;
	modalRegDataSueldoAutonomo.value= item.ingresosAutonomo;
	modalRegDataSueldoNegro.value= item.ingresosNegro;
	modalRegDataSoyEstatal.checked = item.tipoDeIngresos;
	modalRegDataTengoCasa.checked = item.casaPropia;
	modalRegDataTengoAuto.checked = item.vehiculo;
}

