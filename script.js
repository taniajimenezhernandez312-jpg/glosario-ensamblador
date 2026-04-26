function abrirModal(boton) {
    const tarjeta = boton.parentElement;
    const titulo = tarjeta.querySelector('h2').innerText;
    const infoLarga = tarjeta.querySelector('.detalle-extendido').innerText;

    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescripcion').innerText = infoLarga;
    document.getElementById('miModal').style.display = "block";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

// Cerrar si se hace clic fuera de la cajita blanca
window.onclick = function(event) {
    if (event.target == document.getElementById('miModal')) {
        cerrarModal();
    }
}
