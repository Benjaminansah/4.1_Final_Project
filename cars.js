


// async function renderCars(filter) {
//   const carsWrapper = document.querySelector(".cars");

//   carsWrapper.classList += ' cars__loading'

//   if (!cars) {
//     cars = await getCars();
//   }


// carsWrapper.classList.remove('cars__loading')

// if (filter === "LOW_TO_HIGH") {
//   cars.sort(
//     (a, b) =>
//     b.VehicleYear - a.VehicleYear ||
//     a.VehiclePrice - b.VehiclePrice ||
//     a.VehicleMileage - b.VehicleMileage

//   );
// } else if (filter === "HIGH_TO_LOW") {
//   cars.sort(
//     (a, b) =>
//     a.VehicleYear - b.VehicleYear ||
//     b.VehiclePrice - a.VehiclePrice ||
//     b.VehicleMileage - a.VehicleMileage
//   )
// } else if (filter === "RATING") {
//   cars.sort((a, b) => b.Rating - a.Rating);
// }

// const carsHtml = cars
// .map((car) => {
// return `<div class="car">
// <figure class="car__img--wrapper">
//  <img class="car__img" src="${car.VehicleUrl}" alt="">
//   </figure>
//   <div class="MakeName">${car.MakeName}</div>
//   <div class="MakeId">Vehicle Make ID: ${car.MakeId}</div>
//     <div class="VehicleTypleId">Vehicle Type ID: ${car.VehicleTypeId}</div>
//     <div class="VehicleTypleName">Vehicle Type: ${car.VehicleTypeName}</div>
//       <div class="VehicleYear">Year: ${car.VehicleYear}</div>
//       <div class="VehiclePrice">Price: ${car.VehiclePrice}</div>
//       <div class="VehicleMileage">Mileage: ${car.VehicleMileage}</div>
//       <div class="car__ratings">${ratingsHTML(car.Rating)}</div>
//     </div>`;

// })
// .join("");

// carsWrapper.innerHTML = carsHtml;
// }

let cars;

async function renderCars(filter) {
  const carsWrapper = document.querySelector(".cars");

  carsWrapper.classList += ' cars__loading'

  if (!cars) {
    cars = await getCars();
  }


carsWrapper.classList.remove('cars__loading')

if (filter === "YEAR_LOW_TO_HIGH") {
  cars.sort((a, b) => a.VehicleYear - b.VehicleYear);
} else if (filter === "YEAR_HIGH_TO_LOW") {
  cars.sort((a, b) => b.VehicleYear - a.VehicleYear);
} else if (filter === "PRICE_LOW_TO_HIGH") {
  cars.sort((a, b) => {
    const priceA = parseFloat(a.VehiclePrice.replace(/[$,]/g, ''));
    const priceB = parseFloat(b.VehiclePrice.replace(/[$,]/g, ''));
    return priceA - priceB;
  });
} else if (filter === "PRICE_HIGH_TO_LOW") {
  cars.sort((a, b) => {
    const priceA = parseFloat(a.VehiclePrice.replace(/[$,]/g, ''));
    const priceB = parseFloat(b.VehiclePrice.replace(/[$,]/g, ''));
    return priceB - priceA;
  });
} else if (filter === "MILEAGE_LOW_TO_HIGH") {
  cars.sort((a, b) => {
    const mileageA = parseInt(a.VehicleMileage);
    const mileageB = parseInt(b.VehicleMileage);
    return mileageA - mileageB;
  });
} else if (filter === "MILEAGE_HIGH_TO_LOW") {
  cars.sort((a, b) => {
    const mileageA = parseInt(a.VehicleMileage);
    const mileageB = parseInt(b.VehicleMileage);
    return mileageB - mileageA;
  });
} else if (filter === "RATING") {
  cars.sort((a, b) => b.Rating - a.Rating);
}

const carsHtml = cars
.map((car) => {
return `<div class="car">
<figure class="car__img--wrapper">
 <img class="car__img" src="${car.VehicleUrl}" alt="">
  </figure>
  <div class="MakeName">${car.MakeName}</div>
  <div class="MakeId">Vehicle Make ID: ${car.MakeId}</div>
    <div class="VehicleTypleId">Vehicle Type ID: ${car.VehicleTypeId}</div>
    <div class="VehicleTypleName">Vehicle Type: ${car.VehicleTypeName}</div>
      <div class="VehicleYear">Year: ${car.VehicleYear}</div>
      <div class="VehiclePrice">Price: ${car.VehiclePrice}</div>
      <div class="VehicleMileage">Mileage: ${car.VehicleMileage}</div>
      <div class="car__ratings">${ratingsHTML(car.Rating)}</div>
    </div>`;

})
.join("");

carsWrapper.innerHTML = carsHtml;
}

