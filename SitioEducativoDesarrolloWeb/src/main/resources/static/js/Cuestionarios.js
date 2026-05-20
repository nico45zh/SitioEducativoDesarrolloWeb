const quizzes = {

    "HTML": "htmlQuiz",

    "CSS": "cssQuiz",

    "JavaScript": "javascriptQuiz",

    "Fundamentos Web": "internetQuiz",

    "Spring Boot": "backendQuiz"
};

// ICONOS POR TEMA
const iconos = {

    "HTML": "bi-filetype-html text-danger",

    "CSS": "bi-filetype-css text-primary",

    "JavaScript": "bi-filetype-js text-warning",

    "Fundamentos Web": "bi-globe text-success",

    "Spring Boot": "bi-server text-dark"
};

// CREAR TARJETAS DE CUESTIONARIOS
const contenedor = document.getElementById("contenedorCuestionarios");

for (let tema in quizzes) {

    contenedor.innerHTML += `

        <div class="col-md-6 col-lg-4">

            <div class="card quiz-card opcion-card h-100 shadow-sm rounded-4">

                <div class="card-body text-center p-4">

                    <i class="bi ${iconos[tema]} fs-1"></i>

                    <h3 class="mt-3 fw-bold">
                        ${tema}
                    </h3>

                    <p class="text-secondary">
                        Cuestionario básico de ${tema}
                    </p>

                    <button class="btn btn-cereza rounded-pill px-4"
                            onclick="iniciarQuiz('${tema}')">

                        Iniciar

                    </button>

                </div>

            </div>

        </div>
    `;
}

// INICIAR QUIZ
function iniciarQuiz(tema) {

    const archivo = quizzes[tema];

    fetch(`/data/${archivo}.json`)

        .then(response => response.json())

        .then(data => {

            mostrarQuiz(data);

        })

        .catch(error => {

            console.error("Error cargando quiz:", error);

            document.getElementById("areaQuiz").innerHTML = `

                <div class="alert alert-danger">

                    No se pudo cargar el cuestionario.

                </div>
            `;
        });
}

// MOSTRAR QUIZ
function mostrarQuiz(data) {

    let html = `

        <div class="card shadow-sm rounded-4 border-0">

            <div class="card-body p-4">

                <div class="text-center mb-4">

                    <h2 class="fw-bold">
                        ${data.tema}
                    </h2>

                    <p class="text-secondary">
                        Responde las siguientes preguntas.
                    </p>

                </div>
    `;

    data.preguntas.forEach((pregunta, index) => {

        html += `

            <div class="mb-4 p-3 border rounded-3 bg-light">

                <h5 class="fw-semibold mb-3">

                    ${index + 1}. ${pregunta.pregunta}

                </h5>
        `;

        pregunta.opciones.forEach((opcion, i) => {

            html += `

                <div class="form-check mb-2">

                    <input class="form-check-input"
                           type="radio"
                           name="pregunta${index}"
                           value="${i}"
                           id="p${index}_${i}">

                    <label class="form-check-label"
                           for="p${index}_${i}">

                        ${opcion}

                    </label>

                </div>
            `;
        });

        html += `</div>`;
    });

    html += `

                <div class="text-center">

                    <button class="btn btn-cereza px-5 rounded-pill"
                            onclick='calificarQuiz(${JSON.stringify(data.preguntas)})'>

                        Finalizar Quiz

                    </button>

                </div>

                <div id="resultadoQuiz" class="mt-4"></div>

            </div>

        </div>
    `;

    document.getElementById("areaQuiz").innerHTML = html;

    // SCROLL SUAVE
    document.getElementById("areaQuiz").scrollIntoView({

        behavior: "smooth"
    });
}

// CALIFICAR QUIZ
function calificarQuiz(preguntas) {

    let puntos = 0;

    preguntas.forEach((pregunta, index) => {

        const seleccionada = document.querySelector(

            `input[name="pregunta${index}"]:checked`
        );

        if (seleccionada) {

            if (parseInt(seleccionada.value) === pregunta.correcta) {

                puntos++;
            }
        }
    });

    let mensaje = "";
    let clase = "";

    if (puntos === preguntas.length) {

        mensaje = "¡Excelente trabajo!";
        clase = "alert-success";

    } else if (puntos >= 3) {

        mensaje = "Buen resultado.";
        clase = "alert-info";

    } else {

        mensaje = "Puedes seguir practicando.";
        clase = "alert-warning";
    }

    document.getElementById("resultadoQuiz").innerHTML = `

        <div class="alert ${clase} text-center rounded-4 shadow-sm">

            <h4 class="fw-bold mb-2">

                ${puntos} / ${preguntas.length}

            </h4>

            <p class="mb-0">

                ${mensaje}

            </p>

        </div>
    `;
}