const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  { ObjectId } = mongoose.Schema.Types;
const UserModel = require('./user.model');
const CategoryModel = require('./category.model');
const { currencies, transactionTypes, modelClassifications } = require('./constants');

const TransactionSchema = new Schema({
  user_id: {
    type: ObjectId,
    ref: UserModel,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: Object.keys(transactionTypes),
  },
  category_id: {
    type: ObjectId,
    ref: CategoryModel,
    required: true,
  },
  note: {
    type: String,
    trim: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  location: {
    type: String,
  },
  currency: {
    type: String,
    enum: currencies.map(c => c.code),
  },
  amount: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  model_classification: {
    type: String,
    enum: modelClassifications,
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema, 'user_transactions');