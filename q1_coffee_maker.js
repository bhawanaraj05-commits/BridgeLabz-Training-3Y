function boilWater() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.2) {
        reject("Boiling water failed");
      } else {
        console.log("Water is boiled");
        resolve();
      }
    }, 1000 + Math.random() * 1000);
  });
}

function brewCoffee() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.2) {
        reject("Brewing coffee failed");
      } else {
        console.log("Coffee is brewed");
        resolve();
      }
    }, 1000 + Math.random() * 1000);
  });
}

function pourIntoCup() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.2) {
        reject("Pouring failed");
      } else {
        console.log("Coffee is poured into the cup");
        resolve();
      }
    }, 1000 + Math.random() * 1000);
  });
}

console.log("Making coffee...");

boilWater()
  .then(function () {
    return brewCoffee();
  })
  .then(function () {
    return pourIntoCup();
  })
  .then(function () {
    console.log("Coffee ready for the team!");
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
