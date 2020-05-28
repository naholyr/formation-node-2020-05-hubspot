console.log(toto2(2, 3));

function toto(a, b) {
  const c = a + b;
  return a * c;
}

const toto2 = function(a, b) {
  const c = a + b;
  return a * c;
};

const toto3 = (a, b) => {
  const c = a + b;
  return a * c;
};

const toto4 = (a) => {
  return a * a;
};

const toto5 = (a) => a * a;

const a = [1, 2, 3, 4, 5];

const carres = a.map(function(value) {
  return value * value;
});

const carres2 = a.map((v) => v * v); // [1, 4, ..]

const pairs = a.filter((v) => v % 2 === 0); // [2, 4]
