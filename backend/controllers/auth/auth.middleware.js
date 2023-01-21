const {
  errorResponse
} = require('../../utils/response');

const isUserAdmin = (req, res, next) => {
  try {
    const {
      isAdmin,
    } = req.user;
    if (!isAdmin) {
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
