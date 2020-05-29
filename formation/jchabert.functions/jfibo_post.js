// https://hubspot-developers-16mzixv-7482495.hs-sites.com/_hcms/api/formation/jfibo

// context: { params, body, accountId, headers, secrets }
// send({ body, statusCode, headers? })

function checkVal(n) {
  if (n >= 0 && !isNaN(n)) {
    return fibo(Number(n));
  } else {
    throw new Error("invalid");
  }
}

function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

exports.main = (context, send) => {
  val = checkVal(context.body.x);
  console.log(val);
  send({
    body: { x: val },
    statusCode: 200,
  });
};
