const express = require("express");
const { authMiddleware, authUserMiddleware } = require('../middlewares/AuthMiddleware');
const OrderController = require('../controllers/OrderController');
const router = express.Router();

router.post('/create/:id', authUserMiddleware, OrderController.createOrder)
router.get('/get-all-order/:id',authUserMiddleware, OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authUserMiddleware, OrderController.cancelOrderDetails)
router.get('/get-all-order',authMiddleware, OrderController.getAllOrder)

module.exports = router