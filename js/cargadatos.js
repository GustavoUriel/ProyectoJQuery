const creditos = [] // array de opciones creditos y bancos disponibles
const tipos_creditos = [] // array de modalidades de creditos
const otorgantes = [] // array de bancos
let cantidad 

class tipo_credito {
    constructor(id, nombre, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
if (tipos_creditos.length ==0){
    tipos_creditos.push(new tipo_credito(0,"Descubierto en CC$","https://dummyimage.com/300x300/9675cd/522da8.png&text=Descubierto", "Tasa de interés aplicable al descubierto de una cuenta corriente en pesos"))
    tipos_creditos.push(new tipo_credito(1,"Saldo de Tarjeta VISA","https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésMaster", "Tasa de interés aplicable al saldo impago del resumen de la tarjeta MasterCard"))
    tipos_creditos.push(new tipo_credito(2,"Saldo de Tarjeta Mastercard","https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésVisa", "Tasa de interés aplicable al saldo impago del resumen de la tarjeta Visa"))
    tipos_creditos.push(new tipo_credito(3,"Saldo de Tarjeta AMEX","https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito", "Tasa de interés aplicable al momento de solicitar un crédito en pesos"))
    tipos_creditos.push(new tipo_credito(3,"Crédito a sola firma","https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito", "Tasa de interés aplicable al momento de solicitar un crédito en pesos"))
}

class otorgante {
    constructor(id, nombre, imagen, descripcion, telefono, showOnCarousel) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.showOnCarousel = showOnCarousel;
    }
}
if (otorgantes.length ==0){
    otorgantes.push(new otorgante(0,"Francés","https://dummyimage.com/300x300/9675cd/522da8.png&text=Francés", "Banco Bilbao Vizcaya Argentaria (BBVA), banco español que por algún extraño motivo es conocido en Argentina como Banco Francés", "0800-333-0303", false))
    otorgantes.push(new otorgante(1,"ICBC","https://dummyimage.com/300x300/9675cd/522da8.png&text=ICBC", "Industrial and Commercial Bank of China", "0810-444-4652", false))
    otorgantes.push(new otorgante(2,"HSBC","https://dummyimage.com/300x300/9675cd/522da8.png&text=HSBC", "Hong Kong and Shanghai Banking Corporation Limited", "0810-333-4722", false))
    otorgantes.push(new otorgante(3,"Credicoop","https://dummyimage.com/300x300/9675cd/522da8.png&text=Credicoop", "Banco Credicoop Cooperativo Limitado", "0810-888-4500", false))
    otorgantes.push(new otorgante(4,"Río","https://dummyimage.com/300x300/9675cd/522da8.png&text=RIO", "Banco Río", "0810-888-4500", false))
    otorgantes.push(new otorgante(5,"Santa_Fe","https://dummyimage.com/300x300/9675cd/522da8.png&text=Santa_Fe", "Banco Santa Fe", "0810-888-4500", false))
    otorgantes.push(new otorgante(6,"Nación","https://dummyimage.com/300x300/9675cd/522da8.png&text=BNA", "Banco de la Nación Argentina", "0810-888-4500", false))
}
class credito {
    constructor(otorgante, tipo, descripcion, interes, esFrances) {
        this.otorgante = otorgante;
        this.tipo = tipo;
        this.descripcion =  "Tasa de interés del Banco " + 
                            otorgantes[otorgante].nombre + 
                            "para el" +
                            tipos_creditos[tipo] ;
        this.interes = interes;
        this.esFrances = esFrances;
    }
}
console.log(creditos.length)
if (creditos.length ==0){
    for (TMPbanco of otorgantes){
        for (TMPtipo of tipos_creditos){
            creditos.push(new credito(TMPbanco.id, TMPtipo.id, true, 100*Math.random()))
        }
    }
    let a = 4;
    let temp;
    while (0<a){
        temp = parseInt(Math.random()*otorgantes.length);
        console.log(temp);
        if (otorgantes[temp].showOnCarousel == false) {
            otorgantes[temp].showOnCarousel = true;
            a = a -1;
        }
    }
}
