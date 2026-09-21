function cambiarBombilla() {

    let imagen = document.getElementById("bombilla");
    let boton = document.getElementById("boton");

    if (boton.innerText === "Encender") {

        imagen.src = "Bombilla2.gif.gif";
        boton.innerText = "Apagar";

    } else {

        imagen.src = "Bombilla.gif.gif";
        boton.innerText = "Encender";

    }
}