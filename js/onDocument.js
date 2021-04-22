// CARGAR 4 ENTIDADES EN CARROUSEL
function cargaCarousel(){

	// CARGA DE DATOS EN EL CARROUSEL
	// CAMBIAR DINÁMICAMENTE LA CANTIDAD DE INDICADORES. TODAVÍA NO LO HICE
	const carousel = document.getElementById("carouselDentro");
	var carouselItem
	var carouselA
	var carouselSubDiv
	var carouselH2
	var carouselP
	var listaCarouselOtorgantes=[]

	//FILTRO EN OTORGANTES LOS QUE TIENEN TRUE EL VALOR SHOWONCAROUSEL

	listaCarouselOtorgantes = otorgantes.filter((temp) => temp.showOnCarousel);


	// EMPIEZO EL FOR OF
	for (const item of listaCarouselOtorgantes) { //cargo las páginas del carousel
		// CREO TODAS LAS VARIABLES A USAR
		carouselItem = document.createElement("div");
		carouselA = document.createElement("a");
		carouselSubDiv= document.createElement("div");
		carouselH2 = document.createElement("h2");
		carouselP = document.createElement("p");
		carouselh2Span = document.createElement("span");
		carouselaImage = document.createElement("img");
		// CREO TODO DE ADENTRO PARA AFUERA

		// EL P
		carouselP.classList.add("d-none");
		carouselP.classList.add("d-sm-block");
		carouselP.textContent = `${item.descripcion}`;
		// EL H
		carouselh2Span.classList.add("badge");
		carouselh2Span.classList.add("badge-info");
		carouselh2Span.textContent = `${item.nombre}`;
		carouselH2.appendChild(carouselh2Span);
		// EL SUBCONTENEDOR
		carouselSubDiv.classList.add("carousel-caption");
		carouselSubDiv.classList.add("d-none");
		carouselSubDiv.classList.add("d-sm-block");
		// ARMO EL SUBCONTENEDOR
		carouselSubDiv.appendChild(carouselH2); // <div><p><span class="badge badge-danger">item.nombre</span></p></div>
		carouselSubDiv.appendChild(carouselP); // <div><p class="d-none d-sm-block"> Texitos de la descripcion </p></div>

		// LA IMAGEN
		carouselaImage.classList.add("d-block");
		carouselaImage.classList.add("img-fluid");
		carouselaImage.src = `${item.imagen}`;
		carouselaImage.alt = `${item.nombre}`;
		// EL A
		carouselA.href = ".";
		// ARMO EL A
		carouselA.appendChild(carouselaImage);

		// EL CONTENEDOR DEFINITIVO
		carouselItem.classList.add("carousel-item");
		carouselItem.appendChild(carouselA);

		// ARMO EL CONTENEDOR DEFINITIVO
		carouselItem.appendChild(carouselSubDiv);

		// AGREGO EL CONTENEDOR AL CAROUSEL
		carousel.appendChild(carouselItem);
	};
}

// ESTAS FUNCIONES SON PARA CAMBIAR DE VISTA, DE ACUERDO AL NAVBAR U OTROS COMANDOS
// Y ALGUNAS VISTAS DEPENDEN DE SI HAY UN USUARIO LOGUEADO O NO

function ocultarSecciones(){
	for (const iterator of $(".navbarItem")) {
		iterator.classList.remove("active");
		$("#seccion"+iterator.id).slideUp("constSpeed");
	}
}

function MostrarModalRegistro() {
	$("#RegistrarseModal").modal('show');
}

function irA(temp){
	ocultarSecciones();
	$("#"+temp)[0].classList.add('active');
	$("#seccion"+temp).slideDown("constSpeed");
}

// ESTAS FUNCIONES SON PARA CAMBIAR LOS BOTONES DE REGISTRO Y LOGIN (Y ANONIMO) DE ACUERDO A SI HAY O NO UN USUARIO LOGUEADO
function animacionConUsuario(){
	$("#RegistrarseButton").delay(constSpeed)
		.slideUp(constSpeed, function() { $("#RegistrarseButton").text("Hola " +
		usuarioLogueado.nombre + " " + usuarioLogueado.apellido)}) 
		.slideDown(constSpeed, function() {
		$("#AnonimoButton").slideUp(constSpeed, function() { $("#AnonimoButton").text("Modificar mis datos")}) 
		.slideDown(constSpeed, function() {actualizar_continuarConUsuario()});});
		$("#LogInButton").text("Salir");
	$("#ServiciosUsuario")[0].style.display = "block";
}

