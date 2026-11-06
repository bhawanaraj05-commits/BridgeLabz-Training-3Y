function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

function rejectAfter(loader, name) {
  return loader().then(function () {
    throw new Error(name + " failed to load");
  });
}

async function loadDashboard() {
  const names = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];
  const failIndex = Math.floor(Math.random() * 3);

  const promises = [];
  for (let i = 0; i < loaders.length; i++) {
    if (i === failIndex) {
      promises.push(rejectAfter(loaders[i], names[i]));
    } else {
      promises.push(loaders[i]());
    }
  }

  const startTime = Date.now();
  const results = await Promise.allSettled(promises);
  const endTime = Date.now();

  for (let i = 0; i < results.length; i++) {
    if (results[i].status === "fulfilled") {
      console.log(names[i] + " succeeded: " + results[i].value);
    } else {
      console.log(names[i] + " failed: " + results[i].reason.message);
    }
  }

  console.log("Total time taken: " + (endTime - startTime) + " ms");
}

loadDashboard();
