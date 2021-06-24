//FORMA ACOTADA DE ESCRIBIR LA FUNCION .ready()
$(function(){

	// CARGAR DATOS DE EJEMPLO, Y ALGUNOS ALEATORIOS
	documentoClickable=false;
	inicializarDatos();

//	MostrarModalRegistro(); //SOLO PARA DEBUG
	// CARGA EN CARROUSEL 4 ENTIDADES ALEATORIAS (POR AHORA)
	cargaCarousel();
	// CAROUSEL TIEMPO DE ROTACION
	$("#carouselOtorgantes").carousel({
		interval: 2000
	});
	
});


