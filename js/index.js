// FUNCIONAMIENTO DE LA PÁGINA

$("#carouselOtorgantes").carousel({  
    interval: 2000 
});
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#carouselOtorgantes").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#carouselOtorgantes").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

// CARGA DE DATOS EN EL CARROUSEL

// CAMBIAR DINÁMICAMENTE LA CANTIDAD DE INDICADORES. TODAVÍA NO LO HICE


// <li data-target="#carouselOtorgantes" data-slide-to="1"></li>
// <li data-target="#carouselOtorgantes" data-slide-to="2"></li>
// <li data-target="#carouselOtorgantes" data-slide-to="3"></li>
// <li data-target="#carouselOtorgantes" data-slide-to="4"></li>


// console.log(carousel)

//  NOMBRO TODAS LAS VARIABLES A USAR
//const carouselIndicadores = document.getElementById("carouselIndicadores");
//var carouselIndi

const carousel = document.getElementById("carouselDentro");
var carouselItem
var carouselA
var carouselSubDiv
var carouselH2
var carouselP
var contador = 1
var carouselOtorgantes

carouselOtorgantes = otorgantes.filter((temp)  => temp.showOnCarousel);

// EMPIEZO EL FOR OF
for (const item of carouselOtorgantes) {  //cargo las páginas del carousel
// AGREGO EL INDICADOR AL LISTADO DE INDICADORES
/* carouselIndi = document.createElement("li");
carouselIndi.innerHTML = `<li data-target="#carouselOtorgantes" data-slide-to="'${contador}'"></li>`;
contador = contador + 1;
carouselIndicadores.appendChild(carouselIndi);
 */
// CREAR, CON ESTOS DATOS:
//function otorgantes(id, nombre, imagen, descripcion, telefono) {
// ESTA ESTRUCTURA:
/*  
                <div class="carousel-item">
                    <a href=".""> // POR AHORA
                        <img class="d-block img-fluid"
                        src=item.imagen alt=item.nombre>
                    </a>
                    <div class="carousel-caption d-none d-sm-block">
                        <h2><span class="badge badge-danger">item.nombre</span></h2>
                        <p class="d-none d-sm-block">
                        item.descripcion<br>
                    </p>
                </div>
*/

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
    carouselh2Span.classList.add("badge-danger");
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


// PROGRAMACIÓN

/* 
<a href="."> <img class="d-block img-fluid" src="https://dummyimage.com/300x300/9675cd/522da8.png&text=ICBC" alt="Banco ICBC">

<span class="badge badge-danger">Banco ICBC</span>

Industrial and Commercial Bank of China


let ordenListado = 1;
let mostrarTipo = 1;
let respuesta =""
while(true){
    ordenListado = qOrdenListado (); //ya viene parseado y acotado
    if (ordenListado == 0)
        {break}
        switch (ordenListado) { 
        case 1:
            creditos.sort((a,b) => (a.otorgante.toLowerCase() > b.otorgante.toLowerCase()) ? 1 : ((a.otorgante.toLowerCase() < b.otorgante.toLowerCase()) ? -1 : 0));
            break;
        case 2: 
            creditos.sort((a,b) => (a.interes > b.interes) ? 1 : ((b.interes > a.interes) ? -1 : 0));
            break;
        case 3:
            creditos.sort((a,b) => (añ.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : ((a.nombre.toLowerCase() < b.nombre.toLowerCase()) ? -1 : 0));
            break;
        default:
            break;
        }
        mostrarTipo = qMostrarTipo();
        if (mostrarTipo != 0)
        {mostrarDetalles(mostrarTipo)}
}

function qOrdenListado()
{
    let temp = parseInt(prompt( "1 -> Listado ordenado por banco otorgante" + "\n" +
    "2 -> Listado ordenado por tasa de interés" + "\n" +  
    "3 -> Listado ordenado por tipo de crédito" + "\n" +  
    "Otro valor -> Salir" + "\n"))
    if (temp < 4 && temp > 0)
        {return temp}
    else
        {return 0}
}

function mostrarDetalles(unTipo){
    respuesta = "";
    respuesta = "Banco otorgante: " + creditos[unTipo-1].otorgante;
    respuesta = respuesta + "\n" + "Crédito: " +  creditos[unTipo-1].nombre;
    respuesta = respuesta + "\n" + "Tasa de interés: " +  creditos[unTipo-1].interes + "% anual";
    if(creditos[unTipo-1].esFrances)
        respuesta = respuesta + "\n" + "Es un crédito del tipo francés, de pagos fijos en monto y cantidad"
    else
        respuesta = respuesta + "\n" + "Es un crédito de tasa fija y pagos variables";
    alert(respuesta);

}

function qMostrarTipo()
{
    let mensaje = "Seleccione:";
    let aux=1;
    for (const item of creditos) {
        mensaje = mensaje  + "\n" + aux + " - " + item.otorgante + " - " + item.nombre + " - " + item.interes;
        aux = aux + 1
    }
    let temp = parseInt(prompt(mensaje));
    if (temp > 0 && temp <= creditos.length)
        {return temp}
    else
        {return 0}
}
 */