const express = require("express");
const router = express();
const userRouter = require('./user.routes');
const s3Router = require('./s3.routes');
const transactionRouter = require('./transaction.routes');
const recommendationRouter = require('./recommendation.routes');

router.use('/user', userRouter);
router.use('/s3', s3Router);
router.use('/transaction', transactionRouter);
router.use('/recommendation', recommendationRouter);

module.exports = router;
