const pilar = document.querySelectorAll(".pil");

pilar.forEach((pil) => {
    pil.addEventListener("click", () => {
        const kort = pil.closest("article");
        kort.classList.toggle("open");
    });
});
