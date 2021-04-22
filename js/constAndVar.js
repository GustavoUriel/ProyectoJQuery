const URLJsonProvincias = "https://apis.datos.gob.ar/georef/api/provincias";

const mainJumbotronTextoGrande = "Es tu plata";
const mainJumbotronTextoChico = "Y te decimos como cuidarla";
const txtMainJumbotronRegistrar = "Registrate así te encontramos ahorros"
const mainJumbotronDisclaimer = "Confidencialidad de la información. Condiciones de uso."

const JSONtiposCreditos = "./json/tiposCreditos.json"
const JSONotorgantes = "./json/otorgantes.json"
const JSONusuarios = "./json/usuarios.json"
const JSONcuentas = "./json/cuentas.json"
const constSpeed = 200;

var tiposCreditos = [] // ARRAY DE TIPOS DE CREDITO
var otorgantes = [] // ARRAY DE OTORGANTES
var usuarios = [] // ARRAY DE USUARIOS
var cuentas = [] // ARRAY DE CUENTAS DE USUARIOS, FORMADOS POR UNA RELACIÓN DE USUARIO CON OTORGANTE Y CON TIPO DE CRÉDITO
var usuarioLogueado // OBJETO QUE ES EL USUARIO LOGUEADO
var cuentasUsuarioLogueado // ARRAY DE CUENTAS DEL USUARIO LOGUEADO
var prueba
var documentoClickable //BOOLEANO PARA PREVENIR CLICKS ANTES QUE TERMINEN LAS ANIMACIONES
