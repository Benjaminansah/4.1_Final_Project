// const searchInput = document.getElementById("searchInput");

// searchInput.addEventListener("input", () => {
//   const value = searchInput.value.toLowerCase();
//   renderCars();

//   const carCards = document.querySelectorAll(".car");

//   carCards.forEach((card) => {
//     const name = card.querySelector(".MakeName").textContent.toLowerCase();

//     if (name.includes(value)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  renderCars();

  const carCards = document.querySelectorAll(".car");
  let found = false;

  carCards.forEach((card) => {
    const name = card.querySelector(".MakeName").textContent.toLowerCase();

    if (value === "" || name.includes(value)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show message if no cars found
  const carsContainer = document.querySelector(".cars");
  let message = carsContainer.querySelector(".no-cars-message");

  if (value !== "" && !found) {
    if (!message) {
      message = document.createElement("div");
      message.className = "no-cars-message";
      message.textContent = "Car not available in our inventory. Please contact us at 202-234-5678 to discuss your desired car.";
      carsContainer.appendChild(message);
      message.style.color = "red";
    }
    message.style.display = "block";
  } else if (message) {
    message.style.display = "none";
  }
});
