function submitOrder() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject("Submit failed");
      }
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log("Attempt " + attempt + ": Success");
      return;
    } catch (error) {
      console.log("Attempt " + attempt + ": Failed");
    }
  }
  throw new Error("Order could not be processed");
}

async function main() {
  try {
    await processOrder();
  } catch (error) {
    console.log(error.message);
  }
}

main();
