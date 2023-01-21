const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const {
  createUserHelper,
  updateUserHelper,
} = require('./user.helper');
const {
  User: UserModel,
} = require('../../models');

const getUserData = async (req, res) => {
  try {
    let id = req.user._id;
    const projection = {
      email: 1,
      name: 1,
      mobile: 1,
      settings: 1,
    };

    const userData = await UserModel.findOne(id, projection).lean();
    return successResponse({
      res,
      responseObject: {
        userData
      },
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      responseMessage: 'Error getting user details.',
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const userData = await createUserHelper(req.body);
    return successResponse({
      res,
      responseObject: {
        userData
      },
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      responseMessage: 'Error creating user.',
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = await updateUserHelper(req.body);
    return successResponse({
      res,
      responseObject: {
        userData
      },
    });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Error updating user.',
    });
  }
};

module.exports = {
  createNewUser,
  updateUser,
  getUserData,
};
