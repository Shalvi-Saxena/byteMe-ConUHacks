const router = require('express').Router();
const { isUserAdmin } = require('../controllers/auth/auth.middleware');
const UserController = require('../controllers/user/user.controller');
const {
    validateCreateUser,
    validateUpdateUser,
} = require('../controllers/user/user.middleware');

router.get('/', UserController.getUserData);
router.post('/', isUserAdmin, UserController.createNewUser);
router.patch('/:id', validateUpdateUser, UserController.updateUser);

module.exports = router;