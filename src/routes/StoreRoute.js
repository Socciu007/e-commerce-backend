const express = require("express");
const StoreController = require("../controllers/StoreController");
const { authUserMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/stores", StoreController.getAllStore);
router.get("/stores/:id", StoreController.getDetailsStore);
router.post("/create-store", StoreController.createStore);
router.post("/create-code", StoreController.createCode);
router.put(
  "/update-store/:id",
  authUserMiddleware,
  StoreController.updateStore
);

module.exports = router;
