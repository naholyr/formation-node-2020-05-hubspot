const { main } = require("./fibo");

const call = (context, expectedStatusCode, expectedBody) => {
  const send = jest.fn();
  main(context, send);

  expect(send).toHaveBeenCalledTimes(1);

  expect(send).toHaveBeenCalledWith({
    statusCode: expectedStatusCode,
    body: {
      ...expectedBody,
      // Take real value, not interesting to test
      // send.mock.calls = all calls
      // send.mock.calls[0] = arguments of first call
      // send.mock.calls[0][0] = first argument of first call
      time: send.mock.calls[0][0].body.time,
    },
  });

  return send;
};

describe("nchambrier/fibo", () => {
  test("GET fibo (invalid input)", () => {
    call(
      {
        params: { n: ["toto"] },
        body: {},
      },
      200, // FIXME ?
      {
        inputs: [],
        outputs: [],
      }
    );
  });

  test("POST fibo (invalid input)", () => {
    call(
      {
        params: {},
        body: { n: "toto" },
      },
      200, // FIXME ?
      {
        inputs: [],
        outputs: [],
      }
    );
  });

  test("GET fibo(5) = 8", () => {
    call(
      {
        params: { n: ["5"] },
        body: {},
      },
      200,
      {
        inputs: [5],
        outputs: [8],
      }
    );
  });

  test("POST fibo(6) = 13", () => {
    call(
      {
        params: {},
        body: { n: 6 },
      },
      200,
      {
        inputs: [6],
        outputs: [13],
      }
    );
  });
});
