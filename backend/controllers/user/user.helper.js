const {
  User: UserModel,
} = require('../../models');

const createUserHelper = async (userData) => {
  const {
    name,
    email,
    mobile,
  } = userData;

  const userObject = {
    name,
    email,
    mobile,
    password: employeeNo,
  }
  const userDocument = new UserModel(userObject);
  await userDocument.save();
  return userDocument;
};

const updateUserHelper = async (userData) => {
  const {
    _id,
    email,
    name,
    mobile,
    password,
    settings,
  } = userData;

  const userObject = {};
  if (email) {
    userObject.email = email;
  }
  if (name) {
    userObject.name = name;
  }
  if (mobile) {
    userObject.mobile = mobile;
  }
  if (settings) {
    userObject.settings = settings;
  }
  if (password) {
    userObject.password = password;
  }
  const userDocument = await UserModel.updateOne({ _id }, userObject, { new: true });
  return userDocument;
};

module.exports = {
  createUserHelper,
  updateUserHelper,
};
