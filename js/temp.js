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



/* let botonLogIn = document.getElementById("LogInButton");
botonLogIn.addEventListener("click",clickLogIn);
function clickLogIn (){
    let     temp=document.getElementById("LogInModal");
    temp.modal('show');
}

let botonRegistrarse = document.getElementById("RegistrarseButton");
botonLogIn.addEventListener("click",clickLogIn);
function clickLogIn (){
    let     temp=document.getElementById("RegistrarseModal");
    temp.modal('show');
} */

/* $("#RegistrarseButton").click(function(){
    $("#RegistrarseModal").modal('show');
    }); */

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("include-html");
          if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("include-html");
                includeHTML();
              }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
          }
        }
      }






    

// FUNCIONAMIENTO DE LA PÁGINA





/* class credito {
    constructor(otorgante, tipo, descripcion, interes, esFrances) {
        this.otorgante = otorgante;
        this.tipo = tipo;
        this.descripcion =  "Tasa de interés del " + 
                            otorgantes[otorgante].nombre + 
                            "para " +
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
        if (otorgantes[temp].showOnCarousel == false) {
            otorgantes[temp].showOnCarousel = true;
            a = a -1;
        }
    }
}
 */

// CAROUSEL BOTONES

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

$("#navbarItem1").click(function(){
    irAHome();
    })

$("#navbarItem2").click(function(){
    irAServicios();
    })


/* let botonLogIn = document.getElementById("LogInButton");
botonLogIn.addEventListener("click",clickLogIn);
function clickLogIn (){
    let     temp=document.getElementById("LogInModal");
    temp.modal('show');
}

let botonRegistrarse = document.getElementById("RegistrarseButton");
botonLogIn.addEventListener("click",clickLogIn);
function clickLogIn (){
    let     temp=document.getElementById("RegistrarseModal");
    temp.modal('show');
} */

/* $("#RegistrarseButton").click(function(){
    $("#RegistrarseModal").modal('show');
    }); */
    $( "#RegistrarseButton" ).click(function() {
        $("#RegistrarseModal").modal('show');
    });
    $("#LogInButton").click(function(){
        $("#LogInModal").modal('show');
    });
    $("#RegistrarseButton").text ("Registrate...")
    $("#RegistrarseButton").delay( 2000 )
                            .slideUp(2000, function() { $("#RegistrarseButton").text ("Registrate así nos acordamos de vos y te podemos encontrar ahorros" ) }) 
                            .slideDown(2000);


/* localStorage.setItem('bienvenida', '¡Hola Code!');
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));

    const enJSON    = JSON.stringify(producto1);
const producto1 = JSON.parse(enJSON);

 */

/* 
		// CLICK EN EL ICONO DE HOME DEL NAVBAR
	$("#navbarItem1").click(function(){
			irAHome();
	});
	// CLICK EN EL ICONO DE SERVICIOS DEL NAVBAR
	$("#navbarItem2").click(function(){
		if (JSON.parse(localStorage.checkLogueado)===true) {
			irAServiciosUsuario();
		} else {
			irAServicios();	
		}
	});

	// CLICK EN EL ICONO DE NOSOTROS DEL NAVBAR
	$("#navbarItem3").click(function(){
			irANosotros();
	});

	// CLICK EN EL ICONO DE CONTANOS ALGO DEL NAVBAR
	$("#navbarItem4").click(function(){
			irAContanos();
	});
 */










    const DATOSURL = "data.json"
let datosInversiones = [];

