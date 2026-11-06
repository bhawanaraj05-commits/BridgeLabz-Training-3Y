function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

let apiFails = Math.random() < 0.3;

function getBugs() {
  return new Promise(function (resolve, reject) {
    fetchBugs(function (bugs) {
      if (apiFails) {
        reject("API failed, could not get bugs");
      } else {
        resolve(bugs);
      }
    });
  });
}

getBugs()
  .then(function (bugs) {
    console.table(bugs);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
