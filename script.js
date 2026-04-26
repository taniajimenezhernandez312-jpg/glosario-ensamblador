document.getElementById('buscador').addEventListener('input', function(e) {
    let filtro = e.target.value.toLowerCase();
    let tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        let texto = tarjeta.querySelector('h2').textContent.toLowerCase();
        if (texto.includes(filtro)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
