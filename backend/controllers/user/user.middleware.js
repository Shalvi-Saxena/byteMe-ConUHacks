const { errorResponse } = require('../../utils/response');
const { STATUS_CODES } = require('../../utils/constants');
const { isValidObjectId, validateEmail } = require('../../utils/validationHelper');
const {
  User: UserModel,
} = require('../../models');

const validatePersonalDetails = params => {
  const {
    email,
    mobile,
    name,
    employeeNo,
  } = params;
  const {
    number,
    countryCode
  } = mobile || {};
  if (!employeeNo) {
    throw {
      code: STATUS_CODES.INVALID_FORMAT,
      message: 'Employee number is required.',
    };
  }
  if (!name || !name.trim()) {
    throw {
      code: STATUS_CODES.INVALID_FORMAT,
      message: 'Employee name is required.',
    };
  }
  if (!email) {
    throw {
      code: STATUS_CODES.INVALID_FORMAT,
      message: 'Employee email is required.',
    };
  }
  if (!validateEmail(email)) {
    throw {
      code: STATUS_CODES.INVALID_FORMAT,
      message: 'Invalid email id',
    };
  }
  if (!number || !countryCode) {
    throw {
      code: STATUS_CODES.INVALID_FORMAT,
      message: 'Invalid contact info.',
    };
  }
};

const validateCreateUser = (req, res, next) => {
  try {
    validatePersonalDetails(req.body);
    return next();
  }
  catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
    });
  }
};

const validateUniqueEmail = async ({ userId, email }) => {
  const findExistingUser = {
    _id: { $ne: userId },
    email,
  };

  const isUserExists = await UserModel.count(findExistingUser);
  if (isUserExists) {
    throw {
      code: STATUS_CODES.VALIDATION_FAILED,
      message: 'Email already exists for another user.'
    }
  }
};

const validateUniqueContactNo = async ({ userId, mobile }) => {
  const findExistingUser = {
    _id: { $ne: userId },
    mobile,
  };

  const isUserExists = await UserModel.countDocuments(findExistingUser);
  if (isUserExists) {
    throw {
      code: STATUS_CODES.VALIDATION_FAILED,
      message: 'Contact no. already exists for another user.'
    }
  }
};

const validateUpdateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    if (!isValidObjectId(userId)) {
      throw {
        code: STATUS_CODES.INVALID_FORMAT,
        message: 'Invalid id.',
      };
    }
    const {
      email,
      mobile,
      name,
      employeeNo,
    } = req.body;
    validatePersonalDetails({ email, mobile, name, employeeNo });
    await validateUniqueEmail({ userId, email });
    await validateUniqueContactNo({ userId, mobile });
    return next();
  }
  catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
    });
  }
};

module.exports = {
  validateCreateUser,
  validateUpdateUser,
};