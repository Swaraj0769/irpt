document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
  gsap.from("#home h2", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
  gsap.from("#home p", { duration: 1, y: 50, opacity: 0, delay: 0.7 });
  gsap.from("#home button", { duration: 1, scale: 0, opacity: 0, delay: 0.9, stagger: 0.2 });
});

const searchInput = document.getElementById("serviceSearch");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll("#services .grid > div");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
});
