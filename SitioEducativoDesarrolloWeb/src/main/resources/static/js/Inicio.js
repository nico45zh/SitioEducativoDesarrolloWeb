
let i = 0;
let text = "Bienvenido al sitio";
function escribir() {
    if (i < text.length) {
        document.getElementById("titulo").innerHTML += text.charAt(i);
        i++;
        setTimeout(escribir, 80);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    escribir();
});