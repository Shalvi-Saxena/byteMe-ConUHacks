const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  { ObjectId } = mongoose.Schema.Types;
const UserModel = require('./user.model');
const CategoryModel = require('./category.model');

const UserRecommendationsSchema = new Schema({
  user_id: {
    type: ObjectId,
    ref: UserModel,
    required: true,
  },
  category_id: {
    type: ObjectId,
    ref: CategoryModel,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  value: {
    type: String,
    required: true,
  },
  autoBudget: {
    type: Number,
  },
});

module.exports = mongoose.model('Recommendation', UserRecommendationsSchema, 'user_recommendations');