const constants = {
  STATUS_CODES: {
    INVALID_PROMPT: 113,
    SUCCESS: 200,
    NO_CONTENT: 204,
    INVALID_FORMAT: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    DATA_NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    VALIDATION_FAILED: 422,
    FAILURE: 500,
  },
  JWT_EXPIRY: 1000 * 60 * 60 * 24 * 7, //7 days
  EMAIL_VALIDATE_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

module.exports = constants;