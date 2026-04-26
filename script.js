function filtrar() {
    let input = document.getElementById('buscador').value.toUpperCase();
    let tarjetas = document.getElementsByClassName('tarjeta');
    for (let i = 0; i < tarjetas.length; i++) {
        let nombre = tarjetas[i].getAttribute('data-nombre');
        tarjetas[i].style.display = nombre.includes(input) ? "" : "none";
    }
}