function _fibo(n) {
  //debug(n);
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

exports.main = (context, send) => {
  try {
    const start = Date.now();
    const fromBody = context.body.n; // string
    const fromQueryString = context.params.n; // array
    const queryInput = fromBody ? [fromBody] : fromQueryString;
    const inputs = queryInput
      .map((v) => Number(v))
      .filter((v) => v >= 0 && !isNaN(v));
    const outputs = inputs.map((v) => fibo(v));
    const time = Date.now() - start;
    send({ body: { inputs, outputs, time }, statusCode: 200 });
  } catch (err) {
    console.error(err);
    send({ body: { error: err.message }, statusCode: 400 });
  }
};
