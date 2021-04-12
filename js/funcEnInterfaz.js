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

	listaCarouselOtorgantes = otorgantes.filter((temp)  => temp.showOnCarousel);

	// EMPIEZO EL FOR OF
	for (const item of listaCarouselOtorgantes) {  //cargo las páginas del carousel
  
		//  CREO TODAS LAS VARIABLES A USAR
		carouselItem = document.createElement("div");
		carouselA = document.createElement("a");
		carouselSubDiv= document.createElement("div");
		carouselH2 = document.createElement("h2");
		carouselP = document.createElement("p");
		carouselh2Span = document.createElement("span");
		carouselaImage = document.createElement("img");
		//  CREO TODO DE ADENTRO PARA AFUERA

		//  EL P
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
function ocultarSecciones(){
	$("#navbarItem1").removeClass("active");
	$("#navbarItem2").removeClass("active");
	$("#navbarItem3").removeClass("active");
	$("#navbarItem4").removeClass("active");

	$("#seccionHome").slideUp("1000");
	$("#seccionServicios").slideUp("1000");
	$("#seccionServiciosUsuario").slideUp("1000");
	$("#seccionNosotros").slideUp("1000");
	$("#seccionContanosAlgo").slideUp("1000");
}
function irAHome(){
	ocultarSecciones();
	$("#navbarItem1").addClass('active');
	$("#seccionHome").slideDown("1000");
}
function irAServicios(){
	ocultarSecciones();
	$("#navbarItem2").addClass('active');
	$("#seccionServicios").slideDown("1000");
}
function irANosotros(){
	ocultarSecciones();
	$("#navbarItem3").addClass('active');
	$("#seccionNosotros").slideDown("1000");
} 
function irAServiciosUsuario(){
	ocultarSecciones();
	$("#navbarItem2").addClass('active');
	$("#seccionServiciosUsuario").slideDown("1000");
}
function irAContanos(){  let items =  $("#navbarItem").parent.children;
	ocultarSecciones();
	$("#navbarItem4").addClass('active');
	$("#seccionContanosAlgo").slideDown("1000");
}  

// ESTAS FUNCIONES SON PARA CAMBIAR LOS BOTONES DE REGISTRO Y LOGIN (Y ANONIMO) DE ACUERDO A SI HAY O NO UN USUARIO LOGUEADO
function animacionConUsuario(){
	$("#RegistrarseButton").delay(2000)
												.slideUp(2000, function() { $("#RegistrarseButton").text("Hola " +
																									usuarioLogueado.nombre + " " +
																									usuarioLogueado.apellido) }) 
												.slideDown(2000);
	$("#AnonimoButton").slideUp(2000);
	$("#LogInButton").text("Salir");
}
function animacionSinUsuario(){
	$("#RegistrarseButton").text($("#RegistrarseButton").text().replace("Hola", "Chau"));
	$("#RegistrarseButton").delay( 1000 )
	.slideUp(1000, function() { $("#RegistrarseButton").text (txtMainJumbotronRegistrar) }) 
	.slideDown(1000);
	$("#AnonimoButton").slideDown(1000);
	$("#LogInButton").text("Ingresar!");
}

// ESTAS FUNCIONES SON PARA VACIAR Y CARGAR LA INFORMACION DEL USUARIO Y SUS SERVICIOS ASOCIADOS
function vaciarUsuario(){
    while ($("#accordionServiciosUsuario").firstChild) {
			$("#accordionServiciosUsuario").removeChild($("#accordionServiciosUsuario").firstChild);
    }
    while ($("#txtInformacionPersonal").firstChild) {
			$("#txtInformacionPersonal").removeChild($("#txtInformacionPersonal").firstChild);
    }
}
function cargarInformaciónUsuario(temp){
	if (temp.estadoCivil==0) {txtEstadoCivil='no casado/a'} else {txtEstadoCivil='casado/a'}
	if (temp.tipoDeIngresos==0) {txtEstatal=""}	else {txtEstatal=" (empleo estatal)"}
	if (temp.casaPropia) {txtCasa=""}	else {txtCasa=" no"}
	if (temp.vehiculo) {txtAuto=""}	else {txtAuto=" no"}
	if (temp.ingresosNegro==0) {txtNegro=" y no tenés otros ingresos."}
	else {txtNegro=` y (Shh, tu secreto está a salvo con nosotros) alrededor de ${temp.ingresosNegro} de ingresos no facturados ni declarados.`}
	txtResidencia = temp.ciudad;
	if (temp.ciudad != "CABA") {txtResidencia = txtResidencia + " en " + temp.provincia}
	txtTemp =`<h4>
Vos, ${temp.nombre} ${temp.apellido}, D.N.I.: ${temp.id} te registraste con el email ${temp.email}.
Vivís en ${temp.ciudad} en ${temp.provincia}, sos ${txtEstadoCivil}.
Actualmente${txtCasa} tenés casa propia y${txtAuto} tenés auto.
Tus ingresos son ${temp.ingresosSueldo} pesos mensuales${txtEstatal}, ${temp.ingresosAutonomo} por trabajos autónomos facturadas${txtNegro}
Y estas son las cuentas que nos contaste que tenés</h4>`
	console.log(txtTemp);
	let contenedor = document.createElement("div");
	contenedor.innerHTML =txtTemp;
	$("#txtInformacionPersonal").prepend(contenedor)
}
function cargarServiciosUsuario(titulo, titulo2, descripcion, propuesta, etiqueta){
	if (etiqueta) {
		etiqueta = `<span class="badge badge-danger">${etiqueta}</span>`
	}
	let contenedor = document.createElement("div");
	contenedor.classList.add("card");
	contenedor.innerHTML = `<div class="card-header" role="tab" id="ceroEncabezado">
														<h3 class="mb-0">
															<p data-toggle="collapse" data-target="#cero">
																${titulo}, ${titulo2}
															</p>
														</h3>
													</div>
													<div class="collapse show" id="cero" data-parent="#accordion">
														<div class="card-body">
															<p class="">${descripcion}</p>
															${etiqueta}
															<p class="">${propuesta}</p>
														</div>
													</div>
													`;
$("#accordionServiciosUsuario").prepend(contenedor);
}