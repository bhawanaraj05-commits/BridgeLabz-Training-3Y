function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function takeOrder() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.15) {
        reject("Order not taken");
      } else {
        resolve("Step 1: Order taken");
      }
    }, randomDelay());
  });
}

function prepare() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.15) {
        reject("Food not prepared");
      } else {
        resolve("Step 2: Food prepared");
      }
    }, randomDelay());
  });
}

function pack() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.15) {
        reject("Packing failed");
      } else {
        resolve("Step 3: Package ready");
      }
    }, randomDelay());
  });
}

function dispatch() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.15) {
        reject("Dispatch failed");
      } else {
        resolve("Step 4: Out for delivery");
      }
    }, randomDelay());
  });
}

function deliver() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.15) {
        reject("Delivery failed");
      } else {
        resolve("Delivery completed!");
      }
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch (error) {
    console.log(error);
    console.log("Pipeline failed!");
  }
}

runPipeline();
