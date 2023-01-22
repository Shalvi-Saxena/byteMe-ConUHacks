const router = require('express').Router();
const { getRecommendations } = require('../controllers/recommendation/recommendation.controller');

router.get('/', getRecommendations);

module.exports = router;