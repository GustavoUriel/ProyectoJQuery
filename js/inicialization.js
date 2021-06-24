// INICIALIZAR DATOS CON EJEMPLOS Y ALGO DE RANDOM, SI ES QUE NO ESTAN CARGADOS EN EL LOCALSTORAGE
function inicializarDatos(){


	// INICIALIZO LA VARIABLE LOCAL CHECKLOGUEADO PARA QUE NO DE ERROR EN POSIBLES CONSULTAS
	if (localStorage.checkLogueado !== "true") {
		localStorage.checkLogueado = "false"}

	//LAMADA ASINCRONA GET PARA OBTENER EL LISTADO DE LAS PROVINCIAS
	$.get(URLJsonProvincias,callbackGetProvincias);
	// CARGAR LAS PROVINCIAS
	function callbackGetProvincias(respuesta, estado){
		$("#RegFormSProvincia").empty();
		$("#RegFormSProvincia").append(`<option value="999">Territorio Nacional</option>`);
		if(estado === "success"){
			respuesta.provincias.sort((a,b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : ((a.nombre.toLowerCase() < b.nombre.toLowerCase()) ? -1 : 0));
			for (const provincia of respuesta.provincias) {
				//AGREGAMOS UNA OPCION AL SELECT POR USUARIO EN LA RESPUESTA, EMPLEAMOS MEJOR LA NOTACION DE TEMPLATE DE CARACTERES (EJ:`cadena${variable}cadena2`) PARA DEFINIR EL ELEMENTO AGREGAR AL DOM.
				$("#RegFormSProvincia").append(`<option value="${provincia.id}">${provincia.nombre}</option>`);
			}
		}
		$("#RegFormSProvincia").index=0;
	}

// MATRIZ DE TIPOS DE CREDITOS - SI ES UNDEFINED CARGAR DE LOCALSTORAGE
	if (typeof localStorage.tiposCreditos !== 'undefined'){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
		tiposCreditos = JSON.parse(localStorage.tiposCreditos);}
	
// MATRIZ DE OTORGANTES - SI ES UNDEFINED CARGAR DE LOCALSTORAGE
	if (typeof localStorage.otorgantes !== 'undefined'){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
		otorgantes = JSON.parse(localStorage.otorgantes);}
	
// MATRIZ DE USUARIOS - SI ES UNDEFINED CARGAR DE LOCALSTORAGE
	if (typeof localStorage.usuarios !== 'undefined'){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
		usuarios = JSON.parse(localStorage.usuarios);}

	// MATRIZ DE CUENTAS - SI ES UNDEFINED CARGAR DE LOCALSTORAGE
	if (typeof localStorage.cuentas !== 'undefined'){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
		cuentas = JSON.parse(localStorage.cuentas);}
		
	// CALLBACK0, INICIO LA SECUENCIA DE CALLBACKS. CARGA TIPOS DE CREDITOS
	var respuestaGJSON;
	cbk0();
	// FUNCION CALLBACK0, CARGA TIPOS DE CREDITOS
	function cbk0(){
		$.getJSON(JSONtiposCreditos,
			function(datos,estado){respuestaGJSON = datos}).done(
			() => {	if (tiposCreditos.length==0){ 
				tiposCreditos=respuestaGJSON;
						localStorage.setItem("tiposCreditos",JSON.stringify(tiposCreditos));}
					cbk1();})
	}
	// FUNCION CALLBACK1, CARGA OTORGANTES
	function cbk1(){
		$.getJSON(JSONotorgantes,
			function(datos,estado){respuestaGJSON = datos}).done(
				() => {	if (otorgantes.length==0){ 
					otorgantes=respuestaGJSON;
					localStorage.setItem("otorgantes",JSON.stringify(otorgantes));}
				cbk2();})
	}
	// FUNCION CALLBACK2, CARGA USUARIOS
	function cbk2(){
		$.getJSON(JSONusuarios,
			function(datos,estado){respuestaGJSON = datos}).done(
			() => {	if (usuarios.length==0){ 
					usuarios=respuestaGJSON;
					localStorage.setItem("usuarios",JSON.stringify(usuarios));}
				cbk3();})
	}
	// FUNCION CALLBACK3, CARGA CUENTAS
	function cbk3(){
		$.getJSON(JSONcuentas,
			function(datos,estado){respuestaGJSON = datos}).done(
			() => {	if (cuentas.length==0){ 
						cuentas=respuestaGJSON;
						localStorage.setItem("cuentas",JSON.stringify(cuentas));}
					cbk4();})
	}
	{	// CALLBACK4, ACTUALIZAR
		function cbk4(){actualizar();}
	}
}






















/* GULusuarios f1a3a14f-c4ce-4db6-93dc-1f2f9ec22e46 
 */


