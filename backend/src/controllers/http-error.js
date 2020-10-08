const HttpStatus = require('http-status-codes');

const makeError = (code, why) => {
  const error = new Error('Something went wrong');

  error.data = why;
  error.code = code;

  return error;
};

makeError.bind = (code) => (why) => makeError(code, why);

makeError.badRequest = makeError.bind(HttpStatus.BAD_REQUEST);
makeError.unprocessableEntity = makeError.bind(HttpStatus.UNPROCESSABLE_ENTITY);
makeError.unauthorized = makeError.bind(HttpStatus.UNAUTHORIZED);
makeError.notFound = makeError.bind(HttpStatus.NOT_FOUND);

module.exports = makeError;
