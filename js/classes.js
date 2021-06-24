// DEFINICIONES DE LAS CLASES
class TipoCredito {
	constructor(id, nombre, imagen, descripcion) {
			this.id = id;
			this.nombre = nombre;
			this.imagen = imagen;
			this.descripcion = descripcion;
	}
}
class Otorgante {
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
class Usuario {
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
class Cuenta {
	constructor(id, idUsuario, idOtorgante, idTipoCredito, fecha) {
		this.id = id;
		this.idUsuario = idUsuario;
		this.idOtorgante = idOtorgante;
		this.idTipoCredito = idTipoCredito;
		this.fecha = fecha;
	}
/* 	CargarUsuario(email){
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
		borrar = cuentas.findIndex(iterator => iterator.id === this.id);
		if (borrar){
			cuentas.splice(borrar, 1);
			return true;
		}
		return false;
	} */
}
