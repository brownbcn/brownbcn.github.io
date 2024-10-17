// JavaScript básico o interactividad futura
console.log("Página cargada correctamente");


window.onload = function() {
    document.getElementById("popup").classList.add("popup-show");

    // Cerrar el pop-up después de 5 segundos (5000 milisegundos)
    setTimeout(closePopup, 5000);
};

