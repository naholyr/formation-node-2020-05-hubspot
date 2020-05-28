exports.main = (context, sendResponse) => {
    // your code called when the function is executed
    const functionResponse = "chabert, jérémie chabert"
  
    // sendResponse is a callback function you call to send your response.
    sendResponse({body: functionResponse, statusCode: 200});

    
 };