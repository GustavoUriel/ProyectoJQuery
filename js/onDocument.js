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

	listaCarouselOtorgantes = otorgantes.filter((iterator) => iterator.showOnCarousel);


	// EMPIEZO EL FOR OF
	for (const iterator of listaCarouselOtorgantes) { //cargo las páginas del carousel
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
		carouselP.textContent = `${iterator.descripcion}`;
		// EL H
		carouselh2Span.classList.add("badge");
		carouselh2Span.classList.add("badge-info");
		carouselh2Span.textContent = `${iterator.nombre}`;
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
		carouselaImage.src = `${iterator.imagen}`;
		carouselaImage.alt = `${iterator.nombre}`;
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

function irA(parameter){
	ocultarSecciones();
	$("#"+parameter)[0].classList.add('active');
	$("#seccion"+parameter).slideDown("constSpeed");
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

function cargarInformaciónUsuario(parameter){
	if (parameter.tipoDeIngresos==0) {txtEstatal=""}	else {txtEstatal="(empleo estatal)"}
	if (parameter.casaPropia) {txtCasa=""}	else {txtCasa=" no"}
	if (parameter.vehiculo) {txtAuto=""}	else {txtAuto=" no"}
	if (parameter.ingresosNegro==0) {txtNegro=" y no tenés otros ingresos."}
	else {txtNegro=`y (Sh!, tu secreto está a salvo con nosotros) alrededor de ${parameter.ingresosNegro} de ingresos no facturados ni declarados.`}
	txtResidencia = parameter.ciudad;
	if (parameter.ciudad != "CABA") {txtResidencia = txtResidencia + " en " + parameter.provincia}
	txtTemp =`<h4>
Hola ${parameter.nombre} ${parameter.apellido}, vos te registraste con el email: ${parameter.email}. <br>
Pronto tendremos tips y consejos para aprovechar tu dinero, específicamente en tu ciudad, en ${txtResidencia}. <br>
Como sabemos que ${txtCasa} tenés casa propia y${txtAuto} tenés auto, vamos a seleccionar nuestras propuestas a lo que más te convenga. <br>
Tus ingresos son ${parameter.ingresosSueldo} pesos mensuales ${txtEstatal}, y ${parameter.ingresosAutonomo} por trabajos autónomos facturados ${txtNegro}
</h4>`
	let contenedor = document.createElement("div");
	contenedor.classList.add("info-descartable");
	contenedor.innerHTML =txtTemp;
	$("#txtInformacionPersonal").prepend(contenedor)
}

function agregarServiciosUsuario(parameter){

	let contenedor = document.createElement("div");
	contenedor.classList.add("card");
	contenedor.innerHTML = `
												<div class="card-header info-descartable row" id="head${parameter.id}" role="tab">
												<p data-toggle="collapse" data-target="#body${parameter.id}" class="col-10">
													Otorgante: ${otorgantes.find(iterator	=> iterator.id === parameter.idOtorgante).descripcion} <br>
													Tipo de servicio: ${tiposCreditos.find(iterator	=> iterator.id === parameter.idTipoCredito).nombre} <br>
													Explicación:  ${tiposCreditos.find(iterator	=> iterator.id === parameter.idTipoCredito).descripcion} <br>
												</p>
												<button type="button" class="btn btn-secondary font-weight-bold col-2 buttonDeleteService" id="servicio${parameter.id}">Eliminar</button>
												</div>
												<div class="collapse show info-descartable row" id="body${parameter.id}" data-parent="#acordeon">
													<div class="card-body">
													<span class="badge badge-danger">${parseInt(Math.random() * 50)} % de ahorro</span>
														<p class="">Nuestra propuesta generada por AI. La etiqueta es generada random ahora, pero debería ser calculable</p>
													</div>
												</div>
												`;
$("#acordeonServiciosUsuario").prepend(contenedor);
}

function cerrarModales() {
	$('.modal').modal('hide');
	$("#labelFormLogIn").text("");
}

function deshabilitarBotones(parameter){
	documentoClickable = !(parameter);
	$("#RegistrarseButton").prop('disabled', parameter);
	$("#AnonimoButton").prop('disabled', parameter);
}




