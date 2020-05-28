const fs = require("fs");
const fsp = require("fs").promises;

// Lire les 3 fichiers
// Afficher leur contenu, dans l'ordre

// Appels en série
/*
fs.readFile("./1.txt", "utf8", function onRead(err, content) {
  console.log(content);

  fs.readFile("./2.txt", "utf8", function onRead(err, content) {
    console.log(content);

    fs.readFile("./3.txt", "utf8", function onRead(err, content) {
      console.log(content);
    });
  });
});
*/

// Appels en concurrence
/*
let pending = 3;
const results = new Map();

fs.readFile("./1.txt", "utf8", function onRead(err, content) {
  pending--;
  results.set(1, content);
  if (pending === 0) {
    showResults();
  }
});

fs.readFile("./2.txt", "utf8", function onRead(err, content) {
  pending--;
  results.set(2, content);
  if (pending === 0) {
    showResults();
  }
});

fs.readFile("./3.txt", "utf8", function onRead(err, content) {
  pending--;
  results.set(3, content);
  if (pending === 0) {
    showResults();
  }
});

function showResults() {
  console.log(results);
}
*/

// Series (promise)
/*
fsp
  .readFile("./1.txt", "utf8") // Promise<String>

  .then(function(content1) {
    return fsp.readFile("./2.txt", "utf8").then(function(content2) {
      return [content1, content2];
    });
  }) // Promise<[String, String]>

  .then(function(contents) {
    return fsp.readFile("./3.txt", "utf8").then(function(content3) {
      return [...contents, content3];
    });
  }) // Promise<[String, String, String]>

  .then(function(contents) {
    console.log(contents);
  })

  .catch(function(err) {
    console.error(err);
  });
*/

// Series (async/await)
/*
async function main() {
  try {
    const content1 = await fsp.readFile("./1.txt", "utf8");
    const content2 = await fsp.readFile("./2.txt", "utf8");
    const content3 = await fsp.readFile("./3.txt", "utf8");
    console.log([content1, content2, content3]);
  } catch (err) {
    console.error(err);
  }
}
main();
*/

// Promise.all (concurrence)
/*
const pizzaPs = [
  commander("4 fromages"),
  commander("reine"),
  commander("calzone"),
]

const pizzasP = Promise.all(pizzaPs)

const pizzas = await pizzasP
*/

// Async/await (concurrence)
/*
async function () {
  const quatreFromagesP = commander("4 fromages") // 3 min
  const reineP = commander("reine")               // 2 min
  const calzoneP = commander("calzone")           // 4 min

  const p1 = await quatreFromagesP  // +3 min
  const p2 = await reineP           // +0 min
  const p3 = await calzoneP         // +1 min

  manger([p1, p2, p3])
}
*/
