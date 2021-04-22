// DEFINICIONES DE LAS CLASES
class unTipoCredito {
	constructor(id, nombre, imagen, descripcion) {
			this.id = id;
			this.nombre = nombre;
			this.imagen = imagen;
			this.descripcion = descripcion;
	}
}
class unOtorgante {
	constructor(id, nombre, imagen, descripcion, telefono, otorgaTarjetaDeCredito, showOnCarousel) {
			this.id = id;
			this.nombre = nombre;
			this.imagen = imagen;
			this.descripcion = descripcion;
			this.telefono = telefono;
			this.otorgaTarjeta = otorgaTarjetaDeCredito;
			this.showOnCarousel = showOnCarousel;
	}
}
class unUsuario {
	constructor(id, nombre, apellido, email, contrasena, provincia, ciudad, estadoCivil, ingresosSueldo, ingresosAutonomo, ingresosNegro, tipoDeIngresos, casaPropia, vehiculo) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.contrasena = contrasena;
		this.provincia = provincia;
		this.ciudad = ciudad;
		this.estadoCivil = estadoCivil; // 0 soltero 1 casado
		this.ingresosSueldo = ingresosSueldo;
		this.ingresosAutonomo = ingresosAutonomo;
		this.ingresosNegro = ingresosNegro;
		this.tipoDeIngresos = tipoDeIngresos; //0 privado 1 estado
		this.casaPropia = casaPropia;
		this.vehiculo = vehiculo;
	}

}
class unaCuenta {
	constructor(idUsuario, idOtorgante, idTipoCredito) {
			this.idUsuario = idUsuario;
			this.idOtorgante = idOtorgante;
			this.idTipoCredito = idTipoCredito;
	}
	CargarUsuario(email){
		let tempfind = usuarios.find(temp => temp.email === email)
		if (tempfind) {
			this.idUsuario=tempfind.id;
			return true;
			}
		return false;
	}
	CargarOtorgante(id){
		this.idOtorgante=id;
		return true;
	}
	CargarTipoCrédito(id){
		this.TipoCrédito=id;
		return true;
	}
	Adjuntar(){
		this.id= cuentas.lenght+1;
		cuentas.push(this);
		return true;
	}
	Borrar(){
		borrar = cuentas.findIndex(temp => temp.id === this.id);
		if (borrar){
			cuentas.splice(borrar, 1);
			return true;
		}
		return false;
	}
}