function animacionSinUsuario(){
	$("#RegistrarseButton").text($("#RegistrarseButton").text().replace("Hola", "Chau Chau"));
	$("#RegistrarseButton").delay( constSpeed )
	.slideUp(constSpeed, function() { $("#RegistrarseButton").text(txtMainJumbotronRegistrar)}) 
	.slideDown(constSpeed, function() {
	$("#AnonimoButton").slideUp(constSpeed, function() { $("#AnonimoButton").text("Entrada anónima")}) 
	.slideDown(constSpeed, function() {actualizar_continuarSinUsuario()});});
	$("#LogInButton").text("Ingresar!");
	$("#ServiciosUsuario")[0].style.display = "none";
}

// ESTAS FUNCIONES SON PARA VACIAR Y LA INFORMACION DEL USUARIO Y SUS SERVICIOS ASOCIADOS
function vaciarUsuario(){

	item = $("#acordeonServiciosUsuario").children();
	for (const iterator of item) {
		iterator.parentNode.removeChild(iterator);
	}
	item = $("#txtInformacionPersonal").children();
	for (const iterator of item) {
		iterator.parentNode.removeChild(iterator);
	}
	
}	

function cargarInformaciónUsuario(temp){
	if (temp.estadoCivil==0) {txtEstadoCivil='no casado/a'} else {txtEstadoCivil='casado/a'}
	if (temp.tipoDeIngresos==0) {txtEstatal=""}	else {txtEstatal=" (empleo estatal)"}
	if (temp.casaPropia) {txtCasa=""}	else {txtCasa=" no"}
	if (temp.vehiculo) {txtAuto=""}	else {txtAuto=" no"}
	if (temp.ingresosNegro==0) {txtNegro=" y no tenés otros ingresos."}
	else {txtNegro=` y (Sh!, tu secreto está a salvo con nosotros) alrededor de ${temp.ingresosNegro} de ingresos no facturados ni declarados.`}
	txtResidencia = temp.ciudad;
	if (temp.ciudad != "CABA") {txtResidencia = txtResidencia + " en " + temp.provincia}
	txtTemp =`<h4>
Vos, ${temp.nombre} ${temp.apellido}, D.N.I.: ${temp.id} te registraste con el email ${temp.email}.
Vivís en ${txtResidencia}, sos ${txtEstadoCivil}.
Actualmente${txtCasa} tenés casa propia y${txtAuto} tenés auto.
Tus ingresos son ${temp.ingresosSueldo} pesos mensuales${txtEstatal}, y ${temp.ingresosAutonomo} por trabajos autónomos facturados${txtNegro}
</h4>`
	let contenedor = document.createElement("div");
	contenedor.classList.add("info-descartable");
	contenedor.innerHTML =txtTemp;
	$("#txtInformacionPersonal").prepend(contenedor)
}

function agregarServiciosUsuario(titulo, titulo2, descripcion, propuesta, etiqueta){
	if (etiqueta) {
		etiqueta = `<span class="badge badge-danger">${etiqueta}</span>`
	}
	let contenedor = document.createElement("div");
	contenedor.classList.add("card");
	contenedor.innerHTML = `<div class="card-header info-descartable" role="tab" id="ceroEncabezado">
														<h3 class="mb-0">
															<p data-toggle="collapse" data-target="#cero">
																${titulo}, ${titulo2}
															</p>
														</h3>
													</div>
													<div class="collapse show" id="cero" data-parent="#acordeon">
														<div class="card-body">
															<p class="">${descripcion}</p>
															${etiqueta}
															<p class="">${propuesta}</p>
														</div>
													</div>
													`;
$("#acordeonServiciosUsuario").prepend(contenedor);
}

function cerrarModales() {
	$('.modal').modal('hide');
	$("#labelFormLogIn").text("");
}

function deshabilitarBotones(valor){
	documentoClickable = !(valor);
	$("#RegistrarseButton").prop('disabled', valor);
	$("#AnonimoButton").prop('disabled', valor);
}










function generarSalida(listadoTareas){
	let body = document.getElementById("tablaTareas").children[1];
	let inner = "";
	for (const tarea of listadoTareas) {
	  inner += `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${tarea.tipo}</td><td>${tarea.descripcion}</td><td>${tarea.fecha.getDate()}/${tarea.fecha.getMonth() + 1}/${tarea.fecha.getFullYear()}</td></tr>`;
	}
	body.innerHTML = inner;
  }
  
  