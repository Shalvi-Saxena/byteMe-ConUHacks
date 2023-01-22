const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const {
  UserModel,
} = require('../../models/index');
const { STATUS_CODES, JWT_EXPIRY } = require('../../utils/constants');
const jwt = require('jsonwebtoken');

const signin = async (req, res) => {
  try {
    const {
      email,
      countryCode,
      mobileNumber,
      password,
    } = req.body;

    if (!(email || (countryCode && mobileNumber)) || !password) {
      throw {
        code: STATUS_CODES.DATA_NOT_FOUND,
        message: 'Credentials required.',
      };
    }
    const findClause = {};
    if (email) {
      findClause.email = email;
    }
    if (countryCode && mobileNumber) {
      findClause['mobile.countryCode'] = countryCode;
      findClause['mobile.number'] = mobileNumber;
    }
    const userData = await UserModel.findOne(findClause);
    if (!userData) {
      throw {
        code: STATUS_CODES.DATA_NOT_FOUND,
        message: 'Invalid email.',
      };
    }
    const isPasswordMatch = await userData.comparePassword(password);
    if (!isPasswordMatch) {
      throw {
        code: STATUS_CODES.INVALID_FORMAT,
        message: 'Invalid password.',
      };
    }
    const payload = {
      userData,
      expires: Date.now() + JWT_EXPIRY,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return successResponse({
      res,
      responseObject: {
        success: true,
        token: 'JWT ' + token,
        userId: userData._id,
        userName: userData.name,
      },
    });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Login error.',
    });
  }
};

module.exports = {
  signin,
};
