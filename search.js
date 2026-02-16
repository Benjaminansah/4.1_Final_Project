const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  renderCars();

  const carCards = document.querySelectorAll(".car");

  carCards.forEach((card) => {
    const name = card.querySelector(".MakeName").textContent.toLowerCase();

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

