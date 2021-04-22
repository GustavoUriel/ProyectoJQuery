

// INICIALIZAR DATOS CON EJEMPLOS Y ALGO DE RANDOM, SI ES QUE NO ESTAN CARGADOS EN EL LOCALSTORAGE
function inicializarDatos(){

	// INICIALIZO LA VARIABLE LOCAL CHECKLOGUEADO PARA QUE NO DE ERROR EN POSIBLES COSULTAS
console.log("usuario logueado?" + localStorage.checkLogueado);
	if (!(typeof localStorage.checkLogueado === 'boolean')) {localStorage.checkLogueado = false}

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


	{// MATRIZ DE TIPOS DE CREDITOS
		if (!!(localStorage.tiposCreditos)){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
			tiposCreditos = JSON.parse(localStorage.tiposCreditos);
		} 
		if (tiposCreditos.length==0){ // SI EL ARRAY ES VACÍO, LO CARGO CON LOS DATOS POR HARD
			$.getJSON(JSONtiposCreditos, function(datos,estado){tiposCreditos = datos})
			// Y LO GUARDO EN EL LOCALSTORAGE
		}
		localStorage.setItem("tiposCreditos",JSON.stringify(tiposCreditos));

	}
	{	// MATRIZ DE OTORGANTES
		if (!!(localStorage.otorgantes)){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
			otorgantes = JSON.parse(localStorage.otorgantes);
		} 
		if (otorgantes.length == 0){ // SI EL ARRAY ES VACÍO, LO CARGO CON LOS DATOS POR HARD
			$.getJSON(JSONotorgantes, function(datos,estado){otorgantes = datos})
			// Y LO GUARDO EN EL LOCALSTORAGE
		}
		localStorage.setItem("otorgantes",JSON.stringify(otorgantes));
	}

	{	// MATRIZ DE USUARIOS
		if (!!(localStorage.usuarios)){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
			usuarios = JSON.parse(localStorage.usuarios);
		} 
		if (usuarios.length == 0){ // SI EL ARRAY ES VACÍO, LO CARGO CON LOS DATOS POR HARD
			$.getJSON(JSONusuarios, function(datos,estado){usuarios = datos})
			// Y LO GUARDO EN EL LOCALSTORAGE
		}
		localStorage.setItem("usuarios",JSON.stringify(usuarios));

	}

	{	// MATRIZ DE CUENTAS
		if (!!(localStorage.cuentas)){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
			cuentas = JSON.parse(localStorage.cuentas);
		} 
		if (cuentas.length == 0){ // SI EL ARRAY ES VACÍO, LO CARGO CON LOS DATOS POR HARD
			$.getJSON(JSONcuentas, function(datos,estado){cuentas = datos})
			// Y LO GUARDO EN EL LOCALSTORAGE
		}
		localStorage.setItem("cuentas",JSON.stringify(cuentas));
	}

	// SOLO PARA CUMPLIR
/* 	$.post("https://jsonplaceholder.typicode.com/posts",{title: "usuarios" ,body: JSON.stringify(usuarios), userId: "none"}, callbackPostPublicacion);
	function callbackPostPublicacion(respuesta){
		console.log(respuesta);
	}
 */

}






















/* GULusuarios f1a3a14f-c4ce-4db6-93dc-1f2f9ec22e46 
 */


