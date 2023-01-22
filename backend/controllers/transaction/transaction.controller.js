const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const { TransactionModel } = require('../../models');

const getTransactions = async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query;
    const user_id = '63cc5580bcf3d54f64dec4a5'; //req.user._id;
    const findClause = {
      user_id,
    };
    if (type) {
      findClause.type = type;
    }
    if (startDate && endDate) {
      findClause.created_at = {
        $gte: startDate,
        $lte: endDate,
      };
    }
    const projection = {
      user_id: 0,
    };

    const transactions = await TransactionModel
      .find(findClause, projection)
      .populate('category_id')
      .lean();
    return successResponse({
      res,
      responseObject: {
        transactions,
      },
    });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Error getting user transactions.',
    });
  }
};

const addTransaction = async (req, res) => {
  try {
    const user_id = req.user._id; 
    const transactionDoc = new TransactionModel({
      user_id,
      ...req.body,
    });
    await transactionDoc.save();
    return successResponse({ res });
  } catch (error) {
    return errorResponse({
      res,
      error,
      responseMessage: 'Error adding transaction.',
    });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const user_id = req.user._id; 
    const { id } = req.params;
    const data = req.body;
    await TransactionModel.updateOne({ _id: id, user_id }, data);
    return successResponse({ res });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Error updating transaction.',
    });
  }
};


const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await TransactionModel.deleteOne({ _id: id });
    return successResponse({ res });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Error deleting transaction.',
    });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
