const express = require("express");
const {
  authMiddleware,
  authUserMiddleware,
} = require("../middlewares/AuthMiddleware");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/create", ProductController.createProduct);
router.get("/get-all", ProductController.getAllProduct);
router.get("/get-all-type", ProductController.getAllType);
router.get("/get-details/:id", ProductController.getDetailProduct);
router.put("/update/:id", authUserMiddleware, ProductController.updateProduct);
router.delete(
  "/delete/:id",
  authUserMiddleware,
  ProductController.deleteProduct
);
router.post("/delete-many", authUserMiddleware, ProductController.deleteMany);

module.exports = router;
