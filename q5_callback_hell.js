function design(callback) {
  setTimeout(function () {
    console.log("design");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(function () {
    console.log("build");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(function () {
    console.log("test");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(function () {
    console.log("deploy");
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(function () {
    console.log("celebrate");
    callback();
  }, 1000);
}

function designAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("design");
      resolve();
    }, 1000);
  });
}

function buildAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("build");
      resolve();
    }, 1000);
  });
}

function testAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("test");
      resolve();
    }, 1000);
  });
}

function deployAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("deploy");
      resolve();
    }, 1000);
  });
}

function celebrateAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("celebrate");
      resolve();
    }, 1000);
  });
}

async function runPipeline() {
  console.log("Async await version");
  await designAsync();
  await buildAsync();
  await testAsync();
  await deployAsync();
  await celebrateAsync();
  console.log("Done");
}

console.log("Callback version");
design(function () {
  build(function () {
    test(function () {
      deploy(function () {
        celebrate(function () {
          runPipeline();
        });
      });
    });
  });
});
