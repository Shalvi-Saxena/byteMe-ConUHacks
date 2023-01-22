const AWS = require('aws-sdk');

const uploadFileToS3 = (params) =>  {
  return new Promise((resolve, reject) => {
    const {
      file,
      fileName,
      contentType,
    } = params;
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
    });
    const s3Params = {
      Bucket: process.env.AWS_BUCKET,
      Key: `images/${fileName}`,
      Body: file,
      ContentType: contentType,
      ACL: 'public-read',
    };
    s3.upload(s3Params, (s3Err, data) => {
      if (s3Err) {
        reject(s3Err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  uploadFileToS3,
};