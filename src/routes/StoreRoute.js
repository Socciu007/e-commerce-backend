const express = require("express");
const StoreController = require("../controllers/StoreController");
const {
  authMiddleware,
  authUserMiddleware,
} = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/stores", authMiddleware, StoreController.getAllStore);
router.get("/stores/:id", authUserMiddleware, StoreController.getDetailsStore);
router.post("/create-store", authUserMiddleware, StoreController.createStore);
router.post("/create-code", StoreController.createCode);
router.put(
  "/update-store/:id",
  authUserMiddleware,
  StoreController.updateStore
);

module.exports = router;
