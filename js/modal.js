
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
