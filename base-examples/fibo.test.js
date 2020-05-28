const { fibo } = require("./fibo");

test("fibo(4) === 3", function() {
  const input = 4;
  const output = fibo(4);

  expect(output).toEqual(5);
});

test("fibo(-1) fails", function() {
  expect(function() {
    fibo(-1);
  }).toThrow();
  /*
  let err;
  try {
    fibo(-1);
  } catch (error) {
    err = error;
  }
  expect(err).toBeDefined();
  */
});
