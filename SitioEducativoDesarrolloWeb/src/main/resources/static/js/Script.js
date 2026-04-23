function cargarTema(tema) {

    const contenido = document.getElementById("contenido");

    if (tema === "html") {
        contenido.innerHTML = `
            <h2>HTML</h2>
            <p>HTML es el lenguaje de estructura...</p>
        `;
    }

    if (tema === "css") {
        contenido.innerHTML = `
            <h2>CSS</h2>
            <p>CSS se usa para estilos...</p>
        `;
    }
}