const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const {
  User: UserModel,
} = require('../../models/index');
const { STATUS_CODES, JWT_EXPIRY } = require('../../utils/constants');
const jwt = require('jsonwebtoken');

const signin = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;
    console.log(email, password)
    if (!email || !password) {
      throw {
        code: STATUS_CODES.DATA_NOT_FOUND,
        message: 'Email and password required.',
      };
    }
    const userData = await UserModel.findOne({ email });
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
