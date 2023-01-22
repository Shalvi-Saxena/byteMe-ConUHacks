const router = require('express').Router();
const multer  = require('multer');
const {
  uploadFile,
} = require('../controllers/s3/s3.controller.js');

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10000000,
  },
  fileFilter(req, file, cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload a valid image file'));
    }
    cb(undefined, true);
  },
});

router.post('/', upload.single('file'), uploadFile);

module.exports = router;