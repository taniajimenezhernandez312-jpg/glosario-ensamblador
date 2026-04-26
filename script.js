document.getElementById('buscador').addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        // Busca tanto en el título (h2) como en el párrafo (p)
        const titulo = tarjeta.querySelector('h2').innerText.toLowerCase();
        const descripcion = tarjeta.querySelector('p').innerText.toLowerCase();
        
        if (titulo.includes(busqueda) || descripcion.includes(busqueda)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
