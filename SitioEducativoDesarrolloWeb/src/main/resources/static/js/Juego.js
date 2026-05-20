
function personaje() { return "🤒"; }

function puntos() { return "💊"; }

function enemigo() { return "🦠"; }

function obstaculo() {return "🩻"; }

let vidas = 3;
let puntosTotales = 0;

let ancho = 0;
let alto = 0;
let puntaje = 0;
let tablero = [];

let personajeExiste = false;
let posPersonaje = null;

class Punto {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
}

function crearTablero() {

    personajeExiste = false;

    puntaje = 0;
    vidas = 3;
    puntosTotales = 0;

    document.getElementById("puntos").innerText = puntaje;
    document.getElementById("vidas").innerText = vidas;

    ancho = parseInt(document.getElementById("ancho").value);
    alto = parseInt(document.getElementById("alto").value);

    tablero = [];

    for (let i = 0; i < alto; i++) {
        tablero[i] = [];

        for (let j = 0; j < ancho; j++) {
            tablero[i][j] = "vacio";
        }
    }

    generarObstaculos(alto*ancho/10);
    generarEnemigos(alto*ancho/4);


    render();
}



function establecerPersona(i, j) {

    if (!personajeExiste) {

        if(tablero[i][j] == "obstaculo" || tablero[i][j] == "enemigo" ){return;}

        tablero[i][j] = "personaje";

        posPersonaje = new Punto(j, i);

        personajeExiste = true;

        llenarConPuntos();

        render();
    }
}

function establecerObstaculo(i, j) {
    tablero[i][j] = "obstaculo";

}

function establecerEnemigo(i, j) {
    if(tablero[i][j] == "vacio"){
        tablero[i][j] = "enemigo";
    }
}

function generarObstaculos(cantidad) {

    for (let k = 0; k < cantidad; k++) {

        let x = Math.floor(Math.random() * ancho);
        let y = Math.floor(Math.random() * alto);

        if (tablero[y][x] === "vacio") {
            tablero[y][x] = "obstaculo";
        }
    }
}

function generarEnemigos(cantidad){

    for (let k = 0; k < cantidad; k++) {

            let x = Math.floor(Math.random() * ancho);
            let y = Math.floor(Math.random() * alto);

            if (tablero[y][x] === "vacio") {
                tablero[y][x] = "enemigo";
            }
        }
}

function llenarConPuntos() {
    puntosTotales = 0;
     for (let i = 0; i < alto; i++) {
            for (let j = 0; j < ancho; j++) {

                if (tablero[i][j] === "vacio") {
                    tablero[i][j] = "puntos";
                    puntosTotales++;
                }
            }
        }
    }

function espacio() {
  return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
}
function render() {

    let htmlGenerado = "";

    for (let i = 0; i < alto; i++) {

        htmlGenerado += "<tr>";

        for (let j = 0; j < ancho; j++) {

            let celda = tablero[i][j];

            let contenido = "";

            if (celda === "personaje") {

                contenido = personaje();

            } else if (celda === "puntos") {

                contenido = puntos();

            } else if (celda === "obstaculo") {

                contenido = obstaculo();

            } else if (celda === "enemigo") {

                contenido = enemigo();

            } else {

                contenido = espacio();
            }

            htmlGenerado += `
                <td onclick="establecerPersona(${i},${j})">
                    ${contenido}
                </td>
            `;
        }

        htmlGenerado += "</tr>";
    }

    document.getElementById("tablero").innerHTML = htmlGenerado;
}

document.addEventListener("keydown", function(event) {

    if (!posPersonaje) return;

    let nuevaX = posPersonaje.x;
    let nuevaY = posPersonaje.y;

    switch (event.key) {

        case "ArrowUp":
            nuevaY--;
            break;

        case "ArrowDown":
            nuevaY++;
            break;

        case "ArrowLeft":
            nuevaX--;
            break;

        case "ArrowRight":
            nuevaX++;
            break;

        default:
            return;
    }

    // límites
    if (
        nuevaX < 0 ||
        nuevaX >= ancho ||
        nuevaY < 0 ||
        nuevaY >= alto
    ) {
        return;
    }

    // obstáculo
    if (tablero[nuevaY][nuevaX] === "obstaculo") {

        return;
    }

    // punto
    if (tablero[nuevaY][nuevaX] === "puntos") {

        puntaje++;

        document.getElementById("puntos").innerText = puntaje;

        // GANAR
        if (puntaje === puntosTotales) {

            setTimeout(() => {

                alert("🎉 ¡Ganaste el juego!");

            }, 100);

        }
    }

    // enemigo
    if (tablero[nuevaY][nuevaX] === "enemigo") {

        vidas--;

        document.getElementById("vidas").innerText = vidas;

        // PERDER
        if (vidas <= 0) {

            setTimeout(() => {

                alert("💀 Perdiste todas tus vidas");

            }, 100);

            return;
        }
    }

    // limpiar posición anterior
    tablero[posPersonaje.y][posPersonaje.x] = "vacio";

    // mover
    posPersonaje.x = nuevaX;
    posPersonaje.y = nuevaY;

    tablero[nuevaY][nuevaX] = "personaje";

    render();
});