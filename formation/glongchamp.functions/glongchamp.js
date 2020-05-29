exports.main = (context, send) => {
  // your code called when the function is executed
  const functionResponse = "Hello world !";

  // sendResponse is a callback function you call to send your response.
  send({ body: functionResponse, statusCode: 200 });
};
