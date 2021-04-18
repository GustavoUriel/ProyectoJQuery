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
	constructor(dni, nombre, apellido, email, contrasena, provincia, ciudad, estadoCivil, ingresosSueldo, ingresosAutonomo, ingresosNegro, tipoDeIngresos, casaPropia, vehiculo) {
			this.id = dni;
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
	constructor(dniUsuario, idOtorgante, idTipoCredito) {
			this.dniUsuario = dniUsuario;
			this.idOtorgante = idOtorgante;
			this.idTipoCredito = idTipoCredito;
	}
}
