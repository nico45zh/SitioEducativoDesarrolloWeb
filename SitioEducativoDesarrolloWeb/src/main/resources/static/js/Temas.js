
const temas = {

    "Fundamentos de Internet y la Web": [
        "Qué es Internet",
        "Qué es la World Wide Web",
        "Diferencia entre Internet y Web",
        "Modelo OSI",
        "Capas del modelo OSI",
        "Dirección IP",
        "DNS (Domain Name System)",
        "Servidores y clientes",
        "Navegadores web",
        "Funcionamiento de una petición web",
        "Protocolo HTTP",
        "Protocolo HTTPS",
        "Diferencia entre HTTP y HTTPS",
        "SSL y TLS",
        "Métodos HTTP (GET, POST, PUT, DELETE)",
        "Códigos de estado HTTP"
    ],

    "HTML": [
        "Qué es HTML",
        "Estructura básica de un documento HTML",
        "Etiqueta html",
        "Etiqueta head",
        "Etiqueta body",
        "Etiqueta title",
        "Meta etiquetas",
        "Encabezados (h1 - h6)",
        "Párrafos (p)",
        "Enlaces (a)",
        "Imágenes (img)",
        "Listas ordenadas",
        "Listas no ordenadas",
        "Tablas",
        "Formularios",
        "Inputs y tipos de input",
        "Etiqueta header",
        "Etiqueta nav",
        "Etiqueta section",
        "Etiqueta article",
        "Etiqueta footer"
    ],

    "CSS": [
        "Qué es CSS",
        "CSS en línea",
        "CSS interno",
        "CSS externo",
        "Selector por etiqueta",
        "Selector por clase",
        "Selector por id",
        "Selectores descendentes",
        "Pseudo-clases",
        "Pseudo-elementos",
        "Color",
        "Background",
        "Font-family",
        "Font-size",
        "Margin",
        "Padding",
        "Border",
        "Width",
        "Height",
        "Box Model",
        "Display",
        "Position",
        "Flexbox",
        "Buenas prácticas de estilos"
    ],

    "Back-end y Spring Boot": [
        "Cliente vs Servidor",
        "Método GET/POST",
        "HTTP request",
        "HTTP response",
        "Spring Boot",
        "Inyección de dependencias (@Autowired)",
        "Creación de controladores (@Controller, @RestController)",
        "Uso de Thymeleaf",
        "Cookies",
        "Sesiones"
    ],

    "JavaScript": [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseenter",
        "mouseleave",
        "mouseover",
        "mouseout",
        "contextmenu",
        "keydown",
        "keyup",
        "blur",
        "focus",
        "change",
        "select",
        "load",
        "DOMContentLoaded",
        "resize",
        "scroll",
        "beforeunload",
        "unload"
    ]
};
const archivos = {
    "Fundamentos de Internet y la Web": "internet",
    "HTML": "html",
    "CSS": "css",
    "Back-end y Spring Boot": "backend",
    "JavaScript": "javascript"
};

function cargarTemas() {

    const contenedor = document.getElementById("sidebarTemas");
    let html = "";

    let j = 0;
    for (let tema in temas) {
        let id = "tema" + j;

       html += `
               <div class="accordion-item">

                   <!-- BOTÓN DEL ACORDEÓN -->
                   <h2 class="accordion-header">
                       <button class="accordion-button collapsed" type="button"
                               data-bs-toggle="collapse"
                               data-bs-target="#${id}"
                               aria-expanded="false"
                               aria-controls="${id}">
                           ${tema.toUpperCase()}
                       </button>
                   </h2>

                   <!-- CONTENIDO COLLAPSE -->
                   <div id="${id}"
                        class="accordion-collapse collapse"
                        data-bs-parent="#sidebarTemas">

                       <div class="accordion-body">
               `;

               temas[tema].forEach(subtema => {
                   html += `<a href="#" class="d-block subtema" data-tema="${tema}" data-subtema="${subtema}">${subtema}</a>`;
               });

               html += `
                       </div>
                   </div>

               </div>
               `;
        j++;
    }

    contenedor.innerHTML = html;
}

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("subtema")) {
        let tema = e.target.dataset.tema;
        let subtema = e.target.dataset.subtema;
        let contenedor = document.getElementById("contenido");
        let archivo = archivos[tema];

        fetch(`/data/${archivo}.json`)
            .then(res => res.json())
            .then(data => {

                let info = data[subtema];
                if (!info) {
                    contenedor.innerHTML = `
                    <h2>${subtema}</h2>
                    <p>No hay contenido disponible.</p>
                    `;
                    return;
                }


                let listaComponentes = "<ul>";

                info.componentes.forEach(c => {
                    listaComponentes += `<li>${c}</li>`;
                });

                listaComponentes += "</ul>";

                contenedor.innerHTML = `
                    <h2>${info.titulo}</h2>

                    <h2>Introduccion</h2>
                    <p>${info.introduccion}</p>

                    <h2>Conceptos</h2>
                    <p>${info.concepto_tecnico}</p>

                    <h2>Funcionamientos</h2>
                    <p>${info.funcionamiento}</p>

                    <h2>Componentes</h2>
                    ${listaComponentes}

                    <h2>Ejemplos</h2>
                    <p>${info.ejemplo}</p>

                    <h2>Importancia</h2>
                    <p>${info.importancia}</p>

                    <h2>Ingeniería</h2>
                    <p>${info.relacion_con_ingenieria}</p>
                `;
            });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    cargarTemas();
});