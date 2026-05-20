
window.addEventListener("scroll", mostrarCards);

function mostrarCards() {

    const cards = document.querySelectorAll(".card-animada");

    cards.forEach((card, index) => {

        const posicion = card.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            setTimeout(() => {

                card.classList.add("visible");

            }, index * 150);

        }

    });

}

window.addEventListener("load", mostrarCards);