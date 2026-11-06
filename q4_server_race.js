function serverA() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.1) {
        reject("Server A failed");
      } else {
        resolve("Server A");
      }
    }, 2000);
  });
}

function serverB() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.1) {
        reject("Server B failed");
      } else {
        resolve("Server B");
      }
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(function (results) {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch(function (error) {
    console.log("Error in Promise.all: " + error);
  });

Promise.race([serverA(), serverB()])
  .then(function (winner) {
    console.log("Fastest response: " + winner);
  })
  .catch(function (error) {
    console.log("Error in Promise.race: " + error);
  });