$(document).ready(function () {
    //OCULTAMOS EL BOTÓN QUE DISPARA EL MODAL
    $("#btnModal").hide();
    //CARGAMOS EL JSON LOCAL DE FORMA ASINCRONA
    $.getJSON(DATOSURL, function(datos,estado){
        $('#selectProvincias').empty();
        //ASIGNAMOS LOS DATOS DEL JSON A LA VARIABLE
        datosInversiones = datos;
        //USAMOS MAP PARA OBTENER TODOS LOS POSIBLES VALORES POR CADA PROPIEDAD. LUEGO CON EL OBJETO SET CREAMOS UNA LISTA DE VALORES UNICOS. LA CUAL TRASFORMAMOS EN ARRAY PARA CARGAR CADA SELECT
        const tiposInversion = Array.from(new Set(datosInversiones.map(dato => dato.inversion)));
        const tiposEdificio  = Array.from(new Set(datosInversiones.map(dato => dato.edificio)));
        const tiposAmbientes = Array.from(new Set(datosInversiones.map(dato => dato.ambientes)));
        const tiposAmenities = Array.from(new Set(datosInversiones.map(dato => dato.amenities)));
        //CARGAMOS CADA SELECT CON LA LISTA DE POSIBLES VALORES DE LOS OBJETOS
        cargarSelect(tiposInversion,"#selectInversion");
        cargarSelect(tiposEdificio, "#selectEdificio");
        cargarSelect(tiposAmbientes,"#selectAmbientes");
        cargarSelect(tiposAmenities, "#selectAmenities");
        //OCULTAMOS EL SPINNER DEL MODAL
        $("#spnModal").hide();
        //MOSTRAMOS EL BOTON QUE DISPARA EL MODAL
        $("#btnModal").show();
        const seleccionado = buscarInversion($("#selectInversion").val(),$("#selectEdificio").val(),$("#selectAmbientes").val(),$("#selectAmenities").val());
        console.log(seleccionado);
        salidaBusqueda(seleccionado);
        
    });

    otorgantes.push(new unOtorgante(1,'AFIP','https://dummyimage.com/300x300/9675cd/522da8.png&text=AFIP', 'AFIP Seti DJ', '800-123-9432', false, false))
    otorgantes.push(new unOtorgante(2,'AMERICA','https://dummyimage.com/300x300/9675cd/522da8.png&text=AMERICA', 'BANK OF AMERICA NATIONAL ASSOCIATION', '800-123-8824', false, false))
    otorgantes.push(new unOtorgante(3,'BACS','https://dummyimage.com/300x300/9675cd/522da8.png&text=BACS', 'BACS BANCO DE CREDITO Y SECURITIZACION S.A.', '800-123-3657',false, false))
    otorgantes.push(new unOtorgante(4,'BBVA','https://dummyimage.com/300x300/9675cd/522da8.png&text=BBVA', 'BANCO BBVA ARGENTINA S.A.', '800-123-7476',true, false))
    otorgantes.push(new unOtorgante(5,'BICA','https://dummyimage.com/300x300/9675cd/522da8.png&text=BICA', 'BANCO BICA S.A.', '800-123-6784', true,false))
    otorgantes.push(new unOtorgante(6,'BRADESCO','https://dummyimage.com/300x300/9675cd/522da8.png&text=BRADESCO', 'BANCO BRADESCO ARGENTINA SA', '800-123-7785', true,false))
    otorgantes.push(new unOtorgante(7,'BRUBANK','https://dummyimage.com/300x300/9675cd/522da8.png&text=BRUBANK', 'BRUBANK S.A.U.', '800-123-6752', true,false))
    otorgantes.push(new unOtorgante(8,'PROVINCIA','https://dummyimage.com/300x300/9675cd/522da8.png&text=BUENOS AIRES', 'BANCO DE LA PROVINCIA DE BUENOS AIRES', '800-123-9081',true, false))
    otorgantes.push(new unOtorgante(9,'CENTRAL','https://dummyimage.com/300x300/9675cd/522da8.png&text=CENTRAL', 'CENTRAL DE LA REPUBLICA ARGENTINA', '800-123-7331', false, false))
    otorgantes.push(new unOtorgante(10,'CETELEM','https://dummyimage.com/300x300/9675cd/522da8.png&text=CETELEM', 'BANCO CETELEM ARGENTINA S.A.', '800-123-3802', false, false))
    otorgantes.push(new unOtorgante(11,'CHACO','https://dummyimage.com/300x300/9675cd/522da8.png&text=CHACO', 'NUEVO BANCO DEL CHACO S.A.', '800-123-7524',true, false))
    otorgantes.push(new unOtorgante(12,'CHINA','https://dummyimage.com/300x300/9675cd/522da8.png&text=CHINA', 'BANK OF CHINA LIMITED, SUCURSAL BUENOS AIRES', '800-123-2227', false, false))
    otorgantes.push(new unOtorgante(13,'CHUBUT','https://dummyimage.com/300x300/9675cd/522da8.png&text=CHUBUT', 'BANCO DEL CHUBUT S.A.', '800-123-7186', true, false))
    otorgantes.push(new unOtorgante(14,'CIENCIAS ECONOMICAS','https://dummyimage.com/300x300/9675cd/522da8.png&text=CIENCIAS ECONOMICAS', 'CONSEJO PROFESIONAL DE CIENCIAS ECONOMICAS DE CABA', '800-123-8062', false,false))
    otorgantes.push(new unOtorgante(15,'CITIBANK','https://dummyimage.com/300x300/9675cd/522da8.png&text=CITIBANK', 'CITIBANK N.A.', '800-123-4275', true,false))
    otorgantes.push(new unOtorgante(16,'CIUDAD','https://dummyimage.com/300x300/9675cd/522da8.png&text=CIUDAD', 'BANCO DE LA CIUDAD DE BUENOS AIRES', '800-123-4070',true, false))
    otorgantes.push(new unOtorgante(17,'CMF','https://dummyimage.com/300x300/9675cd/522da8.png&text=CMF', 'BANCO CMF S.A.', '800-123-4791', false,false))
    otorgantes.push(new unOtorgante(18,'COINAG','https://dummyimage.com/300x300/9675cd/522da8.png&text=COINAG', 'BANCO COINAG S.A.', '800-123-6748', false,false))
    otorgantes.push(new unOtorgante(19,'COLUMBIA','https://dummyimage.com/300x300/9675cd/522da8.png&text=COLUMBIA', 'BANCO COLUMBIA S.A.', '800-123-5801', true,false))
    otorgantes.push(new unOtorgante(20,'COMAFI','https://dummyimage.com/300x300/9675cd/522da8.png&text=COMAFI', 'BANCO COMAFI S.A.', '800-123-9043', true,false))
    otorgantes.push(new unOtorgante(21,'COMERCIO','https://dummyimage.com/300x300/9675cd/522da8.png&text=COMERCIO', 'BANCO DE COMERCIO S.A.', '800-123-6839', false,false))
    otorgantes.push(new unOtorgante(22,'CORDIAL','https://dummyimage.com/300x300/9675cd/522da8.png&text=CORDIAL', 'CORDIAL COMPAÑIA FINANCIERA S.A.', '800-123-7757',false, false))
    otorgantes.push(new unOtorgante(23,'CORDOBA','https://dummyimage.com/300x300/9675cd/522da8.png&text=CORDOBA', 'BANCO DE LA PROVINCIA DE CORDOBA S.A.', '800-123-8895', true,false))
    otorgantes.push(new unOtorgante(24,'CORRIENTES','https://dummyimage.com/300x300/9675cd/522da8.png&text=CORRIENTES', 'BANCO DE CORRIENTES S.A.', '800-123-9298',true, false))
    otorgantes.push(new unOtorgante(25,'CREDICOOP','https://dummyimage.com/300x300/9675cd/522da8.png&text=CREDICOOP', 'BANCO CREDICOOP COOPERATIVO LIMITADO', '800-123-4021',true, true))
    otorgantes.push(new unOtorgante(26,'CREDITO REGIONAL','https://dummyimage.com/300x300/9675cd/522da8.png&text=CREDITO REGIONAL', 'CREDITO REGIONAL COMPAÑIA FINANCIERA S.A.', '800-123-6679', false,false))
    otorgantes.push(new unOtorgante(27,'DEL SOL','https://dummyimage.com/300x300/9675cd/522da8.png&text=DEL SOL', 'BANCO DEL SOL S.A.', '800-123-2610', false,false))
    otorgantes.push(new unOtorgante(28,'DINO','https://dummyimage.com/300x300/9675cd/522da8.png&text=DINO', 'BANCO DINO S.A.', '800-123-8867',true, false))
    otorgantes.push(new unOtorgante(29,'ENTRE RIOS','https://dummyimage.com/300x300/9675cd/522da8.png&text=ENTRE RIOS', 'NUEVO BANCO DE ENTRE RIOS S.A.', '800-123-7128',false,false))
    otorgantes.push(new unOtorgante(30,'FCA','https://dummyimage.com/300x300/9675cd/522da8.png&text=FCA', 'FCA Compañía Financiera S.A.', '800-123-8547',false, false))
    otorgantes.push(new unOtorgante(31,'FINANCIERA','https://dummyimage.com/300x300/9675cd/522da8.png&text=FINANCIERA', 'COMPAÑIA FINANCIERA ARGENTINA S.A.', '800-123-7806',false, false))
    otorgantes.push(new unOtorgante(32,'FORD','https://dummyimage.com/300x300/9675cd/522da8.png&text=FORD', 'FORD CREDIT CIA. FINAN. S.A.', '800-123-8194',false, false))
    otorgantes.push(new unOtorgante(33,'FORMOSA','https://dummyimage.com/300x300/9675cd/522da8.png&text=FORMOSA', 'BANCO DE FORMOSA S.A.', '800-123-1970',true, false))
    otorgantes.push(new unOtorgante(34,'GALICIA','https://dummyimage.com/300x300/9675cd/522da8.png&text=GALICIA', 'BANCO DE GALICIA Y BUENOS AIRES S.A.U.', '800-123-5954',true, false))
    otorgantes.push(new unOtorgante(35,'GPAT','https://dummyimage.com/300x300/9675cd/522da8.png&text=GPAT', 'GPAT COMPAÑIA FINANCIERA S.A.', '800-123-5907',false, false))
    otorgantes.push(new unOtorgante(36,'HIPOTECARIO','https://dummyimage.com/300x300/9675cd/522da8.png&text=HIPOTECARIO', 'BANCO HIPOTECARIO SA', '800-123-6348',false, false))
    otorgantes.push(new unOtorgante(37,'HSBC','https://dummyimage.com/300x300/9675cd/522da8.png&text=HSBC', 'HSBC BANK ARGENTINA S.A.', '800-123-1275',true, false))
    otorgantes.push(new unOtorgante(38,'ICBC','https://dummyimage.com/300x300/9675cd/522da8.png&text=ICBC', 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A.', '800-123-2070',true, false))
    otorgantes.push(new unOtorgante(39,'INDUSTRIAL','https://dummyimage.com/300x300/9675cd/522da8.png&text=INDUSTRIAL', 'BANCO INDUSTRIAL S.A.', '800-123-7586',true, true))
    otorgantes.push(new unOtorgante(40,'INTERFINANZAS','https://dummyimage.com/300x300/9675cd/522da8.png&text=INTERFINANZAS', 'BANCO INTERFINANZAS S.A.', '800-123-5554',false, false))
    otorgantes.push(new unOtorgante(41,'INVERSIÓN Y COMERCIO EXTERIOR','https://dummyimage.com/300x300/9675cd/522da8.png&text=INVERSIÓN Y COMERCIO EXTERIOR', 'BANCO DE INVERSION Y COMERCIO EXTERIOR S.A.', '800-123-1778',false, false))
    otorgantes.push(new unOtorgante(42,'ITAU','https://dummyimage.com/300x300/9675cd/522da8.png&text=ITAU', 'BANCO ITAU ARGENTINA S.A.', '800-123-9024',true, false))
    otorgantes.push(new unOtorgante(43,'JOHN DEERE','https://dummyimage.com/300x300/9675cd/522da8.png&text=JOHN DEERE', 'JOHN DEERE CREDIT CIA. FINAN. S.A.', '800-123-7325',false, false))
    otorgantes.push(new unOtorgante(44,'JULIO','https://dummyimage.com/300x300/9675cd/522da8.png&text=JULIO', 'BANCO JULIO S.A.', '800-123-2776',false, false))
    otorgantes.push(new unOtorgante(45,'LA PAMPA','https://dummyimage.com/300x300/9675cd/522da8.png&text=LA PAMPA', 'BANCO DE LA PAMPA SOCIEDAD DE ECONOMIA MIXTA', '800-123-7125',true, false))
    otorgantes.push(new unOtorgante(46,'MACRO','https://dummyimage.com/300x300/9675cd/522da8.png&text=MACRO', 'BANCO MACRO S.A.', '800-123-7015',false, false))
    otorgantes.push(new unOtorgante(47,'MARIVA','https://dummyimage.com/300x300/9675cd/522da8.png&text=MARIVA', 'BANCO MARIVA S.A.', '800-123-9643',false, false))
    otorgantes.push(new unOtorgante(48,'MAS VENTAS','https://dummyimage.com/300x300/9675cd/522da8.png&text=MAS VENTAS', 'MAS VENTAS S.A.', '800-123-1181',false, false))
    otorgantes.push(new unOtorgante(49,'MERCEDES-BENZ','https://dummyimage.com/300x300/9675cd/522da8.png&text=MERCEDES-BENZ', 'MERCEDES-BENZ COMPAÑIA FINANCIERA ARGENTINA S.A.', '800-123-3034',false, false))
    otorgantes.push(new unOtorgante(50,'MERIDIAN','https://dummyimage.com/300x300/9675cd/522da8.png&text=MERIDIAN', 'BANCO MERIDIAN S.A.', '800-123-9940',false, false))
    otorgantes.push(new unOtorgante(51,'MONTEMAR','https://dummyimage.com/300x300/9675cd/522da8.png&text=MONTEMAR', 'MONTEMAR CIA. FINAN. S.A.', '800-123-6923',false, false))
    otorgantes.push(new unOtorgante(52,'MORGAN','https://dummyimage.com/300x300/9675cd/522da8.png&text=MORGAN', 'JP MORGAN CHASE BANK NA (SUCURSAL BUENOS AIRES)', '800-123-4294',false, false))
    otorgantes.push(new unOtorgante(53,'NACION','https://dummyimage.com/300x300/9675cd/522da8.png&text=NACIÓN', 'BANCO DE LA NACION ARGENTINA', '800-123-7044',true, true))
    otorgantes.push(new unOtorgante(54,'NEUQUEN','https://dummyimage.com/300x300/9675cd/522da8.png&text=NEUQUEN', 'BANCO PROVINCIA DEL NEUQUEN S.A.', '800-123-2676',true, false))
    otorgantes.push(new unOtorgante(55,'PARIBAS','https://dummyimage.com/300x300/9675cd/522da8.png&text=PARIBAS', 'BNP PARIBAS', '800-123-1423', true,false))
    otorgantes.push(new unOtorgante(56,'PATAGONIA','https://dummyimage.com/300x300/9675cd/522da8.png&text=PATAGONIA', 'BANCO PATAGONIA S.A.', '800-123-5273', true,false))
    otorgantes.push(new unOtorgante(57,'PIANO','https://dummyimage.com/300x300/9675cd/522da8.png&text=PIANO', 'BANCO PIANO S.A.', '800-123-8384',false, false))
    otorgantes.push(new unOtorgante(58,'PROVINCANJE','https://dummyimage.com/300x300/9675cd/522da8.png&text=PROVINCANJE', 'PROVINCANJE SOCIEDAD ANONIMA', '800-123-6917',false, false))
    otorgantes.push(new unOtorgante(59,'PSA','https://dummyimage.com/300x300/9675cd/522da8.png&text=PSA', 'PSA FINANCE ARGENTINA CIA. FINAN. S.A.', '800-123-2082',false, false))
    otorgantes.push(new unOtorgante(60,'RCI','https://dummyimage.com/300x300/9675cd/522da8.png&text=RCI', 'RCI BANQUE S.A.', '800-123-3106', false,false))
    otorgantes.push(new unOtorgante(61,'RIOJA','https://dummyimage.com/300x300/9675cd/522da8.png&text=RIOJA', 'BANCO RIOJA SOCIEDAD ANÓNIMA UNIPERSONAL', '800-123-7852',false, false))
    otorgantes.push(new unOtorgante(62,'ROELA','https://dummyimage.com/300x300/9675cd/522da8.png&text=ROELA', 'BANCO ROELA S.A.', '800-123-8392',false, false))
    otorgantes.push(new unOtorgante(63,'ROMBO','https://dummyimage.com/300x300/9675cd/522da8.png&text=ROMBO', 'ROMBO CIA. FINAN. S.A.', '800-123-2440',false, false))
    otorgantes.push(new unOtorgante(64,'ROSARIO','https://dummyimage.com/300x300/9675cd/522da8.png&text=ROSARIO', 'BANCO MUNICIPAL DE ROSARIO', '800-123-8293',true, false))
    otorgantes.push(new unOtorgante(65,'SAENZ','https://dummyimage.com/300x300/9675cd/522da8.png&text=SAENZ', 'BANCO SAENZ S.A.', '800-123-9459',false, false))
    otorgantes.push(new unOtorgante(66,'SAN JUAN','https://dummyimage.com/300x300/9675cd/522da8.png&text=SAN JUAN', 'BANCO DE SAN JUAN S.A.', '800-123-6276',true, false))
    otorgantes.push(new unOtorgante(67,'SANTA CRUZ','https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTA CRUZ', 'BANCO DE SANTA CRUZ S.A.', '800-123-6400',true, false))
    otorgantes.push(new unOtorgante(68,'SANTA FE','https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTA FE', 'NUEVO BANCO DE SANTA FE S.A.', '800-123-5187',true, true))
    otorgantes.push(new unOtorgante(69,'SANTANDER','https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTANDER', 'BANCO SANTANDER RIO S.A.', '800-123-3200',true, false))
    otorgantes.push(new unOtorgante(70,'SANTIAGO DEL ESTERO','https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTIAGO DEL ESTERO', 'BANCO DE SANTIAGO DEL ESTERO S.A.', '800-123-4323',true, false))
    otorgantes.push(new unOtorgante(71,'SERVICIOS FINANCIEROS','https://dummyimage.com/300x300/9675cd/522da8.png&text=SERVICIOS FINANCIEROS', 'BANCO DE SERVICIOS FINANCIEROS S.A.', '800-123-1034',false, false))
    otorgantes.push(new unOtorgante(72,'SERVICIOS Y TRANSACCIONES','https://dummyimage.com/300x300/9675cd/522da8.png&text=SERVICIOS Y TRANSACCIONES', 'BANCO DE SERVICIOS Y TRANSACCIONES S.A.', '800-123-8640', false,false))
    otorgantes.push(new unOtorgante(73,'SUCREDITO','https://dummyimage.com/300x300/9675cd/522da8.png&text=SUCREDITO', 'BANCO SUCREDITO S.A.', '800-123-4614',false, false))
    otorgantes.push(new unOtorgante(74,'SUPERVIELLE','https://dummyimage.com/300x300/9675cd/522da8.png&text=SUPERVIELLE', 'BANCO SUPERVIELLE S.A.', '800-123-8552',true, false))
    otorgantes.push(new unOtorgante(75,'TIERRA DEL FUEGO','https://dummyimage.com/300x300/9675cd/522da8.png&text=TIERRA DEL FUEGO', 'BANCO PROVINCIA DE TIERRA DEL FUEGO', '800-123-8160',true, false))
    otorgantes.push(new unOtorgante(76,'TOYOTA','https://dummyimage.com/300x300/9675cd/522da8.png&text=TOYOTA', 'TOYOTA COMPAÑIA FINANCIERA DE ARGENTINA S.A.', '800-123-3798',false, false))
    otorgantes.push(new unOtorgante(77,'TRANSATLANTICA','https://dummyimage.com/300x300/9675cd/522da8.png&text=TRANSATLANTICA', 'TRANSATLANTICA COMPAÑIA FINANCIERA S.A.', '800-123-6215', false,false))
    otorgantes.push(new unOtorgante(78,'URUGUAY','https://dummyimage.com/300x300/9675cd/522da8.png&text=URUGUAY', 'BANCO DE LA REP. ORIENTAL DEL URUGUAY', '800-123-2733',false, false))
    otorgantes.push(new unOtorgante(79,'VALORES','https://dummyimage.com/300x300/9675cd/522da8.png&text=VALORES', 'BANCO DE VALORES S.A.', '800-123-4061',false, false))
    otorgantes.push(new unOtorgante(80,'VOII','https://dummyimage.com/300x300/9675cd/522da8.png&text=VOII', 'BANCO VOII S.A.', '800-123-8021',false, false))
    otorgantes.push(new unOtorgante(81,'VOLKSWAGEN','https://dummyimage.com/300x300/9675cd/522da8.png&text=VOLKSWAGEN', 'VOLKSWAGEN FINANCIAL SERVICES COMPAÑIA FINANCIERA S.A.', '800-123-3887',false, false))
    otorgantes.push(new unOtorgante(82,'WILOBANK','https://dummyimage.com/300x300/9675cd/522da8.png&text=WILOBANK', 'WILOBANK S.A.', '800-123-2677',true, false))

    tiposCreditos.push(new unTipoCredito(0,"Descubierto en CC$","https://dummyimage.com/300x300/9675cd/522da8.png&text=Descubierto", "Tasa de interés aplicable al descubierto de una cuenta corriente en pesos"));
    tiposCreditos.push(new unTipoCredito(1,"Saldo de Tarjeta VISA","https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésMaster", "Tasa de interés aplicable al saldo impago del resumen de la tarjeta MasterCard"));
    tiposCreditos.push(new unTipoCredito(2,"Saldo de Tarjeta Mastercard","https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésVisa", "Tasa de interés aplicable al saldo impago del resumen de la tarjeta Visa"));
    tiposCreditos.push(new unTipoCredito(3,"Saldo de Tarjeta AMEX","https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito", "Tasa de interés aplicable al momento de solicitar un crédito en pesos"));
    tiposCreditos.push(new unTipoCredito(4,"Crédito a sola firma","https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito", "Tasa de interés aplicable al momento de solicitar un crédito en pesos"));
    tiposCreditos.push(new unTipoCredito(5,"Crédito para compras de inmuebles","https://dummyimage.com/300x300/9675cd/522da8.png&text=Inmuebles", "Interés variable dependiente de la inflación"));
    tiposCreditos.push(new unTipoCredito(6,"Financiación de compra de vehículos","https://dummyimage.com/300x300/9675cd/522da8.png&text=Descubierto", "Tasa de interés aplicable al descubierto de una cuenta corriente en pesos"));

    usuarios.push(new unUsuario(00000000, 'Diego', 'Maradona', 'eldiego@pelo.ta', 'fafafaYNoDeBootstrap', 'Villa Fiorito', 'Buenos Aires', 0, 0, 1000000, 100000000, 1, false, true));
    usuarios.push(new unUsuario(11111111, 'Homero', 'Simpson', 'homero@thesimpsons.com', 'marge', 'Pensilvania', 'Springfield', 1, 98000, 0, 0, 1, true, true));
    usuarios.push(new unUsuario(22222222, 'Uriel', 'Levcovich', 'glevcovich@outlook.com', 'codehouse', 'Santa Fe', 'Santa Fe', 1, 60000, 0, 20000, 1, true, true));
    usuarios.push(new unUsuario(33333333, 'Bruce', 'Waine', 'iam@batman.org', 'iloverobin', 'Massachusetts', 'Boston', 0, 0, 25000000, 0, 1, true, true));
    usuarios.push(new unUsuario(44444444, 'Peter', 'Parker', 'peterparker@marvel.com', 'tiamai', 'New York', 'New York', 0, 0, 20000, 0, 3, false, false));
    usuarios.push(new unUsuario(55555555, 'Isidoro', 'Cañones', 'isidorito@hotmail.com', 'isidorito', 'CABA', 'CABA', 0, 0, 0, 2000000, 1, false, true));
    usuarios.push(new unUsuario(66666666, 'Patoruzú', 'Patoruzú', 'patoruzu@argentina.net', 'lachacha', 'La Pampa', 'Santa Rosa', 0, 0, 35000000, 0, 1, true, false));
    usuarios.push(new unUsuario(77777777, 'Clark', 'Kent', 'ckent@theglobe.com', 'louise', 'New York', 'New York', 0, 80000, 0, 0, 1, true, false));
    usuarios.push(new unUsuario(88888888, 'El papá de', 'Mafalda', 'argentinopromedio@ningunlado.com', 'mafalda', 'CABA', 'CABA', 1, 70000, 0, 0, 1, true, true));
    usuarios.push(new unUsuario(99999999, 'Emilio', 'Ravenna', 'peretti@lossimuladores.com', 'MáximoCozzetti', 'CABA', 'CABA', 1, 0, 0, 200000, 1, true, true));

	if (localStorage.cuentas){ // SI EL LOCALSTORAGE TIENE DATOS, LOS TOMO.
		cuentas =  JSON.parse(localStorage.cuentas);
	} else { // SI NO, CARGO LOS DATOS POR HARD Y LOS SUBO AL LOCAL STORAGE
		if (cuentas.length == 0){
				for (let i = 1; i <= 100; i++) {
				cuentas.push(new unaCuenta(cuentas.lenght+1, 
																11111111*parseInt(usuarios.length*Math.random()), 
																parseInt(otorgantes.length*Math.random()), 
																parseInt(tiposCreditos.length*Math.random())))
				}
		}
		localStorage.setItem("cuentas",JSON.stringify(cuentas));
	}	


    <!--	<div class="modal-content">
    <div class="modal-header">
        <h4 class="modal-title font-weight-bold">Registrarse</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div> -->