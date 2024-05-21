const BlogsService = require("../services/BlogsService");

const getAllBlogs = async (req, res) => {
  try {
    const response = await BlogsService.getAllBlogs();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetailBlogs = async (req, res) => {
  try {
    const blogID = req.params.id;
    const response = await BlogsService.getDetailBlogs(blogID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    if (!title || !content || !image) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required.",
      });
    }
    const response = await BlogsService.createBlog(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updatedBlog = async (req, res) => {
  try {
    const blogID = req.params.id;
    const data = req.body;

    const response = await BlogsService.updateBlog(blogID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogID = req.params.id;
    const response = await BlogsService.deleteBlog(blogID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  getAllBlogs,
  getDetailBlogs,
  createBlog,
  updatedBlog,
  deleteBlog,
};
