// ====== BOTÃO VOLTAR AO TOPO ======
const topButton = document.createElement("button");
topButton.textContent = "↑ Topo";
topButton.classList.add("topo-btn");
document.body.appendChild(topButton);

// Estilo do botão via JS
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.backgroundColor = "#4b0082";
topButton.style.color = "#fff";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

// Mostrar botão quando rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// Scroll suave ao topo
topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== CITACOES ALEATORIAS ======
const frases = [
    "“I believe that marriage isn’t between a man and woman but between love and love.”",
    "“I thought that I was dreaming when you said you loved me.” – Self Control",
    "“A tornado flew around my room before you came.” – Thinkin Bout You"
];

const frasesContainer = document.querySelector(".frases");
const btnFrase = document.createElement("button");
btnFrase.textContent = "Nova frase";
btnFrase.style.marginTop = "20px";
btnFrase.style.padding = "8px 12px";
btnFrase.style.cursor = "pointer";
btnFrase.style.border = "none";
btnFrase.style.borderRadius = "8px";
btnFrase.style.backgroundColor = "#800080";
btnFrase.style.color = "#fff";
frasesContainer.appendChild(btnFrase);

btnFrase.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    frasesContainer.querySelector("blockquote").textContent = frases[randomIndex];
});

// ====== HOVER EM CARDS (opcional) ======
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
