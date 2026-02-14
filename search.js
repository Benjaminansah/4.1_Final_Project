const searchInput = document.getElementById("searchInput");
const cars = document.querySelectorAll(".car");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();

  cars.forEach(function (car) {
    const carName = car.getAttribute("data-name").toLowerCase();

    if (carName.includes(searchValue)) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }
  });
});

