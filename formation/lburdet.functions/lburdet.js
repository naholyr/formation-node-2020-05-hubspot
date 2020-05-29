exports.main = (context, send) => {
  console.log(context);
  send({
    body: "1ère fonction serverless qui affiche une réponse TXT",
    statusCode: 200,
  });
};

// Code error
// 200 OK
// 201 Created
// 204 No content
// 3xx Redirection
// 4xx User
// 5xx Serveur
