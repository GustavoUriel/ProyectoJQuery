var selectOtorgante
var selectServicio

$('#AddServiceModal').on('show.bs.modal', function() {

	selectOtorgante= $("#ServFormOtorgante").first();
	selectServicio= $("#ServFormServicio").first();

	$("#labelServicioDescripcion").text("");
	$("#labelOtorganteDescripcion").text("");
	selectOtorgante.empty();
	selectOtorgante.append(`<option value="999" descripcion="">Seleccione un otorgante</option>`);
	for (const iterator of otorgantes) {
		selectOtorgante.append(`<option value="${iterator.id}" descripcion="${iterator.descripcion}">${iterator.nombre}</option>`);
	}
	selectOtorgante.index=0;
	selectServicio.prop("disabled", true)
	selectServicio.empty();
	selectServicio.append(`<option value="999" descripcion="">Seleccione un servicio</option>`);
	for (const iterator of tiposCreditos) {
		selectServicio.append(`<option value="${iterator.id}" descripcion="${iterator.descripcion}">${iterator.nombre}</option>`);
	}
	selectServicio.index=0;
})

$('#ServFormOtorgante').on('change', (function (e) { 
	selectServicio.prop("disabled", false);
	$("#labelOtorganteDescripcion").text(selectOtorgante[0].options[selectOtorgante[0].selectedIndex].attributes[1].value)
}))

$('#ServFormServicio').on('change', (function (e) { 
	$("#labelServicioDescripcion").text(selectServicio[0].options[selectServicio[0].selectedIndex].attributes[1].value)
}))

$('#buttonModalServicios').on('click', (function (e) { 
	var maxId = Math.max.apply(Math, cuentas.map(function(o) { return o.id; }))
	var	idUS=usuarioLogueado.id;
	var	idOt=parseInt(selectOtorgante[0].options[selectOtorgante[0].selectedIndex].value);
	var	idTC=parseInt(selectServicio[0].options[selectServicio[0].selectedIndex].value);
	today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	if(dd<10) dd='0'+dd;
	if(mm<10) mm='0'+mm;
	var	fecha= mm +'/' + dd + '/' + yyyy;
		var temp =new Cuenta(maxId,idUS,idOt,idTC,fecha);
	cuentas.push(temp);
	localStorage.setItem("cuentas",JSON.stringify(cuentas));
	actualizar();
	cerrarModales();
}))