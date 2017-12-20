'use strict';
// Example of a Proxy Integration response
exports.handler = (event, context, callback) => {
  let ID = event['pathParameters']['ID']
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "my custom header value" },
        body: "hello world " + ID
    });
}
