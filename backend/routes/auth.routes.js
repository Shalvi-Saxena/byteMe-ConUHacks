const router = require('express').Router();
const UserController = require('../controllers/auth/auth.controller');

router.post('/signin', UserController.signin);

module.exports = router;