function ratingsHTML(rating) {
  let ratingHTML = "";
  for (let i = 0; i <Math.floor(rating); ++i) {
    ratingHTML += '<i class="fas fa-star"></i>\n';
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
  }


  return ratingHTML
}

function filterCars(event) {
  renderCars(event.target.value);
}

setTimeout(() => {
  renderCars();
});

    function getCars() {
      return new Promise((resolve) => {
       setTimeout(() => {
        resolve([
      {
        "MakeId": 440,
        "MakeName": "ASTON MARTIN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2016,
        "VehiclePrice": "$75,500",
        "VehicleMileage": "67000",
        "Rating": 4.5,
        "VehicleUrl": "assets/Aston Martin.avif"
      },
      {
        "MakeId": 441,
        "MakeName": "TESLA MODEL-X",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$54,875",
        "VehicleMileage": "13300",
        "Rating": 4.5,
        "VehicleUrl": "assets/Tesla Model-X.avif"
      },
      {
        "MakeId": 442,
        "MakeName": "JAGUAR",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2026,
        "VehiclePrice": "$102,734",
        "VehicleMileage": "1003",
        "Rating": 4,
        "VehicleUrl": "assets/Jaguar.jpg"
      },
      {
        "MakeId": 443,
        "MakeName": "MASERATI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$132,734",
        "VehicleMileage": "1111",
        "Rating": 5,
        "VehicleUrl": "assets/Maserati.avif"
      },
      {
        "MakeId": 445,
        "MakeName": "ROLLS-ROYCE",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2017,
        "VehiclePrice": "$160,734",
        "VehicleMileage": "15900",
        "Rating": 4,
        "VehicleUrl": "assets/Rolls Royce-Phantom.jpg"
      },
      {
        "MakeId": 448,
        "MakeName": "TOYOTA",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2023,
        "VehiclePrice": "$55,321",
        "VehicleMileage": "112000",
        "Rating": 4.5,
        "VehicleUrl": "assets/Toyota Land-Cruiser.jpeg"
      },
      {
        "MakeId": 449,
        "MakeName": "MERCEDES-BENZ",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2022,
        "VehiclePrice": "$45,444",
        "VehicleMileage": "100700",
        "Rating": 4.5,
        "VehicleUrl": "assets/Mercedes Benz-C350.webp"
      },
      {
        "MakeId": 452,
        "MakeName": "BMW",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2020,
        "VehiclePrice": "$46,044",
        "VehicleMileage": "98700",
        "Rating": 4,
        "VehicleUrl": "assets/BMW X5.jpg"
      },
      {
        "MakeId": 454,
        "MakeName": "BUGATTI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2016,
        "VehiclePrice": "$1,600,000",
        "VehicleMileage": "14100",
        "Rating": 3.5,
        "VehicleUrl": "assets/Bugatti Chiron.avif"
      },
      {
        "MakeId": 456,
        "MakeName": "MINI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2020,
        "VehiclePrice": "$27,500",
        "VehicleMileage": "91010",
        "Rating": 5,
        "VehicleUrl": "assets/Mini Cooper.avif"
      },
      {
        "MakeId": 460,
        "MakeName": "FORD",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$33,560",
        "VehicleMileage": "32000",
        "Rating": 4.5,
        "VehicleUrl": "assets/Ford Edge.png"
      },
      {
        "MakeId": 464,
        "MakeName": "LINCOLN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2022,
        "VehiclePrice": "$53,500",
        "VehicleMileage": "59200",
        "Rating": 4,
        "VehicleUrl": "assets/Lincoln Continental.jpg"
      },
      {
        "MakeId": 465,
        "MakeName": "MERCURY",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2023,
        "VehiclePrice": "$60,570",
        "VehicleMileage": "98450",
        "Rating": 3,
        "VehicleUrl": "assets/Mercury Grand-Marquis.jpg"
      },
      {
        "MakeId": 466,
        "MakeName": "LOTUS",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2022,
        "VehiclePrice": "$120,450",
        "VehicleMileage": "37700",
        "Rating": 3.5,
        "VehicleUrl": "assets/Lotus Emira.webp"
      },
      {
        "MakeId": 467,
        "MakeName": "CHEVROLET",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2019,
        "VehiclePrice": "$23,450",
        "VehicleMileage": "180200",
        "Rating": 2.5,
        "VehicleUrl": "assets/Chevrolet Camaro.jpg"
      },
      {
        "MakeId": 468,
        "MakeName": "BUICK",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2018,
        "VehiclePrice": "$19,444",
        "VehicleMileage": "147700",
        "Rating": 4,
        "VehicleUrl": "assets/Buick Regal.webp"
      },
      {
        "MakeId": 469,
        "MakeName": "CADILLAC",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2018,
        "VehiclePrice": "$34,980",
        "VehicleMileage": "108600",
        "Rating": 3.5,
        "VehicleUrl": "assets/Cadillac CT6.jpg"
      },
      {
        "MakeId": 470,
        "MakeName": "HOLDEN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 1956,
        "VehiclePrice": "$68,980",
        "VehicleMileage": "207300",
        "Rating": 2.5,
        "VehicleUrl": "assets/Holden Efijy.jpg"
      },
      {
        "MakeId": 472,
        "MakeName": "GMC",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2020,
        "VehiclePrice": "$37,780",
        "VehicleMileage": "92350",
        "Rating": 3,
        "VehicleUrl": "assets/GMC Terrain-SLE.avif"
      },
      {
        "MakeId": 473,
        "MakeName": "MAZDA",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$44,600",
        "VehicleMileage": "19100",
        "Rating": 4.5,
        "VehicleUrl": "assets/Mazda CX-5.jpg"
      },
      {
        "MakeId": 474,
        "MakeName": "HONDA",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2022,
        "VehiclePrice": "$22,450",
        "VehicleMileage": "53900",
        "Rating": 4,
        "VehicleUrl": "assets/Honda Civic.jpg"
      },
      {
        "MakeId": 475,
        "MakeName": "ACURA",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2017,
        "VehiclePrice": "$47,555",
        "VehicleMileage": "123200",
        "Rating": 3.5,
        "VehicleUrl": "assets/Acura NSX.jpg"
      },
      {
        "MakeId": 476,
        "MakeName": "DODGE",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2026,
        "VehiclePrice": "$54,340",
        "VehicleMileage": "206",
        "Rating": 5,
        "VehicleUrl": "assets/Dodge Durango.avif"
      },
      {
        "MakeId": 477,
        "MakeName": "CHRYSLER",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2021,
        "VehiclePrice": "$45,340",
        "VehicleMileage": "47125",
        "Rating": 4.5,
        "VehicleUrl": "assets/Chrysler 300.avif"
      },
      {
        "MakeId": 478,
        "MakeName": "NISSAN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2023,
        "VehiclePrice": "$55,340",
        "VehicleMileage": "66720",
        "Rating": 4,
        "VehicleUrl": "assets/Nissan 37OZ.jpg"
      },
      {
        "MakeId": 480,
        "MakeName": "INFINITI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$76,340",
        "VehicleMileage": "11800",
        "Rating": 4.5,
        "VehicleUrl": "assets/Infinity.webp"
      },
      {
        "MakeId": 481,
        "MakeName": "MITSUBISHI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$47,780",
        "VehicleMileage": "15500",
        "Rating": 5,
        "VehicleUrl": "assets/Mtsubishi Outlander.jpg"
      },
      {
        "MakeId": 482,
        "MakeName": "VOLKSWAGEN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$33,796",
        "VehicleMileage": "23700",
        "Rating": 3.5,
        "VehicleUrl": "assets/Volkswagen Buzz.jpg"
      },
      {
        "MakeId": 485,
        "MakeName": "VOLVO",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2022,
        "VehiclePrice": "$42,896",
        "VehicleMileage": "55700",
        "Rating": 5,
        "VehicleUrl": "assets/Volvo XC90.jpg"
      },
      {
        "MakeId": 492,
        "MakeName": "FIAT",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$45,220",
        "VehicleMileage": "8220",
        "Rating": 4.5,
        "VehicleUrl": "assets/Fiat 500e.avif"
      },
      {
        "MakeId": 493,
        "MakeName": "ALFA ROMEO",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$63,300",
        "VehicleMileage": "36100",
        "Rating": 4.5,
        "VehicleUrl": "assets/Alfa Romeo.png"
      },
      {
        "MakeId": 498,
        "MakeName": "HYUNDAI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2026,
        "VehiclePrice": "$68,490",
        "VehicleMileage": "102",
        "Rating": 4,
        "VehicleUrl": "assets/Hundai Palisade.webp"
      },
      {
        "MakeId": 499,
        "MakeName": "KIA",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$56,500",
        "VehicleMileage": "9451",
        "Rating": 3.5,
        "VehicleUrl": "assets/Kia Sportage-Hybrid.jpg"
      },
      {
        "MakeId": 502,
        "MakeName": "LAMBORGHINI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$670,450",
        "VehicleMileage": "2980",
        "Rating": 4.5,
        "VehicleUrl": "assets/Lamborghini.jpg"
      },
      {
        "MakeId": 515,
        "MakeName": "LEXUS",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2020,
        "VehiclePrice": "$51,450",
        "VehicleMileage": "35890",
        "Rating": 5,
        "VehicleUrl": "assets/Lexus RX-350.avif"
      },
      {
        "MakeId": 523,
        "MakeName": "SUBARU",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2019,
        "VehiclePrice": "$39,110",
        "VehicleMileage": "213011",
        "Rating": 4.5,
        "VehicleUrl": "assets/Subaru Forester.jpg"
      },
      {
        "MakeId": 533,
        "MakeName": "MAYBACH",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$460,450",
        "VehicleMileage": "3451",
        "Rating": 5,
        "VehicleUrl": "assets/Maybach S-680.jpg"
      },
      {
        "MakeId": 536,
        "MakeName": "PONTIAC",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2017,
        "VehiclePrice": "$49,000",
        "VehicleMileage": "105251",
        "Rating": 3.5,
        "VehicleUrl": "assets/Pontiac Solstice.jpg"
      },
      {
        "MakeId": 542,
        "MakeName": "ISUZU",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2019,
        "VehiclePrice": "$27,100",
        "VehicleMileage": "97333",
        "Rating": 3,
        "VehicleUrl": "assets/Isuzu Vehicross.avif"
      },
      {
        "MakeId": 582,
        "MakeName": "AUDI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$60,000",
        "VehicleMileage": "19005",
        "Rating": 4.5,
        "VehicleUrl": "assets/Audi R8.webp"
      },
      {
        "MakeId": 583,
        "MakeName": "BENTLEY",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2023,
        "VehiclePrice": "$230,000",
        "VehicleMileage": "6237",
        "Rating": 5,
        "VehicleUrl": "assets/Bentley.webp"
      },
      {
        "MakeId": 584,
        "MakeName": "PORSCHE",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2021,
        "VehiclePrice": "$75,000",
        "VehicleMileage": "92451",
        "Rating": 3.5,
        "VehicleUrl": "assets/Porsche 911-Turbo_S.jpg"
      },
      {
        "MakeId": 603,
        "MakeName": "FERRARI",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2025,
        "VehiclePrice": "$340,340",
        "VehicleMileage": "1001",
        "Rating": 5,
        "VehicleUrl": "assets/Ferrari.webp"
      },
      {
        "MakeId": 1056,
        "MakeName": "SATURN",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2018,
        "VehiclePrice": "$30,070",
        "VehicleMileage": "109090",
        "Rating": 3,
        "VehicleUrl": "assets/Saturn Skys.webp"
      },
      {
        "MakeId": 4162,
        "MakeName": "OLDSMOBILE",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 1953,
        "VehiclePrice": "$112,170",
        "VehicleMileage": "203111",
        "Rating": 4.5,
        "VehicleUrl": "assets/Oldsmobile.webp"
      },
      {
        "MakeId": 5083,
        "MakeName": "GENESIS",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$77,450",
        "VehicleMileage": "13202",
        "Rating": 4,
        "VehicleUrl": "assets/Genesis GV80.webp"
      },
      {
        "MakeId": 13391,
        "MakeName": "FALCON MOTORS",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2024,
        "VehiclePrice": "$300,050",
        "VehicleMileage": "3155",
        "Rating": 4.5,
        "VehicleUrl": "assets/Falcon F7.jpg"
      },
      {
        "MakeId": 13647,
        "MakeName": "RENAULT",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 2026,
        "VehiclePrice": "$56,470",
        "VehicleMileage": "288",
        "Rating": 4,
        "VehicleUrl": "assets/Renault.jpg"
      },
      {
        "MakeId": 13887,
        "MakeName": "HEDLEY STUDIOS",
        "VehicleTypeId": 2,
        "VehicleTypeName": "Passenger Car",
        "VehicleYear": 1967,
        "VehiclePrice": "$55,987",
        "VehicleMileage": "229598",
        "Rating": 2,
        "VehicleUrl": "assets/Hedley Studios.jpg"
      }
    ]);
  }, 1000);
 });
}