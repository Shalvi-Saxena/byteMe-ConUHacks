const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const { RecommendationModel } = require('../../models');

const getRecommendations = async (req, res) => {
  try {
    const user_id = req.user._id;
    const recommendations = await RecommendationModel.find({ user_id }).lean();
    return successResponse({
      res,
      responseObject: {
        recommendations,
      },
    });
  } catch (error) {
    return errorResponse({
      res,
      error,
      responseMessage: 'Error getting user recommendations.',
    });
  }
};

module.exports = {
  getRecommendations,
};
