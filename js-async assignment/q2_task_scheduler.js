console.log("Start");

setTimeout(function () {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise then callback");
});

console.log("Synchronous log");

console.log("End");
