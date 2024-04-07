const express = require("express");
const ReturnController = require("../controllers/ReturnController");
const {
  authMiddleware,
  authUserMiddleware,
} = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/returns", authUserMiddleware, ReturnController.getAllReturns);
router.get(
  "/returns/:id",
  authUserMiddleware,
  ReturnController.getDetailsReturn
);
router.post(
  "/create-return",
  authUserMiddleware,
  ReturnController.createReturn
);
router.put(
  "/update-return/:id",
  authUserMiddleware,
  ReturnController.updateReturn
);

module.exports = router;
