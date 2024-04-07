const express = require('express');
const StoreController = require('../controllers/StoreController');
const { authMiddleware, authUserMiddleware } = require('../middlewares/AuthMiddleware');
const router = express.Router();

router.get('/get-stores', StoreController.getAllStore);
router.get('/get-store/:id', StoreController.getDetailsStore);
router.post('/create-store', StoreController.createStore);
router.put('/update-store/:id', StoreController.updateStore);

module.exports = router;