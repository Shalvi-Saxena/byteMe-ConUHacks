const {
  successResponse,
  errorResponse,
} = require('../../utils/response');
const { uploadFileToS3 } = require('../../utils/s3.service');

const uploadFile = async (req, res) =>  {
  try {
    const user_id = '63cc5580bcf3d54f64dec4a5'//req.user._id;
    if (!req.file) {
      throw {
        message: 'Error uploading receipt. Missing file.',
      };
    }
    const data = await uploadFileToS3({
      file: req.file.path,
      fileName: `${user_id}-${Date.now()}`,
      contentType: req.file.mimetype,
    });
    return successResponse({
      res,
      responseObject: {
        data,
      },
    });
  } catch (error) {
    console.log(error)
    return errorResponse({
      res,
      error,
      responseMessage: 'Error uploading receipt.',
    });
  }
};

module.exports = {
  uploadFile,
};