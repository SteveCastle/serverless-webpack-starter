const formatResponse = (msg, event) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  },
  body: JSON.stringify({
    msg,
    input: event,
  }),
});

export default formatResponse;
