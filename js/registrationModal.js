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

	// AL ABRIR EL MODAL DE REGISTRO
	$('#RegistrarseModal').on('show.bs.modal', function() {
		if (usuarioLogueado){
			modalRegCargarUsuario(usuarios.find(temp => localStorage.usuarioLogueado === temp.email));
		} else {
			console.log("no hay cargado, borrando");
			modalRegBorrar();
		}
	})

	$('#RegFormSProvincia').on('change', (function (e) { 
		//CADA VEZ QUE CAMBIA EL VALOR DEL SELECT SE REALIZAR UNA LLAMADA AL API PARA CARGAR LOS MUNICIPIOS CORRESPONDIENTES.
		let idProvincia = $(this).val();
		//LA LLAMADA AL API PARA LOS MUNICIPIOS SE REALIZA MEDIANTE UNA FUNCIÒN. ASI PUEDE UTILIZARSE EN LA CARGA INICIAL TAMBIEN.
		console.log(idProvincia);
		let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`;
		//SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
		console.log(apiMunicipios);
		$.get(apiMunicipios, function(datos,estado){
			$('#RegFormSCiudad').empty();
			//console.log(datos);
			for (const municipio of datos.municipios) {
				console.log(municipio.id);
				console.log(municipio.nombre);
				$('#RegFormSCiudad').append(`<option value="${municipio.id}">${municipio.nombre}</option>`)
			}
		});
	}));
});
	// AL CERRAR MODAL DE REGISTRO
	$('#RegistrarseModal').on('hidden.bs.modal', function() {
		modalRegBorrar();
	});

	// AL CLICK EN EL BOTON DE SIGUIENTE/REGISTRAR
    $("#RegFormBotonAceptar").on('click', function(){
		console.log('1');
        if ( $("#RegFormBotonAceptar").text()=="Siguiente") {
			console.log('2');
			var ok=true;
			ok= (ok && RegFormValidateEmail());
			ok= (ok && RegFormValidatePasswords());
			console.log('3');
			if (ok) {
				console.log('4');
				RegFormAPag(2);
				$("#RegFormBotonAceptar").text("Registrarse");
			} else {		
				console.log('5');
				return;
			}
		} else {		
			console.log('6');
			var ok;
			ok= RegFormValidateDatosUsuario();
			if (ok) {
				console.log('7');
				RegFormRegistrarUsuario();
				/* cerrarModales(); */
			} else {
				console.log('8');
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

function RegFormMensaje(msg) {
	$("#labelModalRegMensaje").slideUp(constSpeed, ()=> {
		$("#labelModalRegMensaje").text(msg);
		$("#labelModalRegMensaje").slideDown(constSpeed)
	})
} 
function RegFormAPag(num){
	$(`#modalRegTab li:nth-child(${num}) a`).tab('show');
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
console.log(usuarioAGuardar);
	if (typeof usuarioAGuardar === 'undefined') {
		txtId=usuarios.length;
		usuarioAGuardar= new unUsuario();
		console.log("no habia");
	} else {
		txtId=usuarioAGuardar.id;
		console.log("habia");
	}
console.log(txtId);
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
		
	console.log(usuarioAGuardar);

	usuarios.push(usuarioAGuardar);
	localStorage.setItem("checkLogueado", JSON.stringify(true));
	localStorage.setItem("usuarioLogueado", usuarioAGuardar.email);
	localStorage.setItem("usuarios",JSON.stringify(usuarios));
	cerrarModales();
	actualizar();
}
function UsuarioPorEmail(email){
	return usuarios.find(temp => email === temp.email)
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
