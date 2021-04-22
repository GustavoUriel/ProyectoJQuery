//  SIMULADOR CLASE 10 - AGENDA DE TAREAS
//  SECCION DE DECLARACION DE CLASE
class Tarea{
  constructor(datos){
      this.id           = datos.id;
      this.titulo       = datos.titulo;
      this.descripcion  = datos.descripcion;
      this.tipo         = datos.tipo;
      this.fecha        = new Date();
  }
}
//FUNCION PARA GENERAR OPCIONES DEL SELECT DE TIPO DE TAREA
function generarOpciones(){
  let padre = document.getElementById("tipoTarea");
  let inner = "";
  for (const elemento of TIPOS) {
    //inner += "<option value='"+elemento+"'>"+elemento+"</option>";
    inner += `<option value="${elemento}">${elemento}</option>`;
  }
  padre.innerHTML = inner;
}

function generarSalida(listadoTareas){
  let body = document.getElementById("tablaTareas").children[1];
  let inner = "";
  for (const tarea of listadoTareas) {
    inner += `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${tarea.tipo}</td><td>${tarea.descripcion}</td><td>${tarea.fecha.getDate()}/${tarea.fecha.getMonth() + 1}/${tarea.fecha.getFullYear()}</td></tr>`;
  }
  body.innerHTML = inner;
}

function guardarTarea(){
  let nuevoRegistro = {
    id           : TAREAS.length + 1,
    titulo       : document.getElementById("tituloTarea").value,
    descripcion  : document.getElementById("descripcionTarea").value,
    tipo         : document.getElementById("tipoTarea").value
  }
  TAREAS.push(new Tarea(nuevoRegistro));
  //generarSalida(TAREAS);
  filtrarEvento();
}

function filtrarEvento(){
  //OBTENEMOS TODOS LOS INPUT DEL SIMULADOR
  let inputs = document.getElementsByTagName("input");
  //VAMOS A CREAR UNA LISTA DE INPUT DE TIPO CHECK QUE ESTAN PRESIONADOS
  let checkboxsChecked = [];
  //ITERAMOS TODOS LOS INPUT PARA FILTRAR (LAMENTABLEMENTE NO PODEMOS USAR FILTER UN HTMLCollection)
  for (const elementoHTML of inputs) {
    //SI ESTA CHEQUEADO LO AGREMOS A LA LISTA DE CHEQUEDADOS
    if(elementoHTML.checked){
      checkboxsChecked.push(elementoHTML.id);
    }
  }
  //AHORA QUE TE
  listaFiltrada =  TAREAS.filter(x =>checkboxsChecked.includes(x.tipo));
  generarSalida(listaFiltrada);
}


//FUNCION PARA GENERAR OPCIONES DEL SELECT DE TIPO DE TAREA
function generarFiltro(){
  let padre = document.getElementById("generarFiltro");
  let inner = "";
  for (const elemento of TIPOS) {
    //inner += "<option value='"+elemento+"'>"+elemento+"</option>";
    inner += `<div class="float-left">
              <input type="checkbox" id="${elemento}" checked><label class="label-inline" for="${elemento}">${elemento}</label>
              </div>`;
  }
  padre.innerHTML = inner;


}
window.onload = () => {
  // SECCION DE ASOCIACIÓN DE EVENTOS EN ONLOAD ASI NOS ASEGURAMOS DE ASOCIAL UNA VEZ QUE EL DOM ESTA LISTO
  document.getElementById("btnEnviar").onclick =  guardarTarea;
  for (const tipo of TIPOS) {
    document.getElementById(tipo).onclick = filtrarEvento;
  }
}

// PROCESAMIENTO PRINCIPAL
generarOpciones();
generarFiltro();