
let ataqueJugador
let ataqueEnemigo
let vidasJugador= 3
let vidasEnemigo= 3

function iniciarJuego(){ //en esta funcion se llama para cargar todo el html: window.addEventListener("load", iniciarJuego)
    
let seccionSeleccionarAtaque=document.getElementById("escoger-ataque")// traeos la seccion a ocultar
seccionSeleccionarAtaque.style.display ="none"//style.display = "none" se esconde la seccion con id.

let seccionReiniciar=document.getElementById("reiniciar")
seccionReiniciar.style.display = "none"

let botonSelecMascota=document.getElementById('boton-selecmascotas')//traer documnto y elemento con id:::()
botonSelecMascota.addEventListener("click", seleccionarMascota)//el elemento lo traemos y le damos click 

let botonFuego=document.getElementById("boton-fuego")
botonFuego.addEventListener("click", ataqueFuego)
let botonAgua=document.getElementById("boton-agua")
botonAgua.addEventListener("click", ataqueAgua)
let botonTierra=document.getElementById("boton-tierra")
botonTierra.addEventListener("click", ataqueTierra)

let botonReiniciar=document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener("click", reiniciarJuego)


}

function seleccionarMascota(){
    let seccionSeleccionarAtaque=document.getElementById("escoger-ataque")
    seccionSeleccionarAtaque.style.display ="flex"//al momento de llegar al punto de lectura q se necesita se actiba con block

    let seccionSeleccionarMascota=document.getElementById("escoger-mascota")
    seccionSeleccionarMascota.style.display = "none"

    let inputHopopotom=document.getElementById("Hipopotom")//con let hacemos una variable dandole propiedad de llamado de una ves
    let inputTerrierom=document.getElementById("Terrierom")
    let inputCharizart=document.getElementById("Charizart")
    let spanMascotaJugador=document.getElementById("mascotaJugador")

    if (inputHopopotom.checked){
        spanMascotaJugador.innerHTML= "Hipopotom"
    } else if (inputTerrierom.checked){
        spanMascotaJugador.innerHTML= "Terrierom"
    } else if (inputCharizart.checked){
        spanMascotaJugador.innerHTML= "Charizart"
    } else {
        alert("Selecciona alguna mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    
    let mascotaAleatorio=aleatorio(1,3)
    let spanMascotaEnemiga=document.getElementById("mascotaEnemiga")

    if (mascotaAleatorio==1){
        //hipopotom
        spanMascotaEnemiga.innerHTML= "Hipopotom"
    } else if (mascotaAleatorio==2){
        //Terrierom
        spanMascotaEnemiga.innerHTML= "Terrierom"
    }else {
        //Charizart
        spanMascotaEnemiga.innerHTML= "Charizart"
    }

}


function ataqueFuego(){
    ataqueJugador= "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador= "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador= "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if (ataqueAleatorio==1){
        ataqueEnemigo= "FUEGO"
    } else if(ataqueAleatorio==2){
        ataqueEnemigo= "AGUA"
    } else {
        ataqueEnemigo= "TIERRA"
    }

    combate()
    
}


function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
     //codigo para combate
    
     if (ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

        
        
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("GANASTE")

    } else if (vidasJugador == 0){
        crearMensajeFinal("PERDISTE")    
    }

}

function crearMensaje(resultado){//crear mensajes
    let seccionMensajes=document.getElementById("resultado")
    let ataquesDelJugador=document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo=document.getElementById("ataques-del-enemigo")

    
    let nuevoAtaqueJugador=document.createElement("p")
    let nuevoAtaqueEnemigo=document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
        
    
    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){//crear mensajes
    let seccionMensajes=document.getElementById("resultado")
    
    seccionMensajes.innerHTML="Tu mascota tiene "+vidasJugador+ ", La mascota del enemigo tiene "+vidasEnemigo+", "+resultadoFinal
    

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.disabled = true
   
    let seccionReiniciar=document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block"
}
function reiniciarJuego(){
    location.reload()//funcion de reiniciar cualquier locacion
}

function aleatorio(min,max) {//llamar a la funcion aletoriedad cuando se requiera
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)// cargar en todo el codigo

