require('dotenv').config();
const mongoose = require('mongoose');

const { MONGO_URL } = process.env;
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(MONGO_URL, configOptions)
  .then(() => console.log('MongoDB is successfully connected.'))
  .catch((err) => console.log('MongoDB connection error: ', err));

module.exports = {
  UserModel: require('./user.model'),
  CategoryModel: require('./category.model'),
  TransactionModel: require('./transaction.model'),
  RecommendationModel: require('./recommendation.model'),
};
