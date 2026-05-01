
window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".card-animada");

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect().top;

        if (posicion < window.innerHeight) {

                setTimeout(() => {
                    card.classList.add("visible");
                }, index * 100); // efecto cascada

            }

    });

});