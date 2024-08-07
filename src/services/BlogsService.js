const User = require("../models/UserModel");
const { Blogs } = require("../models/model");

const getAllBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const blogs = await Blogs.find();
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: blogs,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailBlogs = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const blog = await Blogs.findOne({
        _id: id,
      });

      if (blog === null) {
        resolve({
          status: "OK",
          message: "The blog is not exist.",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: blog,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createBlog = (newBlog) => {
  return new Promise(async (resolve, reject) => {
    const { title, content, image, description, user } = newBlog;
    try {
      const admin = await User.findOne({ _id: user });
      if (user === null) {
        resolve({
          status: "ERR",
          message: "User is not exist",
        });
      }
      const createBlog = await Blogs.create({
        title,
        content,
        image,
        description,
        user,
      });
      if (createBlog) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createBlog,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateBlog = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const blog = await Blogs.findOne({
        _id: id,
      });

      if (blog === null) {
        resolve({
          status: "OK",
          message: "The blog is not exist.",
        });
      }

      const updatedBlog = await Blogs.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedBlog,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteBlog = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const blog = await Blogs.findOne({
        _id: id,
      });

      if (blog === null) {
        resolve({
          status: "OK",
          message: "The blog is not exist.",
        });
      }

      await Blogs.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete blog success.",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllBlogs,
  getDetailBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
