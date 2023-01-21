const {
  User
} = require('../models/');

const users = [{
  employeeNo: '10001',
  email: 'admin@allsafe.com',
  password: 'admin123*',
  isDefaultPassword: false,
  name: 'Gurjeet Babbar',
  mobile: {
    countryCode: '+91',
    number: '7996995999',
  },
  isAdmin: true,
}, {
  employeeNo: '1002',
  email: 'raghav@allsafe.com',
  password: '10002123*',
  name: 'Raghav Jain',
  mobile: {
    countryCode: '+91',
    number: '7886885880',
  },
}];

const createDummyData = async (req, res) => {
  users.forEach(async (user) => {
    const userData = new User(user);
    await userData.save();
  });
  res.json(200, { message: 'Created dummy data' });
}

module.exports = {
  createDummyData,
};
