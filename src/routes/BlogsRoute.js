const express = require("express");
const BlogsController = require("../controllers/BlogsController");
const { authUserMiddleware } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.get("/get-all", BlogsController.getAllBlogs);
router.get("/get-details/:id", BlogsController.getDetailBlogs);
router.post("/create-blog", BlogsController.createBlog);
router.put("/update-blog/:id", authUserMiddleware, BlogsController.updatedBlog);
router.delete("/delete-blog", BlogsController.deleteBlog);

module.exports = router;
