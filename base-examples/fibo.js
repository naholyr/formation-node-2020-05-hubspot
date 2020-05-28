const debug = require("debug")("fibo");

// DEBUG=fibo
// DEBUG=toto,fibo
// DEBUG=fibo:*

function _fibo(n) {
  debug(n);
  if (n === 0) return 1;
  if (n === 1) return 1;
  return _fibo(n - 1) + _fibo(n - 2);
}

function fibo(n) {
  const n2 = Number(n);
  if (n2 < 0 || isNaN(n2)) {
    throw new Error("Invalid input");
  }
  return _fibo(n2);
}

exports.fibo = fibo;
