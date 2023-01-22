const router = require('express').Router();
const TransactionController = require('../controllers/transaction/transaction.controller');

router.get('/', TransactionController.getTransactions);
router.post('/', TransactionController.addTransaction);
router.patch('/:id', TransactionController.updateTransaction);
router.delete('/:id', TransactionController.deleteTransaction);

module.exports = router;