// https://hubspot-developers-16mzixv-7482495.hs-sites.com/_hcms/api/formation/glongchamp

// CHECK FIBO VALUE
function checkVal(n) {
  if (n >= 0 && !isNaN(n)) {
    return fibo(Number(n));
  } else {
    throw new Error("invalid");
  }
}
// FIBO FUNCTION
function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

exports.main = (context, send) => {
  const fiboQuery = context.params.f[0];

  const value = checkVal(fiboQuery);

  const fiboResult = { f: value };

  send({
    body: fiboResult,
    statusCode: 200,
  });
};
