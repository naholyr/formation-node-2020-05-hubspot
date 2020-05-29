exports.main = (context, send) => {
  // Show Context
  // console.log(context);

  // Get Query Param
  const queryVal = context.params.x[0];

  // Call Fibo
  const val = checkVal(queryVal);

  // Create json result
  const result = { x: val };

  send({
    body: result,
    statusCode: 200,
  });
};

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
