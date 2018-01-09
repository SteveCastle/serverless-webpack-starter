import { msg } from '../common/message';

export const helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      msg,
      input: event,
    }),
  };

  callback(null, response);
};