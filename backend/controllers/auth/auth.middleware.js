const {
  errorResponse
} = require('../../utils/response');

const isUserAdmin = (req, res, next) => {
  try {
    const secret = req.body.secret;
    if (secret !== process.env.MASTER_PASSWORD) {
      throw {
        code: 401,
        message: 'Unauthorized!',
      }
    }
    return next();
  } catch (error) {
    return errorResponse({
      res,
      statusCode: 401,
      error,
      responseMessage: 'Unauthorized!', 
    });
  }
};

module.exports = {
  isUserAdmin,
};
