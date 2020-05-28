// 200 OK
// 201 Created
// 204 No Content
// 301/302
// 4xx
// 404 Not Found
// 401/403
// 409 Conflict
// 5xx

// const { message } = require("./message");

exports.main = (context, send) => {
  console.log(context);

  send({
    body: { message: "coucou" },
    statusCode: 200,
  });
};
