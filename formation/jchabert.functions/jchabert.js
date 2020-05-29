exports.main = (context, send) => {
  console.log(context);

  send({
    body: { message: "jérémie" },
    statusCode: 200,
  });
};
