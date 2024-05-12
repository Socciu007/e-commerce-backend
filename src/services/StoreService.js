const { Code } = require("../models/model");
const Store = require("../models/StoreModel");
const { randomStringNumber } = require("../utils");
const { sendEmailCreateCode } = require("./EmailService");

const getAllStore = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const stores = await Store.find();
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: stores,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailsStore = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const store = await Store.findOne({
        _id: id,
      });

      if (store === null) {
        resolve({
          status: "OK",
          message: "The store is not exist.",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: store,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createStore = (newStore) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, logo, description, code, user } = newStore;
    try {
      const checkCode = await Code.findOne({
        email: email,
      });
      if (!checkCode || checkCode.code !== code) {
        resolve({
          status: "ERR",
          message: "Code is incorrect.",
        });
      }

      const createdStore = await Store.create({
        name,
        email,
        logo,
        description,
        user: user,
      });
      if (createdStore) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdStore,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const sendCode = () => {
  return new Promise(async (resolve, reject) => {
    const { email } = req;
    try {
      const code = randomStringNumber(6);
      await Code.deleteMany({ email });
      await Code.create({ code: code, email: email });
      await sendEmailCreateCode(
        email,
        "GOTECH-CODE",
        `Code cua ban la ${code}`
      );
      resolve({
        status: "OK",
        message: "Success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const updateStore = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStore = await Store.findOne({
        _id: id,
      });

      if (checkStore === null) {
        resolve({
          status: "OK",
          message: "The store is not exist.",
        });
      }

      const updatedStore = await Store.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedStore,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllStore,
  getDetailsStore,
  createStore,
  updateStore,
  sendCode,
};
