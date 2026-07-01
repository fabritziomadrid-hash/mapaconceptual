console.log("Mapa Conceitual carregado!");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.background = "#dbeafe";

        setTimeout(() => {
            card.style.background = "#ffffff";
        }, 300);
    });
});
